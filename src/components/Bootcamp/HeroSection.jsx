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
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const admissionDeadline = new Date("2025-08-15T00:00:00").getTime();
      const difference = admissionDeadline - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
              '<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#f97316" fill-opacity="0.1"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>'
            )}")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-bounce"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-1/3 right-32 w-32 h-32 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full opacity-15 animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-10 animate-bounce"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-25 animate-bounce"
          style={{ animationDuration: "7s", animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 py-30 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tight text-gray-800 drop-shadow-lg">
            BRICKS Innovation
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent mt-4 animate-pulse">
              Bootcamp
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-bold text-gray-700 drop-shadow-md">
            "Become the Top 0.1% — the Builders, Thinkers, and Future Leaders."
          </p>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-gray-600">
            You can be the one or you will be left behind. This is your chance
            to interact with
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent font-black mx-2">
              Anshuman Singh , Abhimanyu Saxena
            </span>
            and industry legends!
          </p>
          <div
            className="flex justify-center gap-4 mb-12 flex-wrap"
            role="timer"
            aria-label="Countdown to bootcamp start"
          >
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={unit}
                className="bg-white/40 backdrop-blur-lg border border-orange-200 p-6 md:p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-200"
                aria-label={`${value} ${unit}`}
              >
                <div className="text-3xl md:text-5xl font-black mb-2 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm uppercase tracking-widest font-bold text-gray-600">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-4 p-6 bg-white/40 backdrop-blur-lg border border-orange-200 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-100">
              <Rocket className="w-6 h-6 text-orange-600" aria-hidden="true" />
              <span className="font-bold text-lg text-gray-700">
                Starts 15th August
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-white/40 backdrop-blur-lg border border-orange-200 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-100">
              <Zap className="w-6 h-6 text-orange-600" aria-hidden="true" />
              <span className="font-bold text-lg text-gray-700">
                2 Classes/Week, 60 mins each
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-white/40 backdrop-blur-lg border border-orange-200 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-100">
              <Star className="w-6 h-6 text-orange-600" aria-hidden="true" />
              <span className="font-bold text-lg text-gray-700">
                Limited Seats Only
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="px-10 py-5 text-xl font-bold flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl border-none min-w-[200px] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
              onClick={() => scrollToSection("pricing")}
              aria-label="Enroll now in the bootcamp"
            >
              <Sparkles className="mr-3 w-6 h-6" aria-hidden="true" />
              ENROLL NOW
              <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
            </button>

            <button
              className="px-10 py-5 text-xl font-bold flex items-center justify-center bg-white/40 backdrop-blur-lg border-2 border-orange-300 text-orange-700 hover:bg-orange-50 rounded-2xl min-w-[200px] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
              onClick={() => scrollToSection("program")}
              aria-label="Learn more about the program"
            >
              <Play className="mr-3 w-6 h-6" aria-hidden="true" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
