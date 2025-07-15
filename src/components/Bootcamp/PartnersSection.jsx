import React, { useEffect } from 'react';
import { Award, Star, CheckCircle, Sparkles } from 'lucide-react';

const PartnersSection = () => {
  useEffect(() => {
    if (!document.getElementById("partners-section-styles")) {
      const style = document.createElement("style");
      style.id = "partners-section-styles";
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
      `;
      document.head.appendChild(style);
    }
  }, []);

  const partners = [
    {
      name: "Scaler",
      description: "India's Leading Tech Education Platform",
      logo: "🚀",
      color: "hsl(var(--primary))",
    },
    {
      name: "Google",
      description: "Technology & Cloud Computing Partner",
      logo: "🌟",
      color: "hsl(217, 91%, 60%)",
    },
    {
      name: "Microsoft",
      description: "Software Development & Azure Partner",
      logo: "💼",
      color: "hsl(210, 100%, 50%)",
    },
    {
      name: "STEM",
      description: "Science, Technology, Engineering & Math",
      logo: "🔬",
      color: "hsl(var(--secondary))",
    },
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{
              background: `hsla(var(--primary), 0.1)`,
            }}
          >
            <Award className="w-8 h-8" style={{ color: `hsl(var(--primary))` }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: `hsl(var(--foreground))` }}
          >
            Trusted by{" "}
            <span
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Industry Leaders
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            We've partnered with the biggest names in tech to bring you
            world-class education and industry recognition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{
                background: `hsl(var(--card))`,
                border: `2px solid hsl(var(--border))`,
                borderRadius: `var(--radius)`,
                boxShadow: `var(--shadow)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${partner.color}`;
                e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `hsl(var(--border))`;
                e.currentTarget.style.boxShadow = `var(--shadow)`;
              }}
            >
              <div className="p-8 text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl"
                  style={{
                    background: `linear-gradient(135deg, hsla(var(--primary), 0.1) 0%, hsla(var(--secondary), 0.1) 100%)`,
                  }}
                >
                  {partner.logo}
                </div>
                <h3
                  className="text-xl font-bold mb-3 group-hover:transition-colors duration-300"
                  style={{ color: `hsl(var(--foreground))` }}
                >
                  {partner.name}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: `hsl(var(--muted-foreground))` }}
                >
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate highlight */}
        <div className="text-center mt-16">
          <div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold"
            style={{
              background: `linear-gradient(135deg, hsla(var(--primary), 0.1) 0%, hsla(var(--secondary), 0.1) 50%, hsla(var(--primary), 0.1) 100%)`,
              border: `2px solid hsla(var(--primary), 0.2)`,
              color: `hsl(var(--primary))`,
            }}
          >
            <Sparkles className="w-6 h-6" />
            <span>Official Certificates</span>
            <span style={{ color: `hsl(var(--muted-foreground))` }}>from Google & Scaler</span>
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
