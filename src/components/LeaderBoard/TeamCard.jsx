import { ChevronDown, ChevronUp, Users } from "lucide-react";

const TeamCard = ({ team, rank, isExpanded, onToggle, getRankIcon }) => {
  const getTopThreeGradient = (rank) => {
    switch (rank) {
      case 1:
        return "from-yellow-50 via-amber-100/50 to-yellow-50";
      case 2:
        return "from-gray-50 via-gray-100/50 to-gray-50";
      case 3:
        return "from-orange-50 via-orange-100/50 to-orange-50";
      default:
        return "from-white to-orange-50/30";
    }
  };

  const getTopThreeBorder = (rank) => {
    switch (rank) {
      case 1:
        return "border-yellow-200/60 shadow-yellow-100/30";
      case 2:
        return "border-gray-200/60 shadow-gray-100/30";
      case 3:
        return "border-orange-200/60 shadow-orange-100/30";
      default:
        return "border-orange-200/40 shadow-orange-100/20";
    }
  };

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        rank <= 3
          ? `bg-gradient-to-r ${getTopThreeGradient(rank)} ${getTopThreeBorder(
              rank
            )} shadow-lg`
          : "bg-gradient-to-r from-white to-orange-50/30 border-orange-200/40 hover:shadow-orange-100/30"
      }`}
    >
      <div className="flex items-center gap-6 p-6">
        <div className="flex items-center justify-center w-16 h-16">
          {getRankIcon(rank)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-gray-800">{team.name}</h3>
            <button
              onClick={() => onToggle(team.id)}
              className="p-2 rounded-lg hover:bg-white/60 transition-colors duration-200 group"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {team.members.length} members
            </span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-3xl font-black text-gray-800 mb-1">
            {team.points.toLocaleString()}
          </div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Points
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="border-t border-gray-200/50 bg-white/40 backdrop-blur-sm">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Team Members
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {team.members.map((member, index) => {
                const isTeamLeader = member === team.teamLeader;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 ${
                      isTeamLeader
                        ? "bg-gradient-to-r from-amber-100/80 to-yellow-100/80 border-2 border-amber-200/60 shadow-md hover:from-amber-150/90 hover:to-yellow-150/90"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                  >
                    <div className="flex-1">
                      <div
                        className={`font-semibold ${
                          isTeamLeader ? "text-amber-800" : "text-gray-800"
                        }`}
                      >
                        {member}
                      </div>
                      <div
                        className={`text-sm flex items-center gap-1 ${
                          isTeamLeader
                            ? "text-amber-700 font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {isTeamLeader && (
                          <span className="inline-block w-2 h-2 bg-amber-400 rounded-full"></span>
                        )}
                        {isTeamLeader ? "Team Leader" : "Team Member"}
                      </div>
                    </div>
                    {isTeamLeader && (
                      <div className="text-amber-500">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21-.899-.353-1.887-.353-2.936a3.32 3.32 0 00-.775-.58zm-2.925 5.924a41.163 41.163 0 005.89-3.935 41.191 41.191 0 015.89 3.935 3.462 3.462 0 01-5.89 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
