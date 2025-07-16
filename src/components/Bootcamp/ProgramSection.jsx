import React from "react";
import { BookOpen, Users, Star, Award, Zap, Target } from "lucide-react";

const ProgramSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "15+ Real-World Projects",
      desc: "Build actual products that matter and solve real problems in your community",
    },
    {
      icon: Users,
      title: "Direct Mentorship",
      desc: "From successful tech founders who've built billion-dollar companies",
    },
    {
      icon: Star,
      title: "Learn from Legends",
      desc: "Abhimanyu Saxena, Prasanna Sankar, Manmeet Singh & industry experts",
    },
    {
      icon: Award,
      title: "Official Certificates",
      desc: "From Google & Scaler - recognized by top universities and companies",
    },
    {
      icon: Zap,
      title: "Free Robotics Kit",
      desc: "Worth ₹4000 during workshop days - yours to keep forever!",
    },
    {
      icon: Target,
      title: "STEM Curriculum",
      desc: "Industry-relevant and future-ready skills that colleges love",
    },
  ];

  return (
    <section
      id="program"
      className="relative py-10 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      <div
        className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-bounce"
        style={{ animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl animate-bounce"
        style={{ animationDuration: "8s", animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-2xl"
            style={{ boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.4)" }}
          >
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            What's{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Included
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            3-Month Program That Changes Everything 🚀
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-500" />
              <span>500+ Students Transformed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-500" />
              <span>4.9/5 Student Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-500" />
              <span>Industry Recognized</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-3 hover:border-orange-200 hover:shadow-2xl shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                  boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="p-8 text-center flex-grow flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {feature.desc}
                  </p>

                  {/* Highlight badge for special features */}
                  {(index === 3 || index === 4) && (
                    <div className="mt-4 inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                      <span className="text-orange-600 text-xs font-medium">
                        ✨ Exclusive Benefit
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                🚀 Transform Your Future in Just 3 Months
              </h3>
              <p className="text-xl opacity-90 mb-6">
                Join the next generation of innovators and problem solvers
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">3</div>
                  <div className="opacity-90">Months Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="opacity-90">Real Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="opacity-90">Hands-on Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
