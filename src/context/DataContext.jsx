import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

const SCHOOL_CODES = {
  NONE: "NONE",
  RKBS_BRI175: "RKBS_BRI175",
  VAPS_BRI271: "VAPS_BRI271",
  MGGJ_BRI216: "MGGJ_BRI216",
};

const SCHOOLS = [
  {
    code: SCHOOL_CODES.NONE,
  },
  {
    code: SCHOOL_CODES.VAPS_BRI271,
    name: "Vidyashram Public Sr. Sec. School",
    sheetName: "VIDY",
  },
  {
    code: SCHOOL_CODES.RKBS_BRI175,
    name: "Radha Krishna Birla School",
    sheetName: "RKBS",
  },
  {
    code: SCHOOL_CODES.MGGJ_BRI216,
    name: "Mahatma Gandhi Government School Jeeni",
    sheetName: "MGGJ"
  },
];
const CONTACT_MESSAGES_SHEET_NAME = "ContactMessages";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [teams, setTeams] = useState([]);
  const [sheetId, setSheetId] = useState(import.meta.env.VITE_SHEET_ID || "");
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_API_KEY || "");
  const [schoolCode, setSchoolCode] = useState(
    localStorage.getItem("SchoolCode") || ""
  );
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

    if (sheetName === "NONE") {
      setError("Invalid Code");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const url = getApiUrl(sheetId, sheetName);
      const response = await fetch(url);

      if (!response.ok) {
        setError("Invalid Code. Please Try Again");
        return;
      }

      const apiResponse = await response.json();

      if (!apiResponse.values || apiResponse.values.length === 0) {
        setError("Invalid Code. Please Try Again");
        return;
      }

      const apiRows = parseApiResponse(apiResponse);
      const teamsData = convertToTeams(apiRows, schoolCode);
      localStorage.setItem("SchoolCode", schoolCode);
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
  const submitContactForm = useCallback(
    async (formData) => {
      if (!apiKey.trim() || !sheetId.trim()) {
        setWriteError("Missing required API key or Sheet ID for contact form.");
        return false;
      }

      setIsWriting(true);
      setWriteError("");

      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
          CONTACT_MESSAGES_SHEET_NAME
        )}!A:Z:append?valueInputOption=RAW&key=${apiKey}`;
        const rowData = [
          [
            new Date().toLocaleString(),
            formData.name,
            formData.email,
            formData.subject,
            formData.message,
          ],
        ];

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: rowData,
          }),
        });

        console.log(response);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to submit message: ${
              errorData.error.message || response.statusText
            }`
          );
        }

        const result = await response.json();
        console.log("Contact message submitted successfully:", result);
        return true;
      } catch (error) {
        setWriteError(error.message || "Failed to submit contact message.");
        return false;
      } finally {
        setIsWriting(false);
      }
    },
    [apiKey, sheetId]
  );

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
      submitContactForm,
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
      submitContactForm,
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
