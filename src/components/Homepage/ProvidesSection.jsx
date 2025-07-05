import React from "react";

const ProvidesSection = () => {
  const provides = [
    {
      icon: "🎒",
      title: "Complete Hardware Kit",
      description:
        "Each team receives a comprehensive robotics kit including Arduino, motors, sensors, chassis, breadboard, wires, and batteries - everything needed to build and program their first robot.",
      features: ["Arduino Board", "Motors & Sensors", "Building Materials"],
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentorship",
      description:
        "Students work directly with experienced mentors who guide them through challenges, provide technical support, and help develop problem-solving skills throughout the workshop.",
      features: ["1:1 Support", "Technical Guidance", "Career Insights"],
    },
    {
      icon: "🏆",
      title: "Certificates & Recognition",
      description:
        "All participants receive completion certificates, with special recognition and prizes for outstanding performance in competitions and presentations.",
      features: [
        "Workshop Certificate",
        "Competition Prizes",
        "Achievement Badges",
      ],
    },
    {
      icon: "📚",
      title: "Learning Resources",
      description:
        "Access to comprehensive learning materials, code samples, project documentation, and continued learning resources to support students beyond the workshop.",
      features: ["Digital Resources", "Code Libraries", "Project Templates"],
    },
  ];

  return (
    <section className="section provides-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2>What We Provide to Students</h2>
          <p className="section-subtitle">
            Everything students need for a complete hands-on learning experience
          </p>
        </div>
        <div className="provides-grid">
          {provides.map((item, index) => (
            <div key={index} className="provide-card">
              <div className="provide-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="provide-features">
                {item.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidesSection;
