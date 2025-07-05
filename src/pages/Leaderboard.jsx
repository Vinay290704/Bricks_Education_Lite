import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import TeamLeaderboard from "../components/LeaderBoard/TeamLeaderBoard";
import MetaDataSidebar from "../components/LeaderBoard/MetaDataSidebar";
import SchoolCodeEntry from "../components/LeaderBoard/SchoolCodeEntry";

const Leaderboard = () => {
  const { authenticated } = useContext(DataContext);

  if (!authenticated) {
    return <SchoolCodeEntry />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="flex h-screen">
        <div className="w-1/3 min-w-[400px] bg-white/80 backdrop-blur-sm border-r border-gray-200/50">
          <MetaDataSidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <TeamLeaderboard />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
