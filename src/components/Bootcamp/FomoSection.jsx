
import { Brain, Users, TrendingUp, Flame, Crown, Zap } from "lucide-react";
import { useEffect } from "react";

const FomoSection = () => {
  useEffect(() => {
    if (!document.getElementById('fomo-styles')) {
      const style = document.createElement('style');
      style.id = 'fomo-styles';
      style.textContent = `
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
        }
        .glow-card {
          position: relative;
          overflow: hidden;
        }
        .glow-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(34, 197, 94, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        .glow-card:hover::before {
          opacity: 1;
        }
        .glow-card > * {
          position: relative;
          z-index: 2;
        }
        .neon-border {
          position: relative;
          background: linear-gradient(45deg, #9333ea, #06b6d4, #22c55e);
          padding: 2px;
          border-radius: 20px;
        }
        .neon-content {
          background: hsl(var(--background));
          border-radius: 18px;
          padding: 1.5rem;
          height: 100%;
        }
        .glass-morphism {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const features = [
    {
      icon: Crown,
      title: "Exclusive Access",
      description: "Direct mentorship from tech founders including Abhimanyu Saxena (Scaler) and industry legends",
      gradient: "from-purple-500 to-violet-600",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Top 0.1% Community",
      description: "Join an elite group of builders and innovators. Network with future leaders and entrepreneurs",
      gradient: "from-cyan-500 to-blue-600",
      delay: "0.2s"
    },
    {
      icon: TrendingUp,
      title: "Career Fast-Track",
      description: "Get a taste of high-paying career paths before others even know they exist",
      gradient: "from-green-500 to-emerald-600",
      delay: "0.4s"
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)`
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
               style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <Flame className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-400">LAST CHANCE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Why This is Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 mt-2">
              Last Chance
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" 
             style={{ color: `hsl(var(--muted-foreground))` }}>
            We're accepting only the most committed students. Miss this batch,
            and you'll have to wait another year.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="neon-border hover-lift glow-card"
              style={{ animationDelay: feature.delay }}
            >
              <div className="neon-content text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4" 
                    style={{ color: `hsl(var(--foreground))` }}>
                  {feature.title}
                </h3>
                
                <p className="leading-relaxed" 
                   style={{ color: `hsl(var(--muted-foreground))` }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FomoSection;
