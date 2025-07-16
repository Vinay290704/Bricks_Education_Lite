import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import {
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Play,
  Zap,
  Trophy,
} from "lucide-react";
import EventCard from "./EventCard";
import BricksLogo from "../../assets/images/Logo.png";

const MetadataSidebar = () => {
  const { computedValues } = useContext(DataContext);

  const upcomingEvents = [
    {
      id: 1,
      title: "Robo Races",
      time: "Day-1",
      type: "WorkShop",
      description: "Race to see whose robot is fastest!",
      icon: Play,
    },
    {
      id: 2,
      title: "Real Project Building",
      time: "Day-2",
      type: "WorkShop",
      description: "Build practical robot solutions!",
      icon: Zap,
    },
    {
      id: 3,
      title: "Exhibition",
      time: "Day-3",
      type: "WorkShop",
      description: "Show your team's skills in fun wars!",
      icon: Trophy,
    },
  ];

  const stats = [
    {
      label: "Active Teams",
      value: `${computedValues.totalTeams}`,
      icon: Users,
      color: "text-orange-600",
    },
    {
      label: "Total Students",
      value: `${computedValues.totalStudents}`,
      icon: TrendingUp,
      color: "text-red-600",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-8 bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={BricksLogo}
            alt="Bricks Logo"
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-3xl font-black">Bricks</h1>
            <p className="text-orange-100">Educational Platform</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-orange-200" />
            <span className="font-semibold">{computedValues.schoolName}</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white/50 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
        <div className="flex gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-white/60 rounded-xl flex-1"
            >
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-6 h-6 text-orange-600" />
          <h3 className="text-lg font-bold text-gray-800">Events Planned</h3>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetadataSidebar;
