import React from "react";
import {
  Star,
  Zap,
  Users,
  Trophy,
  BookOpen,
  Home,
  Recycle,
  Heart,
  Shield,
  GraduationCap,
  CloudRain,
  Stethoscope,
  BookMarked,
} from "lucide-react";

const ProjectsCarousel = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Plant Care Robot",
      category: "Home & Garden",
      description:
        "Build an AI plant assistant that knows when your plants need water! Perfect for busy families.",
      difficulty: "Beginner",
      skillsGained: "Arduino programming, sensor integration, problem-solving",
      icon: Home,
    },
    {
      id: 2,
      title: "Eco-Warrior Recycling Bot",
      category: "Environmental",
      description:
        "Create a robot that sorts trash automatically - be a hero for the planet while learning cutting-edge tech!",
      difficulty: "Intermediate",
      skillsGained: "Computer vision, servo motors, sustainable engineering",
      icon: Recycle,
    },
    {
      id: 3,
      title: "Pet Butler Robot",
      category: "Smart Home",
      description:
        "Build the ultimate pet care assistant! Feeds your furry friends on schedule and tracks their health.",
      difficulty: "Intermediate",
      skillsGained: "App development, real-time systems, user interface design",
      icon: Heart,
    },
    {
      id: 4,
      title: "Home Security Guardian",
      category: "Safety & Security",
      description:
        "Design a smart security robot that protects your home and sends alerts to your phone. Feel like a tech superhero!",
      difficulty: "Advanced",
      skillsGained:
        "Image processing, wireless communication, security protocols",
      icon: Shield,
    },
    {
      id: 5,
      title: "Study Buddy Assistant",
      category: "Education",
      description:
        "Create a helpful robot that organizes your homework, reminds you of deadlines, and makes studying fun!",
      difficulty: "Intermediate",
      skillsGained:
        "Speech recognition, task management, user experience design",
      icon: GraduationCap,
    },
    {
      id: 6,
      title: "Weather Station Explorer",
      category: "Science & Discovery",
      description:
        "Build a mobile weather lab that collects data like a real scientist. Perfect for future meteorologists!",
      difficulty: "Beginner",
      skillsGained: "Data analysis, sensor networks, scientific reporting",
      icon: CloudRain,
    },
    {
      id: 7,
      title: "Grandparent Care Companion",
      category: "Healthcare",
      description:
        "Design a caring robot that helps elderly family members with reminders and emergency alerts. Technology with heart!",
      difficulty: "Advanced",
      skillsGained:
        "Health monitoring, emergency protocols, compassionate design",
      icon: Stethoscope,
    },
    {
      id: 8,
      title: "Library Detective Robot",
      category: "Organization",
      description:
        "Create a super-smart library assistant that finds and organizes books faster than any human librarian!",
      difficulty: "Advanced",
      skillsGained:
        "Database management, pattern recognition, system optimization",
      icon: BookMarked,
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300";
      case "Intermediate":
        return "bg-gradient-to-r from-yellow-100 to-orange-200 text-orange-800 border-orange-300";
      case "Advanced":
        return "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300";
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return <Star className="w-3 h-3 fill-current" />;
      case "Intermediate":
        return <Trophy className="w-3 h-3 fill-current" />;
      case "Advanced":
        return <Zap className="w-3 h-3 fill-current" />;
      default:
        return <Star className="w-3 h-3 fill-current" />;
    }
  };

  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-2xl">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Amazing Robots
            </span>{" "}
            You'll Actually Build!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real projects that solve real problems. Build confidence, learn
            valuable skills, and create something awesome that friends and
            family will love! 🚀
          </p>

          {/* Trust indicators for parents */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-500" />
              <span>Age-appropriate for 9th graders</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-500" />
              <span>Structured learning path</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-orange-500" />
              <span>Portfolio-worthy projects</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:border-orange-200 hover:shadow-2xl shadow-lg flex flex-col"
              >
                <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 flex flex-col h-full">
                  {/* Top section: Category, difficulty, icon, title, and description */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1.5 bg-orange-500/90 text-white rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1 ${getDifficultyColor(
                        project.difficulty
                      )}`}
                    >
                      {getDifficultyIcon(project.difficulty)}
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bottom section: Skills section with flex-grow to push it to the bottom */}
                  <div className="flex-grow flex items-end">
                    <div className="bg-gradient-to-r from-orange-500/5 to-orange-400/10 p-4 rounded-xl border border-orange-500/20 w-full">
                      <h4 className="text-sm font-semibold text-orange-600 mb-2">
                        💪 Skills You'll Gain:
                      </h4>
                      <p className="text-xs text-gray-700">
                        {project.skillsGained}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Parents Section */}
        <div className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why These Projects Matter ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Real-World Skills
                </h4>
                <p className="text-gray-600">
                  Programming, engineering, and problem-solving skills that
                  colleges and employers value.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Age-Appropriate
                </h4>
                <p className="text-gray-600">
                  Designed specifically for 9th graders with proper scaffolding
                  and support.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Portfolio Building
                </h4>
                <p className="text-gray-600">
                  Each project becomes a showcase piece for college applications
                  and internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
