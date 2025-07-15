import React, { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  X,
  ExternalLink,
  Building,
  Briefcase,
} from "lucide-react";

const CampusVisitSection = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    if (!document.getElementById("campus-visit-styles")) {
      const style = document.createElement("style");
      style.id = "campus-visit-styles";
      style.textContent = `
        :root {
          --background: 0 0% 100%;
          --foreground: 210 22% 22%;
          --card: 0 0% 100%;
          --card-foreground: 210 22% 22%;
          --primary: 4 85% 58%;
          --primary-foreground: 0 0% 100%;
          --secondary: 15 100% 60%;
          --secondary-foreground: 0 0% 100%;
          --muted: 0 0% 97%;
          --muted-foreground: 0 0% 40%;
          --accent: 43 89% 81%;
          --accent-foreground: 210 22% 22%;
          --border: 0 0% 90%;
          --radius: 15px;
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-hover: 0 20px 50px rgba(231, 76, 60, 0.2);
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .modal-overlay {
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease-out;
        }
        
        .modal-content {
          animation: slideInUp 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const getImageUrl = (imageName) => {
    try {
      const url = new URL(`../../assets/images/${imageName}`, import.meta.url)
        .href;
      return url;
    } catch (error) {
      console.error(`Failed to load image: ${imageName}`, error);
      return `https://via.placeholder.com/150x150?text=${encodeURIComponent(
        imageName
      )}`;
    }
  };

  const leaders = [
    {
      id: 1,
      name: "Abhimanyu Saxena",
      position: "Co-Founder & CEO",
      company: "Scaler Academy",
      image: "Pic3.jpg",
      bio: "Serial entrepreneur and tech visionary who has built multiple successful companies in the education technology space.",
      achievements: [
        "Built Scaler from 0 to 10,000+ students",
        "Former Software Engineer at Facebook",
        "Y Combinator Alumni",
        "Expert in System Design & Algorithms",
      ],
    },
    {
      id: 2,
      name: "Anshuman Singh",
      position: "Co-Founder & CTO",
      company: "Scaler Academy",
      image: "Pic1.jpg",
      bio: "Technology leader with deep expertise in building scalable systems and mentoring the next generation of engineers.",
      achievements: [
        "Led engineering teams at top tech companies",
        "Expert in Full-Stack Development",
        "Mentor to 1000+ engineers",
        "Open source contributor",
      ],
    },
    {
      id: 3,
      name: "Prasanna Sankar",
      position: "Co-Founder",
      company: "Rippling",
      image: "pic2.jpg",
      bio: "Successful entrepreneur who has built and scaled multiple technology companies from startup to IPO.",
      achievements: [
        "Co-founded Rippling (valued at $11B)",
        "Former VP of Engineering at Zenefits",
        "Stanford Computer Science graduate",
        "Expert in Product & Engineering",
      ],
    },
    {
      id: 4,
      name: "Manmeet Singh Akali",
      position: "Vice President",
      company: "Scaler School of Technology",
      image: "pic4.webp",
      bio: "EdTech leader who scaled Scaler from $8M to $65M revenue and built India's largest tech community with 120K+ members.",
      achievements: [
        "Scaled Scaler revenue from $8M to $65M in 2 years",
        "Built 100 Cr+ revenue business at Scaler School of Technology",
        "Grew Discord community from 25K to 120K members",
        "Successfully exited startup (Klarity) to Sequoia-backed Eduvanz",
      ],
    },
  ];

  const closeModal = () => setSelectedPerson(null);

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, hsla(var(--secondary), 0.05) 50%, transparent 100%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Campus Visit Highlight */}
        <div className="mb-20">
          <div
            className="p-12 text-center transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--shadow-hover)`,
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <MapPin
                className="w-12 h-12"
                style={{ color: `hsl(var(--primary-foreground))` }}
              />
            </div>
            <h3
              className="text-4xl font-bold mb-4"
              style={{ color: `hsl(var(--primary-foreground))` }}
            >
              Visit Scaler School of Technology Campus
            </h3>
            <p
              className="text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: `hsla(var(--primary-foreground), 0.9)` }}
            >
              Meet inspiring people like Abhimanyu, Anshuman, Prasanna, and
              Manmeet in person at our state-of-the-art campus
            </p>
          </div>
        </div>

        {/* Leaders Section */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{
              background: `hsla(var(--secondary), 0.1)`,
            }}
          >
            <Users
              className="w-8 h-8"
              style={{ color: `hsl(var(--secondary))` }}
            />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: `hsl(var(--foreground))` }}
          >
            Meet Industry{" "}
            <span
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legends
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            Get exclusive access to learn from successful tech founders and
            industry pioneers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="group overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{
                background: `hsl(var(--card))`,
                border: `2px solid hsl(var(--border))`,
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `hsla(var(--primary), 0.5)`;
                e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `hsl(var(--border))`;
                e.currentTarget.style.boxShadow = `var(--shadow)`;
              }}
              onClick={() => setSelectedPerson(leader)}
            >
              <div className="p-0 flex-shrink-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={getImageUrl(leader.image)}
                    alt={leader.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col text-center">
                <h3
                  className="text-lg font-bold mb-2 group-hover:transition-colors duration-300"
                  style={{ color: `hsl(var(--foreground))` }}
                >
                  {leader.name}
                </h3>
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: `hsl(var(--primary))` }}
                >
                  {leader.position}
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: `hsl(var(--muted-foreground))` }}
                >
                  {leader.company}
                </p>
                <button
                  className="mt-auto w-full transition-all duration-300 py-2 px-4 font-semibold flex items-center justify-center text-sm group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                    color: `hsl(var(--primary-foreground))`,
                    borderRadius: `var(--radius)`,
                    boxShadow: `var(--shadow)`,
                  }}
                >
                  Learn More
                  <ExternalLink className="ml-2 h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPerson && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4 modal-overlay"
          style={{
            background: `rgba(0, 0, 0, 0.7)`,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="max-w-2xl max-h-[90vh] overflow-y-auto w-full modal-content"
            style={{
              background: `hsl(var(--card))`,
              border: `2px solid hsl(var(--border))`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--shadow-hover)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={getImageUrl(selectedPerson.image)}
                    alt={selectedPerson.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h2
                      className="text-2xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {selectedPerson.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase
                        className="w-4 h-4"
                        style={{ color: `hsl(var(--primary))` }}
                      />
                      <span
                        className="font-medium"
                        style={{ color: `hsl(var(--primary))` }}
                      >
                        {selectedPerson.position}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Building
                        className="w-4 h-4"
                        style={{ color: `hsl(var(--muted-foreground))` }}
                      />
                      <span style={{ color: `hsl(var(--muted-foreground))` }}>
                        {selectedPerson.company}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-2xl w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-red-50 hover:text-red-500"
                  style={{ color: `hsl(var(--muted-foreground))` }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={getImageUrl(selectedPerson.image)}
                    alt={selectedPerson.name}
                    className="w-full h-48 object-cover"
                    style={{
                      borderRadius: `var(--radius)`,
                    }}
                  />
                </div>

                <div>
                  <h4
                    className="font-bold mb-3 text-lg"
                    style={{ color: `hsl(var(--foreground))` }}
                  >
                    About {selectedPerson.name}
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: `hsl(var(--muted-foreground))`,
                      background: `hsla(var(--muted), 0.5)`,
                      border: `1px solid hsl(var(--border))`,
                      borderRadius: `var(--radius)`,
                      padding: "1rem",
                    }}
                  >
                    {selectedPerson.bio}
                  </p>
                </div>

                <div>
                  <h4
                    className="font-bold mb-4 text-lg"
                    style={{ color: `hsl(var(--foreground))` }}
                  >
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {selectedPerson.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3"
                        style={{
                          background: `hsla(var(--muted), 0.3)`,
                          border: `1px solid hsl(var(--border))`,
                          borderRadius: `var(--radius)`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                          style={{ background: `hsl(var(--primary))` }}
                        ></div>
                        <span
                          className="text-sm"
                          style={{ color: `hsl(var(--muted-foreground))` }}
                        >
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CampusVisitSection;
