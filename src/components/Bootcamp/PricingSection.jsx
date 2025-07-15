import React, { useEffect } from "react";
import { CheckCircle, Crown, Star, Users } from "lucide-react";

const PricingSection = () => {
  useEffect(() => {
    if (!document.getElementById("pricing-section-styles")) {
      const style = document.createElement("style");
      style.id = "pricing-section-styles";
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
        
        .winner-glow {
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.3), var(--shadow);
        }
        
        .winner-glow:hover {
          box-shadow: 0 0 40px rgba(255, 215, 0, 0.5), var(--shadow-hover);
        }
        
        .partner-glow:hover {
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.2), var(--shadow-hover);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const tiers = [
    {
      id: "winner",
      name: "Workshop Winners",
      price: "₹1,999",
      originalPrice: "₹5,999",
      badge: "🏆 WINNER'S TIER",
      icon: Crown,
      color: "gold",
      features: [
        "All program benefits",
        "Free robotics kit (₹4000 value)",
        "Priority mentor access",
        "Exclusive network access",
      ],
      buttonText: "CLAIM WINNER'S SPOT",
      highlighted: true,
    },
    {
      id: "partner",
      name: "Partner Schools",
      price: "₹3,499",
      originalPrice: "₹5,999",
      icon: Users,
      color: "purple",
      features: [
        "Full program access",
        "Robotics kit included",
        "Mentorship sessions",
        "Official certificates",
      ],
      buttonText: "SECURE YOUR SPOT",
    },
  ];

  const getColorStyles = (color, isHighlighted = false) => {
    switch (color) {
      case "gold":
        return {
          cardStyle: isHighlighted ? "winner-glow" : "",
          badgeStyle: {
            background: `linear-gradient(135deg, #FFD700 0%, #FFA500 100%)`,
            color: "#000",
          },
          priceStyle: {
            background: `linear-gradient(135deg, #FFD700 0%, #FFA500 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          },
          iconColor: "#FFD700",
          checkColor: "#FFD700",
          buttonStyle: {
            background: `linear-gradient(135deg, #FFD700 0%, #FFA500 100%)`,
            color: "#000",
          },
        };
      case "purple":
        return {
          cardStyle: "partner-glow",
          priceStyle: {
            background: `linear-gradient(135deg, #9333EA 0%, #7C3AED 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          },
          iconColor: "#9333EA",
          checkColor: "#9333EA",
          buttonStyle: {
            background: `linear-gradient(135deg, #9333EA 0%, #7C3AED 100%)`,
            color: "#fff",
          },
        };
    }
  };

  return (
    <section
      id="pricing"
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
            <Crown
              className="w-8 h-8"
              style={{ color: `hsl(var(--primary))` }}
            />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: `hsl(var(--foreground))` }}
          >
            Special{" "}
            <span
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pricing
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: `hsl(var(--muted-foreground))` }}
          >
            Choose Your Path to Success
          </p>
        </div>

        {/* Side by side layout */}
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-8 max-w-5xl w-full">
            {tiers.map((tier) => {
              const colorStyles = getColorStyles(tier.color, tier.highlighted);
              const isHighlighted = tier.highlighted;

              return (
                <div
                  key={tier.id}
                  className={`group overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-pointer relative flex-1 ${
                    isHighlighted ? "transform scale-105 sm:scale-110" : ""
                  } ${colorStyles.cardStyle || ""}`}
                  style={{
                    background: `hsl(var(--card))`,
                    border: `2px solid ${
                      isHighlighted ? "#FFD700" : "hsl(var(--border))"
                    }`,
                    borderRadius: `var(--radius)`,
                    boxShadow: isHighlighted ? undefined : `var(--shadow)`,
                    minHeight: "550px",
                    maxWidth: "450px",
                    margin: "0 auto",
                  }}
                  onMouseEnter={(e) => {
                    if (!isHighlighted) {
                      e.currentTarget.style.borderColor = `hsla(var(--primary), 0.5)`;
                      e.currentTarget.style.boxShadow = `var(--shadow-hover)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isHighlighted) {
                      e.currentTarget.style.borderColor = `hsl(var(--border))`;
                      e.currentTarget.style.boxShadow = `var(--shadow)`;
                    }
                  }}
                >
                  {/* Badge for Winner tier */}
                  {tier.badge && (
                    <div className="absolute left-33 top-4 transform -translate-x-1/2 z-10">
                      <div
                        className="absolute px-6 py-2 text-sm font-bold rounded-full whitespace-nowrap"
                        style={colorStyles.badgeStyle}
                      >
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  <div className="p-8 text-center ">
                    <div
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, hsla(var(--primary), 0.1) 0%, hsla(var(--secondary), 0.1) 100%)`,
                      }}
                    >
                      <tier.icon
                        className="w-10 h-10 transition-colors duration-300"
                        style={{ color: colorStyles.iconColor }}
                      />
                    </div>

                    <h3
                      className="text-2xl font-bold mb-6 group-hover:transition-colors duration-300"
                      style={{ color: `hsl(var(--foreground))` }}
                    >
                      {tier.name}
                    </h3>

                    <div className="mb-6">
                      <div
                        className="text-4xl md:text-5xl font-bold mb-2"
                        style={colorStyles.priceStyle}
                      >
                        {tier.price}
                      </div>
                      <div
                        className={`text-lg ${
                          tier.originalPrice === "Full Price"
                            ? ""
                            : "line-through"
                        }`}
                        style={{ color: `hsl(var(--muted-foreground))` }}
                      >
                        {tier.originalPrice}
                      </div>
                    </div>
                  </div>

                  <div className="px-8 pb-8 flex-grow flex flex-col">
                    <ul className="space-y-4 mb-8 flex-grow">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: colorStyles.checkColor }}
                          />
                          <span
                            className="text-base leading-relaxed"
                            style={{ color: `hsl(var(--muted-foreground))` }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="w-full transition-all duration-300 py-4 px-6 font-bold text-base group-hover:scale-105"
                      style={{
                        ...colorStyles.buttonStyle,
                        borderRadius: `var(--radius)`,
                        boxShadow: `var(--shadow)`,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = `var(--shadow-hover)`;
                        if (tier.color === "gray") {
                          e.target.style.background = `hsl(var(--accent))`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = `var(--shadow)`;
                        if (tier.color === "gray") {
                          e.target.style.background = `hsl(var(--muted))`;
                        }
                      }}
                      onClick={() =>
                        window.open("https://wa.me/919871672790", "Connect with Bricks")
                      }
                    >
                      {tier.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
