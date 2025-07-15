import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  Clock,
  Star,
  Zap,
  Loader2,
} from "lucide-react";

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoadingStates, setImageLoadingStates] = useState({});

  useEffect(() => {
    if (!document.getElementById("projects-carousel-styles")) {
      const style = document.createElement("style");
      style.id = "projects-carousel-styles";
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
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
        
        .image-loading {
          position: relative;
          overflow: hidden;
        }
        
        .image-loading::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 1.5s infinite;
          z-index: 1;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "Automated Plant Watering System",
      category: "Agricultural Robotics",
      description:
        "Build a smart irrigation robot that monitors soil moisture and automatically waters plants when needed.",
      image: "photo-1416879595882-3373a0480b5b",
      duration: "Week 4-5",
      difficulty: "Beginner",
      technologies: [
        "Arduino Uno",
        "Soil Moisture Sensor",
        "Water Pump",
        "Basic Programming",
      ],
      features: [
        "Automatic soil moisture detection",
        "Scheduled watering system",
        "LED indicators for system status",
        "Manual override controls",
      ],
      outcomes:
        "Students will learn sensor basics, understand automation principles, and create a useful home gardening tool.",
    },
    {
      id: 2,
      title: "Smart Trash Sorting Robot",
      category: "Environmental Robotics",
      description:
        "Create a robotic system that identifies and sorts different types of waste materials using sensors and mechanical arms.",
      image: "photo-1532996122724-e3c354a0b15b",
      duration: "Week 6-7",
      difficulty: "Intermediate",
      technologies: [
        "Arduino",
        "Servo Motors",
        "Color Sensors",
        "Mechanical Design",
      ],
      features: [
        "Material identification using sensors",
        "Robotic arm for sorting mechanism",
        "Multiple sorting bins",
        "Waste counting and statistics",
      ],
      outcomes:
        "Students will understand environmental applications of robotics and build a socially useful project.",
    },
    {
      id: 3,
      title: "Pet Feeding Robot",
      category: "Home Automation",
      description:
        "Design an automated pet feeder that dispenses food at scheduled times and can be controlled remotely.",
      image: "photo-1450778869180-41d0601e046e",
      duration: "Week 5-6",
      difficulty: "Intermediate",
      technologies: ["Arduino", "Servo Motors", "RTC Module", "Mobile App"],
      features: [
        "Scheduled automatic feeding",
        "Portion control mechanism",
        "Mobile app remote control",
        "Low food level alerts",
      ],
      outcomes:
        "Students will learn about real-time systems, mobile connectivity, and create a practical pet care solution.",
    },
   
    {
      id: 4,
      title: "Smart Security Alert Robot",
      category: "Security Robotics",
      description:
        "Create a mobile security robot that patrols an area, detects motion, and sends alerts when intruders are detected.",
      image: "photo-1485827404703-89b55fcc595e",
      duration: "Week 8-9",
      difficulty: "Advanced",
      technologies: [
        "Arduino",
        "PIR Sensors",
        "Camera Module",
        "Motors",
        "Buzzer",
      ],
      features: [
        "Motion detection and alerts",
        "Automated patrol patterns",
        "Photo capture of detected movement",
        "Remote monitoring via smartphone",
      ],
      outcomes:
        "Students will learn about security systems, sensor integration, and create a functional surveillance robot.",
    },
    {
      id: 6,
      title: "Classroom Helper Robot",
      category: "Educational Robotics",
      description:
        "Build a robot assistant that can distribute worksheets, collect assignments, and help with basic classroom tasks.",
      image: "photo-1509062522246-3755977927d7",
      duration: "Week 6-7",
      difficulty: "Intermediate",
      technologies: [
        "Arduino",
        "Ultrasonic Sensors",
        "Servo Motors",
        "Voice Module",
      ],
      features: [
        "Voice command recognition",
        "Object pickup and delivery",
        "Obstacle avoidance navigation",
        "Interactive student responses",
      ],
      outcomes:
        "Students will understand service robotics and create a robot that can assist in educational environments.",
    },
    {
      id: 7,
      title: "Weather Monitoring Robot",
      category: "Environmental Monitoring",
      description:
        "Design a mobile weather station robot that moves around collecting temperature, humidity, and air quality data.",
      image: "photo-1504608524841-42fe6f032b4b",
      duration: "Week 5-6",
      difficulty: "Beginner",
      technologies: [
        "Arduino",
        "Weather Sensors",
        "LCD Display",
        "Data Logging",
      ],
      features: [
        "Multiple environmental sensors",
        "Real-time data display",
        "Data logging and storage",
        "Mobile data collection",
      ],
      outcomes:
        "Students will learn about environmental monitoring and create a scientific data collection tool.",
    },
    {
      id: 8,
      title: "Elderly Care Reminder Robot",
      category: "Healthcare Robotics",
      description:
        "Build a companion robot that reminds elderly people to take medication, drink water, and provides basic interaction.",
      image: "photo-1559757148-5c350d0d3c56",
      duration: "Week 7-8",
      difficulty: "Advanced",
      technologies: [
        "Arduino",
        "Voice Module",
        "RTC",
        "LED Display",
        "Sensors",
      ],
      features: [
        "Medication reminder alarms",
        "Voice interaction and responses",
        "Emergency alert system",
        "Simple games and entertainment",
      ],
      outcomes:
        "Students will understand healthcare applications of robotics and create a socially beneficial project.",
    },
  ];

  const itemsPerPage =
    window.innerWidth >= 1280
      ? 5
      : window.innerWidth >= 1024
      ? 4
      : window.innerWidth >= 768
      ? 2
      : 1;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % totalPages),
    [totalPages]
  );
  const prevSlide = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages),
    [totalPages]
  );
  const closeModal = useCallback(() => setSelectedProject(null), []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedProject) {
        if (event.key === "Escape") {
          closeModal();
        }
      } else {
        if (event.key === "ArrowLeft") {
          prevSlide();
        } else if (event.key === "ArrowRight") {
          nextSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, prevSlide, nextSlide, closeModal]);

  // Auto-advance carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedProject) {
        nextSlide();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [selectedProject, nextSlide]);

  const handleImageLoad = (projectId) => {
    setImageLoadingStates((prev) => ({ ...prev, [projectId]: false }));
  };

  const handleImageLoadStart = (projectId) => {
    setImageLoadingStates((prev) => ({ ...prev, [projectId]: true }));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return <Star className="w-3 h-3" />;
      case "Intermediate":
      case "Advanced":
        return <Zap className="w-3 h-3" />;
      default:
        return <Star className="w-3 h-3" />;
    }
  };

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
          background: `linear-gradient(90deg, transparent 0%, hsla(var(--primary), 0.05) 50%, transparent 100%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{
              background: `hsla(var(--primary), 0.1)`,
            }}
          >
            <Zap className="w-8 h-8" style={{ color: `hsl(var(--primary))` }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: `hsl(var(--foreground))` }}
          >
            <span
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real-World Robotics Projects
            </span>{" "}
            You'll Build
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            From smart home automation to healthcare robots - create projects
            that solve real problems and showcase your skills
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={prevSlide}
            className="group flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 disabled:opacity-50 hover:scale-110"
            style={{
              background: `hsl(var(--card))`,
              border: `2px solid hsl(var(--border))`,
              color: `hsl(var(--foreground))`,
              boxShadow: `var(--shadow)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--primary))`;
              e.currentTarget.style.color = `hsl(var(--primary))`;
              e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.borderColor = `hsl(var(--border))`;
                e.currentTarget.style.color = `hsl(var(--foreground))`;
                e.currentTarget.style.boxShadow = `var(--shadow)`;
              }
            }}
            disabled={currentIndex === 0}
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <div className="flex space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
                style={{
                  background:
                    index === currentIndex
                      ? `hsl(var(--primary))`
                      : `hsl(var(--muted))`,
                  transform:
                    index === currentIndex ? "scale(1.25)" : "scale(1)",
                }}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="group flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 disabled:opacity-50 hover:scale-110"
            style={{
              background: `hsl(var(--card))`,
              border: `2px solid hsl(var(--border))`,
              color: `hsl(var(--foreground))`,
              boxShadow: `var(--shadow)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--primary))`;
              e.currentTarget.style.color = `hsl(var(--primary))`;
              e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.borderColor = `hsl(var(--border))`;
                e.currentTarget.style.color = `hsl(var(--foreground))`;
                e.currentTarget.style.boxShadow = `var(--shadow)`;
              }
            }}
            disabled={currentIndex === totalPages - 1}
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Projects Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="flex-shrink-0 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 px-2">
                  {projects
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((project) => (
                      <div
                        key={project.id}
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
                      >
                        <div className="p-0 flex-shrink-0 relative">
                          <div className="relative overflow-hidden">
                            {imageLoadingStates[project.id] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 image-loading">
                                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                              </div>
                            )}
                            <img
                              src={`https://images.unsplash.com/${project.image}?w=400&h=200&fit=crop`}
                              alt={project.title}
                              className="w-full h-44 object-cover group-hover:scale-110 transition-all duration-700"
                              onLoadStart={() =>
                                handleImageLoadStart(project.id)
                              }
                              onLoad={() => handleImageLoad(project.id)}
                              onError={() => handleImageLoad(project.id)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4">
                              <span
                                className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                                style={{
                                  background: `hsla(var(--primary), 0.9)`,
                                  color: `hsl(var(--primary-foreground))`,
                                }}
                              >
                                {project.category}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <span
                                className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1 ${getDifficultyColor(
                                  project.difficulty
                                )}`}
                                style={{
                                  border: `1px solid`,
                                }}
                              >
                                {getDifficultyIcon(project.difficulty)}
                                {project.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                          <h3
                            className="text-lg font-bold mb-3 line-clamp-2 group-hover:transition-colors duration-300"
                            style={{ color: `hsl(var(--foreground))` }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="mb-4 text-sm line-clamp-3 flex-grow leading-relaxed"
                            style={{ color: `hsl(var(--muted-foreground))` }}
                          >
                            {project.description}
                          </p>

                          <div className="flex items-center justify-between mb-4">
                            <span
                              className="text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1"
                              style={{
                                color: `hsl(var(--primary))`,
                                background: `hsla(var(--primary), 0.1)`,
                              }}
                            >
                              <Clock className="w-3 h-3" />
                              {project.duration}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies
                                .slice(0, 1)
                                .map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 rounded-md text-xs"
                                    style={{
                                      background: `hsl(var(--muted))`,
                                      color: `hsl(var(--muted-foreground))`,
                                      border: `1px solid hsl(var(--border))`,
                                    }}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.technologies.length > 1 && (
                                <span
                                  className="px-2 py-1 rounded-md text-xs"
                                  style={{
                                    background: `hsl(var(--muted))`,
                                    color: `hsl(var(--muted-foreground))`,
                                    border: `1px solid hsl(var(--border))`,
                                  }}
                                >
                                  +{project.technologies.length - 1}
                                </span>
                              )}
                            </div>
                          </div>

                          <button
                            onClick={() => setSelectedProject(project)}
                            className="w-full transition-all duration-300 py-3 px-4 font-semibold flex items-center justify-center text-sm group-hover:scale-105"
                            style={{
                              background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                              color: `hsl(var(--primary-foreground))`,
                              borderRadius: `var(--radius)`,
                              boxShadow: `var(--shadow)`,
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = `linear-gradient(135deg, hsla(var(--primary), 0.9) 0%, hsla(var(--secondary), 0.9) 100%)`;
                              e.target.style.boxShadow = `var(--shadow-hover)`;
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`;
                              e.target.style.boxShadow = `var(--shadow)`;
                            }}
                          >
                            View Details
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
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
            className="max-w-5xl max-h-[90vh] overflow-y-auto w-full modal-content"
            style={{
              background: `hsl(var(--card))`,
              border: `2px solid hsl(var(--border))`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--shadow-hover)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2
                    className="text-3xl font-bold mb-2"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {selectedProject.title}
                  </h2>
                  <span
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `hsla(var(--primary), 0.1)`,
                      color: `hsl(var(--primary))`,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="text-2xl w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-red-50 hover:text-red-500"
                  style={{ color: `hsl(var(--muted-foreground))` }}
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/${selectedProject.image}?w=800&h=400&fit=crop`}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover"
                    style={{
                      borderRadius: `var(--radius)`,
                      boxShadow: `var(--shadow)`,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 100%)`,
                      borderRadius: `var(--radius)`,
                    }}
                  ></div>
                </div>

                <div>
                  <h4
                    className="font-bold mb-4 text-xl flex items-center gap-2"
                    style={{ color: `hsl(var(--foreground))` }}
                  >
                    <Zap
                      className="w-5 h-5"
                      style={{ color: `hsl(var(--primary))` }}
                    />
                    Project Overview
                  </h4>
                  <p
                    className="leading-relaxed text-lg p-6"
                    style={{
                      color: `hsl(var(--muted-foreground))`,
                      background: `hsla(var(--muted), 0.5)`,
                      border: `1px solid hsl(var(--border))`,
                      borderRadius: `var(--radius)`,
                    }}
                  >
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    className="p-6"
                    style={{
                      background: `hsla(var(--muted), 0.5)`,
                      border: `1px solid hsl(var(--border))`,
                      borderRadius: `var(--radius)`,
                    }}
                  >
                    <h4
                      className="font-bold mb-3 flex items-center gap-2"
                      style={{ color: `hsl(var(--foreground))` }}
                    >
                      <Clock
                        className="w-4 h-4"
                        style={{ color: `hsl(var(--primary))` }}
                      />
                      Duration
                    </h4>
                    <p style={{ color: `hsl(var(--muted-foreground))` }}>
                      {selectedProject.duration}
                    </p>
                  </div>
                  <div
                    className="p-6"
                    style={{
                      background: `hsla(var(--muted), 0.5)`,
                      border: `1px solid hsl(var(--border))`,
                      borderRadius: `var(--radius)`,
                    }}
                  >
                    <h4
                      className="font-bold mb-3"
                      style={{ color: `hsl(var(--foreground))` }}
                    >
                      Difficulty Level
                    </h4>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${getDifficultyColor(
                        selectedProject.difficulty
                      )} flex items-center gap-2 w-fit`}
                    >
                      {getDifficultyIcon(selectedProject.difficulty)}
                      {selectedProject.difficulty}
                    </span>
                  </div>
                  <div
                    className="p-6"
                    style={{
                      background: `hsla(var(--muted), 0.5)`,
                      border: `1px solid hsl(var(--border))`,
                      borderRadius: `var(--radius)`,
                    }}
                  >
                    <h4
                      className="font-bold mb-3"
                      style={{ color: `hsl(var(--foreground))` }}
                    >
                      Category
                    </h4>
                    <span
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        background: `hsla(var(--primary), 0.1)`,
                        color: `hsl(var(--primary))`,
                      }}
                    >
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h4
                    className="font-bold mb-4 text-xl"
                    style={{ color: `hsl(var(--foreground))` }}
                  >
                    Technologies & Components
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md text-center"
                        style={{
                          background: `hsla(var(--primary), 0.1)`,
                          color: `hsl(var(--primary))`,
                          border: `1px solid hsla(var(--primary), 0.2)`,
                          borderRadius: `var(--radius)`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.features && (
                  <div>
                    <h4
                      className="font-bold mb-4 text-xl"
                      style={{ color: `hsl(var(--foreground))` }}
                    >
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4"
                          style={{
                            background: `hsla(var(--muted), 0.3)`,
                            border: `1px solid hsl(var(--border))`,
                            borderRadius: `var(--radius)`,
                          }}
                        >
                          <Zap
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: `hsl(var(--primary))` }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: `hsl(var(--muted-foreground))` }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.outcomes && (
                  <div>
                    <h4
                      className="font-bold mb-4 text-xl"
                      style={{ color: `hsl(var(--foreground))` }}
                    >
                      Learning Outcomes
                    </h4>
                    <div
                      className="p-6"
                      style={{
                        background: `linear-gradient(135deg, hsla(var(--primary), 0.05) 0%, hsla(var(--secondary), 0.05) 100%)`,
                        border: `2px solid hsla(var(--primary), 0.2)`,
                        borderRadius: `var(--radius)`,
                      }}
                    >
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: `hsl(var(--muted-foreground))` }}
                      >
                        {selectedProject.outcomes}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsCarousel;
