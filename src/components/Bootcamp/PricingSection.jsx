import React from "react";
import {
  CheckCircle,
  Crown,
  Star,
  Users,
  Zap,
  Award,
  Gift,
  Trophy,
} from "lucide-react";

const PricingSection = () => {
  const tiers = [
    {
      id: "winner",
      name: "Workshop Winners",
      price: "₹1,999",
      originalPrice: "₹5,999",
      discount: "67% OFF",
      badge: "🏆 WINNER'S TIER",
      icon: Crown,
      color: "gold",
      features: [
        "All program benefits included",
        "Free robotics kit worth ₹4000",
        "Priority mentor access & guidance",
        "Exclusive alumni network access",
        "Certificate from Google & Scaler",
        "Live project demonstrations",
        "Career guidance sessions",
        "Lifetime community access",
      ],
      buttonText: "CLAIM WINNER'S SPOT",
      highlighted: true,
      popular: true,
    },
    {
      id: "partner",
      name: "Partner Schools",
      price: "₹3,499",
      originalPrice: "₹5,999",
      discount: "42% OFF",
      icon: Users,
      color: "orange",
      features: [
        "Full program access",
        "Robotics kit included",
        "Regular mentorship sessions",
        "Official certificates",
        "Project-based learning",
        "Industry expert sessions",
        "Skill assessment reports",
        "Alumni network access",
      ],
      buttonText: "SECURE YOUR SPOT",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      {/* Floating background elements */}
      <div
        className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-bounce"
        style={{ animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl animate-bounce"
        style={{ animationDuration: "8s", animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute top-1/4 left-1/4 w-28 h-28 bg-orange-300/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-2xl"
            style={{ boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.4)" }}
          >
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Special{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Limited Time Offers - Choose Your Path to Success 🚀
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-500" />
              <span>Google Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-500" />
              <span>500+ Alumni</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
            {tiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`group relative bg-white border-2 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                  tier.highlighted
                    ? "border-orange-300 shadow-2xl transform scale-105"
                    : "border-gray-200 shadow-lg hover:border-orange-200"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  boxShadow: tier.highlighted
                    ? "0 25px 50px -12px rgba(249, 115, 22, 0.25)"
                    : "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
               
                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {tier.discount}
                </div>

                <div className="p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        tier.highlighted
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg"
                          : "bg-gradient-to-br from-gray-100 to-gray-200"
                      }`}
                    >
                      <tier.icon
                        className={`w-10 h-10 ${
                          tier.highlighted ? "text-white" : "text-orange-500"
                        }`}
                      />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900">
                      {tier.name}
                    </h3>

                    {tier.badge && (
                      <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
                        <span className="text-orange-600 text-sm font-medium">
                          {tier.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {tier.originalPrice}
                      </span>
                    </div>
                    <p className="text-gray-600">One-time payment</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 group-hover:scale-105 ${
                      tier.highlighted
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-orange-500 hover:to-orange-600"
                    }`}
                    onClick={() =>
                      window.open("https://wa.me/919871672790", "_blank")
                    }
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
