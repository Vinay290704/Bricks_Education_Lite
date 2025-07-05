import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">ज्ञानं शक्ति</div>
          <h1>BRICKS EDUCATION</h1>
          <p className="tagline">Build. Think. Lead.</p>
          <p className="hero-description">
            At BRICKS, we are a team of young innovators, educators, and
            builders who believe the classroom should prepare students not just
            for exams, but for life. We create hands-on, highly engaging
            workshops that blend coding, robotics, career exposure, and public
            speaking all in a format that's fun, challenging, and unforgettable.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="cta-button primary">
              Learn More
            </a>
            <a href="#schedule" className="cta-button secondary">
              View Schedule
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="fun-container">
            <div className="fun-elements">
              <div className="fun-element robot-element">🤖</div>
              <div className="fun-element code-element">💻</div>
              <div className="fun-element lightbulb-element">💡</div>
              <div className="fun-element rocket-element">🚀</div>
            </div>
            <div className="central-message">
              <h3>BUILD YOUR FUTURE</h3>
              <p>With hands-on robotics & AI learning</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;
