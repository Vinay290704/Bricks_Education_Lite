import { useState, useContext } from "react";
import { Trophy, Medal, Award } from "lucide-react";
import TeamCard from "./TeamCard";
import { DataContext } from "../../context/DataContext";

const TeamLeaderboard = () => {
  const [expandedTeams, setExpandedTeams] = useState(new Set());
  const { computedValues } = useContext(DataContext);

  const onToggle = (id) => {
    setExpandedTeams((prevExpandedTeams) => {
      const newExpandedTeams = new Set(prevExpandedTeams);
      if (newExpandedTeams.has(id)) {
        newExpandedTeams.delete(id); 
      } else {
        newExpandedTeams.add(id); 
      }
      return newExpandedTeams;
    });
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-8 h-8 text-yellow-500 drop-shadow-lg" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-400 drop-shadow-lg" />;
      case 3:
        return <Award className="w-8 h-8 text-orange-500 drop-shadow-lg" />;
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center shadow-inner">
            <span className="text-sm font-bold text-orange-700">#{rank}</span>
          </div>
        );
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-black text-gray-800 mb-2">
            Team Rankings
          </h1>
          <p className="text-gray-600">Live competition leaderboard</p>
        </div>
      </div>

      <div className="space-y-4">
        {computedValues.teamsSortedByPoints.map((team, index) => (
          <TeamCard
            key={team.id}
            team={team}
            rank={team.rank}
            isExpanded={expandedTeams.has(team.id)}
            onToggle={onToggle}
            getRankIcon={getRankIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamLeaderboard;
