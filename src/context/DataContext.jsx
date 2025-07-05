import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [sheetId, setSheetId] = useState(
    "1hSEQDnZq2ZewQcgZPxvmUWAMfqD0JXZLG5mJVhS_zFM"
  ); // for link of spreadsheet
  const [schoolCode, setSchoolCode] = useState(""); // selected school code
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  const SCHOOL_CODES = {
    RKBS_XAG175: "RKBS_XAG175",
    SMPS_BHJ892: "SMPS_BHJ892",
    DVPS_KLM456: "DVPS_KLM456",
  };

  const schools = [
    {
      code: SCHOOL_CODES.RKBS_XAG175,
      name: "Radha Krishna Public School",
      sheetName: "RKBS_Teams",
    },
    {
      code: SCHOOL_CODES.SMPS_BHJ892,
      name: "St. Mary's Public School",
      sheetName: "SMPS_Teams",
    },
    {
      code: SCHOOL_CODES.DVPS_KLM456,
      name: "Delhi Valley Public School",
      sheetName: "DVPS_Teams",
    },
  ];

  const schoolCodeToName = useMemo(() => {
    const mapping = {};
    schools.forEach((school) => {
      mapping[school.code] = school.name;
    });
    return mapping;
  }, []);

  const schoolCodeToSheetName = useMemo(() => {
    const mapping = {};
    schools.forEach((school) => {
      mapping[school.code] = school.sheetName;
    });
    return mapping;
  }, []);

  const getCsvUrl = (id, sheetName) => {
    return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
      sheetName
    )}`;
  };

  const parseCSV = (csvText) => {
    try {
      const lines = [];
      let current = "";
      let inQuotes = false;

      for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];

        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "\n" && !inQuotes) {
          if (current.trim()) {
            lines.push(current);
          }
          current = "";
          continue;
        }
        current += char;
      }

      if (current.trim()) {
        lines.push(current);
      }

      return lines.map((line) => {
        const result = [];
        let current = "";
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
          const char = line[i];

          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === "," && !inQuotes) {
            result.push(current.replace(/^"|"$/g, ""));
            current = "";
            continue;
          }
          current += char;
        }

        result.push(current.replace(/^"|"$/g, ""));
        return result;
      });
    } catch (error) {
      console.error("CSV parsing error:", error);
      throw new Error("Failed to parse CSV data");
    }
  };

  const convertToTeams = (csvRows) => {
    return csvRows.map((row, index) => {
      const [teamName, points, ...members] = row;

      return {
        id: index + 1,
        name: teamName || `Team ${index + 1}`,
        points: parseInt(points) || 0,
        members: members.filter((member) => member && member.trim() !== ""),
        memberCount: members.filter((member) => member && member.trim() !== "")
          .length,
        schoolCode: schoolCode,
        schoolName: schoolCodeToName[schoolCode] || "Unknown School",
      };
    });
  };

  const loadData = useCallback(async () => {
    if (!sheetId.trim()) {
      setError("Please provide a valid Sheet ID");
      return;
    }

    if (!schoolCode.trim()) {
      setError("Please select a school");
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
      const url = getCsvUrl(sheetId, sheetName);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const csvText = await response.text();

      if (!csvText.trim()) {
        throw new Error("Empty CSV data received");
      }

      const csvRows = parseCSV(csvText);

      if (csvRows.length === 0) {
        throw new Error("No data found in the sheet");
      }

      const teamsData = convertToTeams(csvRows);
      setTeams(teamsData);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error loading data:", error);
      setError(
        error.message ||
          "Failed to load data. Please check your Sheet ID and make sure the sheet is public."
      );
    } finally {
      setLoading(false);
    }
  }, [sheetId, schoolCode, schoolCodeToSheetName, schoolCodeToName]);

  useEffect(() => {
    if (!sheetId.trim() || !schoolCode.trim()) return;

    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, [loadData]);

  useEffect(() => {
    if (sheetId.trim() && schoolCode.trim()) {
      loadData();
    }
  }, [sheetId, schoolCode]);

  const computedValues = useMemo(
    () => ({
      totalTeams: teams.length,
      totalStudents: teams.reduce((sum, team) => sum + team.memberCount, 0),
      highestScoringTeam: teams.reduce(
        (max, team) => (team.points > (max?.points || 0) ? team : max),
        null
      ),
      averagePoints:
        teams.length > 0
          ? Math.round(
              teams.reduce((sum, team) => sum + team.points, 0) / teams.length
            )
          : 0,
      teamsSortedByPoints: [...teams].sort((a, b) => b.points - a.points),
    }),
    [teams]
  );

  const getTeamById = useCallback(
    (id) => {
      return teams.find((team) => team.id === id);
    },
    [teams]
  );

  const getTeamByName = useCallback(
    (name) => {
      return teams.find(
        (team) => team.name.toLowerCase() === name.toLowerCase()
      );
    },
    [teams]
  );

  const getTopTeams = useCallback(
    (limit = 5) => {
      return [...teams].sort((a, b) => b.points - a.points).slice(0, limit);
    },
    [teams]
  );

  const getSchoolByCode = useCallback((code) => {
    return schools.find((school) => school.code === code);
  }, []);

  const getAllSchools = useCallback(() => {
    return schools;
  }, []);

  const value = useMemo(
    () => ({
      teams,
      setTeams,
      sheetId,
      setSheetId,
      schoolCode,
      setSchoolCode,
      loading,
      error,
      lastUpdated,
      schools,
      schoolCodeToName,
      schoolCodeToSheetName,
      currentSchoolName: schoolCodeToName[schoolCode] || "",
      ...computedValues,
      getTeamById,
      getTeamByName,
      getTopTeams,
      getSchoolByCode,
      getAllSchools,
      loadData,
    }),
    [
      teams,
      sheetId,
      schoolCode,
      loading,
      error,
      lastUpdated,
      schoolCodeToName,
      schoolCodeToSheetName,
      computedValues,
      getTeamById,
      getTeamByName,
      getTopTeams,
      getSchoolByCode,
      getAllSchools,
      loadData,
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
