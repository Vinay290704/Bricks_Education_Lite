import React, {
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
    sheetName: "RKPS",
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
    "1hSEQDnZq2ZewQcgZPxvmUWAMfqD0JXZLG5mJVhS_zFM"
  );

  const [schoolCode, setSchoolCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const getCsvUrl = useCallback((id, sheetName) => {
    return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
      sheetName
    )}`;
  }, []);

  const parseCSV = useCallback((csvText) => {
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
    (csvRows, currentSchoolCode) => {
      const teamsData = csvRows.map((row, index) => {
        const [teamName, points, ...members] = row;

        return {
          id: index + 1,
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

    const sheetName = schoolCodeToSheetName[schoolCode];
    if (!sheetName) {
      setError("Invalid school code selected");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const url = getCsvUrl(sheetId, sheetName);
      console.log("Url: ", url);
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

      const teamsData = convertToTeams(csvRows, schoolCode);
      setAuthenticated(true);
      setTeams(teamsData);
    } catch (error) {
      console.error("Error loading data:", error);
      setError(
        error.message ||
          "Failed to load data. Please check your Sheet ID and make sure the sheet is public."
      );
    } finally {
      setLoading(false);
    }
  }, [
    sheetId,
    schoolCode,
    schoolCodeToSheetName,
    getCsvUrl,
    parseCSV,
    convertToTeams,
  ]);

  useEffect(() => {
    if (!sheetId.trim() || !schoolCode.trim() || !authenticated) return;

    loadData();

    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, [loadData, sheetId, schoolCode, authenticated]);

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
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
