import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2>Who We Are</h2>
          <p className="section-subtitle">
            Transforming education through innovation and hands-on learning
          </p>
        </div>
        <div className="grid grid-2">
          <div className="content-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              With experience ranging from building grassroots startups to
              running real-world learning programs in schools, we bring
              unmatched energy, relevance, and creativity to everything we do.
            </p>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              Our mission is simple: to turn curiosity into capability and
              students into future-ready thinkers.
            </p>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              Every student we work with doesn't just learn, they explore,
              collaborate, question, and build. Because at BRICKS, we don't just
              teach. We spark futures.
            </p>
          </div>
          <div className="content-card">
            <div className="card-icon">📚</div>
            <h3>Workshop Details</h3>
            <div className="info-item">
              <strong>Class Level:</strong> Grade 8th, 9th and 10th
            </div>
            <div className="info-item">
              <strong>Skills Covered:</strong> Robotics, Coding, AI Tools,
              Problem Solving, Teamwork, Public Speaking
            </div>
            <div className="info-item">
              <strong>Format Options:</strong>
              <ul className="format-list">
                <li>2-Day: Build + Compete</li>
                <li>3-Day: Build + Compete + Present (optional)</li>
              </ul>
            </div>
            <div className="highlight-box">
              With Robo Races, creative challenges, and live tech demos,
              students don't just learn — they experience innovation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
