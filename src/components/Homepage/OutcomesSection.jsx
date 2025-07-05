import React from "react";

const OutcomesSection = () => {
  const outcomes = [
    {
      number: "01",
      gradient: "gradient-01",
      icon: "🤖",
      title: "Robot Building",
      description:
        "Students assemble and code their first robot using Arduino and real hardware.",
    },
    {
      number: "02",
      gradient: "gradient-02",
      icon: "🧠",
      title: "Critical Thinking",
      description:
        "They learn to ask better questions, break down problems, and think independently.",
    },
    {
      number: "03",
      gradient: "gradient-03",
      icon: "🚀",
      title: "AI Learning Skills",
      description:
        "Master how to learn using ChatGPT, YouTube, and online tools — a lifelong skill.",
    },
    {
      number: "04",
      gradient: "gradient-04",
      icon: "🌍",
      title: "Real-World Exposure",
      description:
        "Explore tech careers like robotics, AI, and design through hands-on tasks.",
    },
    {
      number: "05",
      gradient: "gradient-05",
      icon: "🎤",
      title: "Public Speaking",
      description:
        "Present ideas confidently in a pitch-style format, just like a startup founder.",
    },
    {
      number: "06",
      gradient: "gradient-06",
      icon: "🤝",
      title: "Team Collaboration",
      description:
        "Work in groups to build, test, and present — learning cooperation and leadership.",
    },
    {
      number: "07",
      gradient: "gradient-07",
      icon: "🧩",
      title: "Problem Solving",
      description:
        "Use design thinking to turn a real-world problem into a working prototype.",
    },
    {
      number: "08",
      gradient: "gradient-08",
      icon: "🏆",
      title: "Competitive Spirit",
      description:
        "Participate in Robo Races & Wars to test their builds in a fun, high-energy format.",
    },
  ];
  return (
    <section
      id="outcomes"
      className="section outcomes-section animate-on-scroll"
    >
      <div className="container">
        <div className="section-header">
          <h2>Learning Outcomes</h2>
          <p className="section-subtitle">
            What students achieve through our innovative workshops
          </p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((outcome, index) => (
            <div key={index} className="outcome-card">
              <div className={`outcome-number ${outcome.gradient}`}>
                {outcome.number}
              </div>
              <div className="outcome-icon">{outcome.icon}</div>
              <h4>{outcome.title}</h4>
              <p>{outcome.description}</p>
              <div className="outcome-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
