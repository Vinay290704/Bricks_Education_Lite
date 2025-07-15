import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

const SCHOOL_CODES = {
  RKBS_XAG175: "RKBS_XAG175",
  SMPS_BHJ892: "SMPS_BHJ892",
  DVPS_KLM456: "DVPS_KLM456",
};

const SCHOOLS = [
  {
    code: SCHOOL_CODES.RKBS_XAG175,
    name: "Radha Krishna Public School",
    sheetName: "Sheet1",
  },
  {
    code: SCHOOL_CODES.SMPS_BHJ892,
    name: "St. Mary's Public School",
    sheetName: "SMPS",
  },
  {
    code: SCHOOL_CODES.DVPS_KLM456,
    name: "Delhi Valley Public School",
    sheetName: "DVPS",
  },
];

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [teams, setTeams] = useState([]);
  const [sheetId, setSheetId] = useState(
    "1q3qRg7MRneBcQ1-5EAieju9q2t4oD_tgSFG2NlBV7hg"
  );
  const [apiKey, setApiKey] = useState(
    "AIzaSyBLjBNb5HpykaD3au1vS3NgW4MXnHY7YLQ"
  );
  const [schoolCode, setSchoolCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [writeError, setWriteError] = useState("");

  const schoolCodeToName = useMemo(() => {
    const mapping = {};
    SCHOOLS.forEach((school) => {
      mapping[school.code] = school.name;
    });
    return mapping;
  }, []);

  const schoolCodeToSheetName = useMemo(() => {
    const mapping = {};
    SCHOOLS.forEach((school) => {
      mapping[school.code] = school.sheetName;
    });
    return mapping;
  }, []);

  const getApiUrl = useCallback(
    (id, sheetName, range = "A:Z") => {
      return `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${encodeURIComponent(
        sheetName
      )}!${range}?key=${apiKey}`;
    },
    [apiKey]
  );

  const parseApiResponse = useCallback((apiResponse) => {
    try {
      if (!apiResponse.values || !Array.isArray(apiResponse.values)) {
        return [];
      }
      return apiResponse.values;
    } catch (error) {
      throw new Error("Failed to parse API response");
    }
  }, []);

  const assignRanks = useCallback((teamsData) => {
    const sortedTeams = [...teamsData].sort((a, b) => b.points - a.points);
    let currentRank = 1;
    return sortedTeams.map((team, index) => {
      if (index === 0) {
        return {
          ...team,
          rank: 1,
        };
      }
      if (team.points !== sortedTeams[index - 1].points) {
        currentRank++;
      }
      return {
        ...team,
        rank: currentRank,
      };
    });
  }, []);

  const convertToTeams = useCallback(
    (apiRows, currentSchoolCode) => {
      const teamsData = apiRows.map((row, index) => {
        const [teamName, points, ...members] = row;

        return {
          id: index + 1,
          rowNumber: index + 1,
          name: teamName || `Team ${index + 1}`,
          points: parseInt(points) || 0,
          members: members.filter((member) => member && member.trim() !== ""),
          teamLeader: members[0],
          memberCount: members.filter(
            (member) => member && member.trim() !== ""
          ).length,
          schoolCode: currentSchoolCode,
          schoolName: schoolCodeToName[currentSchoolCode] || "Unknown School",
        };
      });
      return assignRanks(teamsData);
    },
    [schoolCodeToName, assignRanks]
  );

  const loadData = useCallback(async () => {
    if (!sheetId.trim()) {
      setError("Please provide a valid Sheet ID");
      return;
    }

    if (!schoolCode.trim()) {
      setError("Please select a school");
      return;
    }

    if (!apiKey.trim()) {
      setError("Please provide a valid API key");
      return;
    }

    const sheetName = schoolCodeToSheetName[schoolCode];
    if (!sheetName) {
      setError("Invalid school code selected");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const url = getApiUrl(sheetId, sheetName);
      console.log("API URL: ", url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const apiResponse = await response.json();

      if (!apiResponse.values || apiResponse.values.length === 0) {
        throw new Error("No data found in the sheet");
      }

      const apiRows = parseApiResponse(apiResponse);
      const teamsData = convertToTeams(apiRows, schoolCode);
      setAuthenticated(true);
      setTeams(teamsData);
    } catch (error) {
      setError(
        error.message ||
          "Failed to load data. Please check your Sheet ID, API key, and make sure the sheet is accessible."
      );
    } finally {
      setLoading(false);
    }
  }, [
    sheetId,
    schoolCode,
    apiKey,
    schoolCodeToSheetName,
    getApiUrl,
    parseApiResponse,
    convertToTeams,
  ]);

  const formatTeamForSheet = useCallback((team) => {
    return [team.name, team.points.toString(), ...team.members];
  }, []);

  const appendTeam = useCallback(
    async (teamData) => {
      if (!apiKey.trim() || !sheetId.trim() || !schoolCode.trim()) {
        setWriteError("Missing required configuration");
        return false;
      }

      const sheetName = schoolCodeToSheetName[schoolCode];
      if (!sheetName) {
        setWriteError("Invalid school code");
        return false;
      }

      setIsWriting(true);
      setWriteError("");

      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
          sheetName
        )}!A:Z:append?valueInputOption=RAW&key=${apiKey}`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [formatTeamForSheet(teamData)],
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Team added successfully:", result);

        await loadData();
        return true;
      } catch (error) {
        setWriteError(error.message || "Failed to add team");
        return false;
      } finally {
        setIsWriting(false);
      }
    },
    [
      apiKey,
      sheetId,
      schoolCode,
      schoolCodeToSheetName,
      formatTeamForSheet,
      loadData,
    ]
  );

  const updateTeamPoints = useCallback(
    async (teamId, newPoints) => {
      if (!apiKey.trim() || !sheetId.trim() || !schoolCode.trim()) {
        setWriteError("Missing required configuration");
        return false;
      }

      const team = teams.find((t) => t.id === teamId);
      if (!team) {
        setWriteError("Team not found");
        return false;
      }

      const sheetName = schoolCodeToSheetName[schoolCode];
      if (!sheetName) {
        setWriteError("Invalid school code");
        return false;
      }

      setIsWriting(true);
      setWriteError("");

      try {
        const range = `${sheetName}!B${team.rowNumber}`;
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
          range
        )}?valueInputOption=RAW&key=${apiKey}`;

        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [[newPoints.toString()]],
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Team points updated successfully:", result);

        await loadData();
        return true;
      } catch (error) {
        setWriteError(error.message || "Failed to update team points");
        return false;
      } finally {
        setIsWriting(false);
      }
    },
    [apiKey, sheetId, schoolCode, schoolCodeToSheetName, teams, loadData]
  );

  const deleteTeam = useCallback(
    async (teamId) => {
      if (!apiKey.trim() || !sheetId.trim() || !schoolCode.trim()) {
        setWriteError("Missing required configuration");
        return false;
      }

      const team = teams.find((t) => t.id === teamId);
      if (!team) {
        setWriteError("Team not found");
        return false;
      }

      const sheetName = schoolCodeToSheetName[schoolCode];
      if (!sheetName) {
        setWriteError("Invalid school code");
        return false;
      }

      setIsWriting(true);
      setWriteError("");

      try {
        const range = `${sheetName}!A${team.rowNumber}:Z${team.rowNumber}`;
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
          range
        )}?key=${apiKey}`;

        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [[""]],
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Team deleted successfully:", result);

        await loadData();
        return true;
      } catch (error) {
        setWriteError(error.message || "Failed to delete team");
        return false;
      } finally {
        setIsWriting(false);
      }
    },
    [apiKey, sheetId, schoolCode, schoolCodeToSheetName, teams, loadData]
  );

  const batchUpdateTeams = useCallback(
    async (updates) => {
      if (!apiKey.trim() || !sheetId.trim() || !schoolCode.trim()) {
        setWriteError("Missing required configuration");
        return false;
      }

      const sheetName = schoolCodeToSheetName[schoolCode];
      if (!sheetName) {
        setWriteError("Invalid school code");
        return false;
      }

      setIsWriting(true);
      setWriteError("");

      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchUpdate?key=${apiKey}`;

        const batchData = updates.map((update) => ({
          range: `${sheetName}!A${update.rowNumber}:Z${update.rowNumber}`,
          values: [formatTeamForSheet(update.teamData)],
        }));

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            valueInputOption: "RAW",
            data: batchData,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Batch update successful:", result);

        await loadData();
        return true;
      } catch (error) {
        setWriteError(error.message || "Failed to batch update teams");
        return false;
      } finally {
        setIsWriting(false);
      }
    },
    [
      apiKey,
      sheetId,
      schoolCode,
      schoolCodeToSheetName,
      formatTeamForSheet,
      loadData,
    ]
  );

  useEffect(() => {
    if (
      !sheetId.trim() ||
      !schoolCode.trim() ||
      !apiKey.trim() ||
      !authenticated
    )
      return;

    loadData();

    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, [loadData, sheetId, schoolCode, apiKey, authenticated]);

  const getSchoolByCode = useCallback((code) => {
    return (
      SCHOOLS.find((school) => school.code === code)?.name || "Unknown School"
    );
  }, []);

  const computedValues = useMemo(
    () => ({
      schoolName: getSchoolByCode(schoolCode),
      totalTeams: teams.length,
      totalStudents: teams.reduce((sum, team) => sum + team.memberCount, 0),
      teamsSortedByPoints: [...teams].sort((a, b) => b.points - a.points),
    }),
    [teams, getSchoolByCode, schoolCode]
  );

  const value = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
      teams,
      setTeams,
      sheetId,
      setSheetId,
      schoolCode,
      setSchoolCode,
      loading,
      error,
      schools: SCHOOLS,
      schoolCodeToName,
      schoolCodeToSheetName,
      currentSchoolName: schoolCodeToName[schoolCode] || "",
      computedValues,
      getSchoolByCode,
      loadData,
      apiKey,
      setApiKey,
      isWriting,
      writeError,
      appendTeam,
      updateTeamPoints,
      deleteTeam,
      batchUpdateTeams,
    }),
    [
      authenticated,
      teams,
      sheetId,
      schoolCode,
      loading,
      error,
      schoolCodeToName,
      schoolCodeToSheetName,
      computedValues,
      getSchoolByCode,
      loadData,
      apiKey,
      isWriting,
      writeError,
      appendTeam,
      updateTeamPoints,
      deleteTeam,
      batchUpdateTeams,
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
