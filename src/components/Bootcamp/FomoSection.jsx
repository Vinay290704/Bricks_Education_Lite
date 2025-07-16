import { GraduationCap, Trophy, Heart, Star, Zap } from "lucide-react";
import { useEffect } from "react";

const FomoSection = () => {
  const trustPoints = [
    {
      icon: GraduationCap,
      title: "Build Real Robots, Not Just Theory",
      description:
        "Create working robots that solve real problems - pet feeders, smart home systems you can show friends",
      parentNote: "Hands-on learning with physical results to demonstrate",
      gradient: "from-blue-400 to-blue-600",
      delay: "0s",
    },
    {
      icon: Trophy,
      title: "Competition-Ready Training",
      description:
        "Prepare for national robotics competitions like Robofest, TechFest with award-winning projects",
      parentNote:
        "Build confidence and skills for STEM competitions and college applications",
      gradient: "from-yellow-400 to-yellow-600",
      delay: "0.2s",
    },
    {
      icon: Zap,
      title: "Future-Proof Career Skills",
      description:
        "Master Arduino, Raspberry Pi, 3D printing, AI basics - skills used at Tesla, SpaceX",
      parentNote:
        "Early exposure to industry-standard tools for career advantage",
      gradient: "from-red-400 to-red-600",
      delay: "0.4s",
    },
  ];

  const stats = [
    {
      number: "300+",
      label: "Robots Built by Students",
      subtext: "Real working projects, not just simulations",
    },
    {
      number: "85%",
      label: "Competition Winners",
      subtext: "Students who participated in robotics competitions",
    },
    {
      number: "12+",
      label: "Industry Mentors",
      subtext: "Engineers from Scaler , InterviewBit and top tech companies",
    },
    {
      number: "100%",
      label: "Project Completion Rate",
      subtext: "Every student builds their own working robot",
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-orange-50 to-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-800">
            Why Grade 9 is the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 mt-2">
              Perfect Time to Start ?
            </span>
          </h2>

          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 text-gray-600">
            Your child's brain is at peak learning capacity. Don't let this
            golden window pass by.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-white rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-2xl md:text-3xl font-black text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="group relative bg-white rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Animated border gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 shadow-lg`}
                >
                  <point.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                  {point.title}
                </h3>

                <p className="leading-relaxed mb-4 text-gray-600">
                  {point.description}
                </p>

                <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-200">
                  <p className="text-sm text-orange-800 font-medium">
                    For Parents: {point.parentNote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FomoSection;