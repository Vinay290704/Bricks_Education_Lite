import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import TeamLeaderboard from "../components/LeaderBoard/TeamLeaderboard";
import MetaDataSidebar from "../components/LeaderBoard/MetaDataSideBar";
import SchoolCodeEntry from "../components/LeaderBoard/SchoolCodeEntry";

const Leaderboard = () => {
  const { authenticated } = useContext(DataContext);

  if (!authenticated) {
    return <SchoolCodeEntry />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-23">
      {/* Mobile: Stack vertically, Desktop: Side by side */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar: Full width on mobile, 1/3 width on desktop */}
        <div className="w-full lg:w-1/3 lg:min-w-[400px] bg-white/80 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-gray-200/50">
          <MetaDataSidebar />
        </div>
        
        {/* Main content: Full width on mobile, flexible on desktop */}
        <div className="flex-1 overflow-auto">
          <TeamLeaderboard />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;