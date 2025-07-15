import { Trophy, Target, Zap } from "lucide-react";
import { useEffect } from "react";

const FomoSection = () => {
  useEffect(() => {
    if (!document.getElementById('fomo-styles')) {
      const style = document.createElement('style');
      style.id = 'fomo-styles';
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

  return (
    <section 
      className="py-16"
      style={{
        background: `linear-gradient(135deg, hsl(var(--muted)) 0%, hsla(var(--muted), 0.5) 100%)`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: `hsl(var(--foreground))` }}
          >
            Why This is Your{" "}
            <span 
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Last Chance
            </span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            We're accepting only the most committed students. Miss this batch,
            and you'll have to wait another year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="p-6 text-center transform hover:scale-105 cursor-pointer"
            style={{
              background: `hsl(var(--card))`,
              border: `1px solid hsl(var(--border))`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--shadow)`,
              transition: `var(--transition)`,
              color: `hsl(var(--card-foreground))`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--primary))`;
              e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--border))`;
              e.currentTarget.style.boxShadow = `var(--shadow)`;
            }}
          >
            <div className="mb-4">
              <Trophy 
                className="w-12 h-12 mx-auto mb-4" 
                style={{ color: `hsl(var(--primary))` }}
              />
              <h3 
                className="text-xl font-semibold"
                style={{ color: `hsl(var(--foreground))` }}
              >
                Exclusive Access
              </h3>
            </div>
            <div>
              <p style={{ color: `hsl(var(--muted-foreground))` }}>
                Direct mentorship from tech founders including Abhimanyu Saxena
                (Scaler) and industry legends
              </p>
            </div>
          </div>

          <div 
            className="p-6 text-center transform hover:scale-105 cursor-pointer"
            style={{
              background: `hsl(var(--card))`,
              border: `1px solid hsl(var(--border))`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--shadow)`,
              transition: `var(--transition)`,
              color: `hsl(var(--card-foreground))`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--primary))`;
              e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--border))`;
              e.currentTarget.style.boxShadow = `var(--shadow)`;
            }}
          >
            <div className="mb-4">
              <Target 
                className="w-12 h-12 mx-auto mb-4" 
                style={{ color: `hsl(var(--primary))` }}
              />
              <h3 
                className="text-xl font-semibold"
                style={{ color: `hsl(var(--foreground))` }}
              >
                Top 0.1% Community
              </h3>
            </div>
            <div>
              <p style={{ color: `hsl(var(--muted-foreground))` }}>
                Join an elite group of builders and innovators. Network with
                future leaders and entrepreneurs
              </p>
            </div>
          </div>

          <div 
            className="p-6 text-center transform hover:scale-105 cursor-pointer"
            style={{
              background: `hsl(var(--card))`,
              border: `1px solid hsl(var(--border))`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--shadow)`,
              transition: `var(--transition)`,
              color: `hsl(var(--card-foreground))`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--primary))`;
              e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `hsl(var(--border))`;
              e.currentTarget.style.boxShadow = `var(--shadow)`;
            }}
          >
            <div className="mb-4">
              <Zap 
                className="w-12 h-12 mx-auto mb-4" 
                style={{ color: `hsl(var(--primary))` }}
              />
              <h3 
                className="text-xl font-semibold"
                style={{ color: `hsl(var(--foreground))` }}
              >
                Career Fast-Track
              </h3>
            </div>
            <div>
              <p style={{ color: `hsl(var(--muted-foreground))` }}>
                Get a taste of high-paying career paths before others even know
                they exist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FomoSection;