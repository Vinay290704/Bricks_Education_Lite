import { useState, useEffect } from "react";
import { Sparkles, Rocket, Zap, ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Modern CSS variables with Gen Z color palette
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
        --card: 240 10% 3.9%;
        --card-foreground: 0 0% 98%;
        --primary: 263 70% 50%;
        --primary-foreground: 0 0% 98%;
        --secondary: 196 75% 88%;
        --secondary-foreground: 240 5.9% 10%;
        --accent: 142 76% 36%;
        --accent-foreground: 355.7 100% 97.3%;
        --muted: 240 3.7% 15.9%;
        --muted-foreground: 240 5% 64.9%;
        --border: 240 3.7% 15.9%;
        --input: 240 3.7% 15.9%;
        --ring: 263 70% 50%;
        --glow: 0 0 40px rgba(147, 51, 234, 0.3);
        --glow-green: 0 0 40px rgba(34, 197, 94, 0.3);
        --glow-cyan: 0 0 40px rgba(6, 182, 212, 0.3);
        --gradient-1: linear-gradient(135deg, #9333ea 0%, #06b6d4 50%, #22c55e 100%);
        --gradient-2: linear-gradient(45deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%);
        --glass: rgba(255, 255, 255, 0.1);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .glow-purple { box-shadow: var(--glow); }
      .glow-green { box-shadow: var(--glow-green); }
      .glow-cyan { box-shadow: var(--glow-cyan); }
      .glass-morphism {
        background: var(--glass);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .gradient-text {
        background: var(--gradient-1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .floating {
        animation: float 6s ease-in-out infinite;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      .pulse-glow {
        animation: pulseGlow 2s infinite;
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
        50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(6, 182, 212, 0.3); }
      }
    `;
    document.head.appendChild(style);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const admissionDeadline = new Date('August 15, 2025 00:00:00').getTime();
      const difference = admissionDeadline - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
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
        background: `hsl(var(--background))`,
        color: `hsl(var(--foreground))`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full floating"
          style={{ background: 'var(--gradient-1)', opacity: 0.1 }}
        />
        <div 
          className="absolute top-40 right-32 w-24 h-24 rounded-full floating"
          style={{ background: 'var(--gradient-2)', opacity: 0.1, animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full floating"
          style={{ background: 'var(--gradient-1)', opacity: 0.1, animationDelay: '4s' }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-sm font-medium transform hover:scale-105 cursor-pointer transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>⚠️ BOOTCAMP STARTS 15TH AUGUST!</span>
          </div>

          {/* Main Headline with Modern Typography */}
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-none tracking-tight"style={{ color: `hsl(var(--secondary))` }}>
            BRICKS Innovation
            <span className="block gradient-text mt-2"style={{ color: `black` }} >
              Bootcamp
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-4 font-semibold" style={{ color: `hsl(var(--secondary))` }}>
            "Become the Top 0.1% — the Builders, Thinkers, and Future Leaders."
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            You can be the one or you will be left behind. This is your chance
            to interact with
            <span className="gradient-text font-black "style={{ color: `hsl(var(--secondary))` }}> Abhimanyu Saxena</span> and industry legends!
          </p>

          {/* Modern Countdown Timer */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={unit}
                className="glass-morphism p-4 md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: index % 2 === 0 ? 'var(--glass)' : 'rgba(147, 51, 234, 0.1)',
                }}
              >
                <div className="text-2xl md:text-4xl font-black mb-1 gradient-text">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-70">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* Key Features with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center justify-center gap-3 p-4 glass-morphism rounded-xl hover:glow-purple transition-all duration-300">
              <Rocket className="w-5 h-5" style={{ color: `hsl(var(--primary))` }} />
              <span className="font-semibold">Starts 15th August</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 glass-morphism rounded-xl hover:glow-green transition-all duration-300">
              <Zap className="w-5 h-5" style={{ color: `hsl(var(--accent))` }} />
              <span className="font-semibold">2 Classes/Week, 60 mins each</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 glass-morphism rounded-xl hover:glow-cyan transition-all duration-300">
              <Star className="w-5 h-5" style={{ color: `hsl(var(--secondary))` }} />
              <span className="font-semibold">Limited Seats Only</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-4 text-lg font-bold flex items-center justify-center transform hover:-translate-y-2 pulse-glow rounded-2xl border-none"
              style={{
                background: 'var(--gradient-1)',
                color: `hsl(var(--primary-foreground))`,
                transition: 'var(--transition)',
              }}
              onClick={() => scrollToSection("pricing")}
            >
              <Sparkles className="mr-2 w-5 h-5" />
              ENROLL NOW
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button
              className="px-8 py-4 text-lg font-semibold flex items-center justify-center glass-morphism rounded-2xl hover:glow-cyan transition-all duration-300"
              style={{ color: `hsl(var(--foreground))` }}
              onClick={() => scrollToSection("program")}
            >
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;