import { useState, useEffect } from "react";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Add CSS variables to the document
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --background: 0 0% 100%;
        --foreground: 210 22% 22%;
        --card: 0 0% 100%;
        --card-foreground: 210 22% 22%;
        --popover: 0 0% 100%;
        --popover-foreground: 210 22% 22%;
        --primary: 4 85% 58%;
        --primary-foreground: 0 0% 100%;
        --secondary: 15 100% 60%;
        --secondary-foreground: 0 0% 100%;
        --muted: 0 0% 97%;
        --muted-foreground: 0 0% 40%;
        --accent: 43 89% 81%;
        --accent-foreground: 210 22% 22%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 100%;
        --border: 0 0% 90%;
        --input: 0 0% 90%;
        --ring: 4 85% 58%;
        --radius: 15px;
        --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        --shadow-hover: 0 20px 50px rgba(231, 76, 60, 0.2);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .shadow-custom {
        box-shadow: var(--shadow);
      }
      
      .shadow-hover {
        box-shadow: var(--shadow-hover);
      }
      
      .transition-custom {
        transition: var(--transition);
      }
    `;
    document.head.appendChild(style);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const admissionDeadline = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
      const difference = admissionDeadline - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(timer);
      document.head.removeChild(style);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)`,
        color: `hsl(var(--foreground))`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, hsla(var(--primary), 0.05) 0%, hsla(var(--secondary), 0.05) 100%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgency Badge */}
          <div
            className="mb-8 px-6 py-3 text-base font-medium inline-block transform hover:scale-105 cursor-pointer"
            style={{
              background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
              color: `hsl(var(--primary-foreground))`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--shadow)`,
              transition: `var(--transition)`,
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = `var(--shadow-hover)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = `var(--shadow)`;
            }}
          >
            ⚠️ ADMISSION CLOSES IN 2 DAYS!
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: `hsl(var(--foreground))` }}
          >
            BRICKS Innovation
            <span
              className="block mt-2"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bootcamp
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-4 font-medium"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            "Become the Top 0.1% — the Builders, Thinkers, and Future Leaders."
          </p>

          <p
            className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            You can be the one or you will be left behind. This is your chance
            to interact with
            <span
              className="font-semibold"
              style={{ color: `hsl(var(--primary))` }}
            >
              {" "}
              Abhimanyu Saxena
            </span>{" "}
            and industry legends!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="p-6 transition-custom hover:scale-105"
                style={{
                  background: `hsl(var(--card))`,
                  border: `1px solid hsl(var(--border))`,
                  borderRadius: `var(--radius)`,
                  boxShadow: `var(--shadow)`,
                  transition: `var(--transition)`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = `var(--shadow-hover)`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = `var(--shadow)`;
                }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: `hsl(var(--primary))` }}
                >
                  {value}
                </div>
                <div
                  className="text-sm uppercase tracking-wide font-medium"
                  style={{ color: `hsl(var(--muted-foreground))` }}
                >
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div
              className="flex items-center justify-center gap-3 p-4"
              style={{
                background: `hsla(var(--card), 0.7)`,
                backdropFilter: "blur(10px)",
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
                border: `1px solid hsl(var(--border))`,
                color: `hsl(var(--foreground))`,
              }}
            >
              <Calendar
                className="w-5 h-5"
                style={{ color: `hsl(var(--primary))` }}
              />
              <span className="font-medium">Starts 15th August</span>
            </div>
            <div
              className="flex items-center justify-center gap-3 p-4"
              style={{
                background: `hsla(var(--card), 0.7)`,
                backdropFilter: "blur(10px)",
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
                border: `1px solid hsl(var(--border))`,
                color: `hsl(var(--foreground))`,
              }}
            >
              <Clock
                className="w-5 h-5"
                style={{ color: `hsl(var(--primary))` }}
              />
              <span className="font-medium">2 Classes/Week, 60 mins each</span>
            </div>
            <div
              className="flex items-center justify-center gap-3 p-4"
              style={{
                background: `hsla(var(--card), 0.7)`,
                backdropFilter: "blur(10px)",
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
                border: `1px solid hsl(var(--border))`,
                color: `hsl(var(--foreground))`,
              }}
            >
              <Users
                className="w-5 h-5"
                style={{ color: `hsl(var(--primary))` }}
              />
              <span className="font-medium">Limited Seats Only</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 text-lg font-semibold flex items-center justify-center transform hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                color: `hsl(var(--primary-foreground))`,
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
                transition: `var(--transition)`,
                border: "none",
              }}
              onClick={() => scrollToSection("pricing")}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = `var(--shadow-hover)`;
                e.target.style.background = `linear-gradient(135deg, hsla(var(--primary), 0.9) 0%, hsla(var(--secondary), 0.9) 100%)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = `var(--shadow)`;
                e.target.style.background = `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`;
              }}
            >
              ENROLL NOW - LIMITED SEATS!
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              className="px-8 py-4 text-lg font-medium flex items-center justify-center"
              style={{
                border: `2px solid hsl(var(--primary))`,
                color: `hsl(var(--primary))`,
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
                transition: `var(--transition)`,
                background: "transparent",
              }}
              onClick={() => scrollToSection("program")}
              onMouseEnter={(e) => {
                e.target.style.background = `hsl(var(--primary))`;
                e.target.style.color = `hsl(var(--primary-foreground))`;
                e.target.style.boxShadow = `var(--shadow-hover)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = `hsl(var(--primary))`;
                e.target.style.boxShadow = `var(--shadow)`;
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
