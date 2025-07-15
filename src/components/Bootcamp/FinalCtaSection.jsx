import React, { useEffect } from "react";
import { Zap, Lock, Smartphone, Target } from "lucide-react";

const FinalCtaSection = () => {
  useEffect(() => {
    if (!document.getElementById("final-cta-section-styles")) {
      const style = document.createElement("style");
      style.id = "final-cta-section-styles";
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
        
        .pulse-glow {
          animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(231, 76, 60, 0.4), var(--shadow);
          }
          50% {
            box-shadow: 0 0 30px rgba(231, 76, 60, 0.6), var(--shadow-hover);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const features = [
    { icon: Lock, text: "Secure Payment" },
    { icon: Smartphone, text: "Mobile-Friendly" },
    { icon: Target, text: "Results Guaranteed" },
  ];

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

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
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
            Be the Top 0.1% Who Actually{" "}
            <span
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Build
            </span>
          </h2>

          <p
            className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            Limited Seats. Lifetime Learning. Don't let this opportunity slip
            away.
          </p>

          <div className="mb-12">
            <button
              className="pulse-glow group relative overflow-hidden px-12 py-6 text-xl font-bold transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                color: `hsl(var(--primary-foreground))`,
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `var(--shadow)`;
              }}
              onClick={() =>
                window.open("https://wa.me/919871672790", "Connect with Bricks")
              }
            >
              <span className="relative z-10">ENROLL NOW</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)`,
                }}
              ></div>
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                style={{ color: `hsl(var(--muted-foreground))` }}
              >
                <feature.icon
                  className="w-4 h-4"
                  style={{ color: `hsl(var(--primary))` }}
                />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
