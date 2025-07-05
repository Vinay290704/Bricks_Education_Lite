import React, { useContext, useEffect } from "react";
import HomeContext from "../../context/HomeContext";

const TestimonialsSection = () => {
  const { currentSlide, changeSlide, goToSlide } = useContext(HomeContext);

  const getImageUrl = (imageName) => {
    try {
      const url = new URL(`../../assets/${imageName}`, import.meta.url).href;
      console.log(`Loading image: ${imageName} -> ${url}`);
      return url;
    } catch (error) {
      console.error(`Failed to load image: ${imageName}`, error);
      return `https://via.placeholder.com/150x150?text=${encodeURIComponent(
        imageName
      )}`;
    }
  };

  useEffect(() => {
    console.log("Current module URL:", import.meta.url);
    console.log("Sample image URL:", getImageUrl("facebook.png"));
  }, []);

  const testimonials = [
    {
      name: "Anshuman Singh",
      company: "Ex - Facebook",
      companyLogo: getImageUrl("facebook.png"),
      profileImage: getImageUrl("Pic1.jpg"),
      additionalInfo: {
        logo: getImageUrl("Scaler.jpg"),
        text: "Co-founder Scaler",
      },
      quote:
        "I love what BRICKS is doing — it's bold, it's timely, and it's going to change how kids think about learning and building.",
    },
    {
      name: "Prasanna Sankar",
      company: "Ex - Microsoft",
      companyLogo: getImageUrl("microsoft.png"),
      profileImage: getImageUrl("pic2.jpg"),
      additionalInfo: {
        logo: getImageUrl("rippling.jpg"),
        text: "Co-founder Rippling",
      },
      quote:
        "I strongly believe core technical skills should be taught in school. The BRICKS team understands this deeply — and they're building it bottom-up, the right way.",
    },
    {
      name: "Abhimanyu Saxena",
      company: "InterviewBit",
      companyLogo: getImageUrl("IVB.jpg"),
      profileImage: getImageUrl("Pic3.jpg"),
      additionalInfo: {
        logo: getImageUrl("Scaler.jpg"),
        text: "Co-founder Scaler",
      },
      quote:
        "BRICKS workshops give students their first real taste of building with tech — and they walk away transformed.",
    },
    {
      name: "Manmeet Singh Akali",
      company: "Ex-Eduvanz",
      companyLogo: getImageUrl("eduvanz.png"),
      profileImage: getImageUrl("Pic4.jpg"),
      additionalInfo: {
        logo: getImageUrl("Scaler.jpg"),
        text: "V.P. Scaler",
      },
      quote:
        "It's time we stop teaching computer science like it's 1999. What BRICKS is doing brings relevance, curiosity, and hands-on energy back into classrooms.",
    },
  ];

  return (
    <section className="section testimonials-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2>Backed By The Best</h2>
          <p className="section-subtitle">
            Designed with the minds who shaped India's top tech education
            movements.
          </p>
        </div>
        <div className="testimonial-carousel">
          <button
            className="carousel-nav carousel-prev"
            onClick={() => changeSlide(-1)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="carousel-nav carousel-next"
            onClick={() => changeSlide(1)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="testimonial-track" id="testimonialTrack">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide ${
                  currentSlide === index ? "active" : ""
                }`}
              >
                <div className="modern-testimonial-card">
                  <div className="testimonial-image-section">
                    <img
                      src={testimonial.profileImage}
                      alt={testimonial.name}
                      className="testimonial-profile-image"
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${testimonial.profileImage}`
                        );
                        e.target.src = `https://via.placeholder.com/150x150?text=${encodeURIComponent(
                          testimonial.name
                        )}`;
                      }}
                    />
                  </div>
                  <div className="testimonial-content-section">
                    <div className="testimonial-header">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <div className="testimonial-company">
                        <img
                          src={testimonial.companyLogo}
                          alt={testimonial.company}
                          className="company-logo"
                          onError={(e) => {
                            console.error(
                              `Failed to load company logo: ${testimonial.companyLogo}`
                            );
                            e.target.src = `https://via.placeholder.com/50x50?text=${encodeURIComponent(
                              testimonial.company
                            )}`;
                          }}
                        />
                        <span className="company-text">
                          {testimonial.company}
                        </span>
                      </div>
                      <div className="testimonial-stats">
                        <div className="stat-item">
                          <img
                            src={testimonial.additionalInfo.logo}
                            alt={testimonial.additionalInfo.text}
                            className="company-logo"
                            onError={(e) => {
                              console.error(
                                `Failed to load additional info logo: ${testimonial.additionalInfo.logo}`
                              );
                              e.target.src = `https://via.placeholder.com/50x50?text=${encodeURIComponent(
                                testimonial.additionalInfo.text
                              )}`;
                            }}
                          />
                          <span>{testimonial.additionalInfo.text}</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-quote">{testimonial.quote}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-indicators">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className={`indicator ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
