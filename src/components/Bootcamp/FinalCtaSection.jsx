import { Zap, ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section
      className="py-10 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)`,
      }}
    >
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
              <span className="flex items-center justify-center">
                ENROLL NOW
                <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)`,
                }}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
