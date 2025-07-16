import React, { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  X,
  Linkedin,
} from "lucide-react";

const CampusVisitSection = () => {
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
      position: "Co-Founder",
      company: "Scaler Academy",
      image: "Pic3.jpg",
      linkedin: "https://www.linkedin.com/in/abhimanyusaxena/",
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
      position: "Co-Founder & CEO",
      company: "Scaler Academy",
      image: "Pic1.jpg",
      linkedin: "https://www.linkedin.com/in/anshumansingh26/",
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
      linkedin: "https://www.linkedin.com/in/myprasanna/",
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
      linkedin: "https://www.linkedin.com/in/manmeetakali/",
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
            className="p-12 text-center transition-all duration-300 hover:scale-105 pulse-animation"
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
              🎯 Visit Our Campus & Meet These Legends!
            </h3>
            <p
              className="text-xl leading-relaxed max-w-4xl mx-auto mb-6"
              style={{ color: `hsla(var(--primary-foreground), 0.9)` }}
            >
              When you visit Scaler School of Technology campus, you'll get
              exclusive opportunities to meet and learn directly from these
              industry pioneers who have built billion-dollar companies
            </p>
            <div
              className="inline-block px-6 py-3 rounded-full font-semibold"
              style={{
                background: `hsla(var(--primary-foreground), 0.2)`,
                color: `hsl(var(--primary-foreground))`,
                border: `2px solid hsla(var(--primary-foreground), 0.3)`,
              }}
            >
              🌟 Campus visits include personal mentorship sessions
            </div>
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
            Industry{" "}
            <span
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legends
            </span>{" "}
            You'll Meet
          </h2>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            These successful tech founders and industry pioneers regularly visit
            our campus for exclusive mentorship sessions, workshops, and Q&A
            sessions with students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="legend-card group overflow-hidden h-full flex flex-col transition-all duration-300"
              style={{
                background: `hsl(var(--card))`,
                border: `2px solid hsl(var(--border))`,
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
                minHeight: "400px",
              }}
            >
              <div className="p-0 flex-shrink-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={getImageUrl(leader.image)}
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `hsla(var(--primary), 0.9)`,
                        color: `hsl(var(--primary-foreground))`,
                      }}
                    >
                      Available for Campus Mentorship
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3
                  className="text-2xl font-bold mb-2 group-hover:transition-colors duration-300"
                  style={{ color: `hsl(var(--foreground))` }}
                >
                  {leader.name}
                </h3>
                <p
                  className="text-lg font-medium mb-2"
                  style={{ color: `hsl(var(--primary))` }}
                >
                  {leader.position}
                </p>
                <p
                  className="text-base mb-4"
                  style={{ color: `hsl(var(--muted-foreground))` }}
                >
                  {leader.company}
                </p>
                <p
                  className="text-sm leading-relaxed flex-grow"
                  style={{ color: `hsl(var(--muted-foreground))` }}
                >
                  {leader.bio}
                </p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: `hsla(var(--primary-foreground), 0.9)`,
                    color: `#0077B5`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusVisitSection;
