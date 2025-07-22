import {
  CheckCircle,
  Crown,
  Star,
  Users,
  Zap,
  Award,
  Gift,
  Trophy,
  Cpu,
  Wrench,
  Shield,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import roboticsKitImage from "../../assets/images/robotics-kit.jpg";

const PricingSection = () => {
  const commonFeatures = [
    "All program benefits included",
    <span key="kit">
      <strong>Free robotics kit worth ₹4000</strong>
    </span>,
    "Priority mentor access & guidance",
    "Exclusive alumni network access",
    "Certificate from Google & Scaler",
    "Live project demonstrations",
    "Career guidance sessions",
  ];

  const kitFeatures = [
    {
      icon: Cpu,
      title: "Arduino Board",
      description: "Latest microcontroller for programming",
    },
    {
      icon: Zap,
      title: "Sensors & Motors",
      description: "Complete sensor suite and servo motors",
    },
    {
      icon: Wrench,
      title: "Building Components",
      description: "Wires, breadboard, and connectors",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All components are student-safe",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen"
    >
      <div
        className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-bounce pointer-events-none"
        style={{ animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl animate-bounce pointer-events-none"
        style={{ animationDuration: "8s", animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
      <div
        className="absolute top-1/4 left-1/4 w-28 h-28 bg-orange-300/10 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300"
            style={{ boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.4)" }}
          >
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Special{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Limited Time Offers - Choose Your Path to Success
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full">
              <Award className="w-4 h-4 text-orange-500" />
              <span>Google Certified</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full">
              <Star className="w-4 h-4 text-orange-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full">
              <Users className="w-4 h-4 text-orange-500" />
              <span>500+ Alumni</span>
            </div>
          </div>
        </div>

        {/* Main Pricing Card with Side-by-Side Layout */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-6xl">
            <div
              className="relative bg-white border-2 border-orange-300 rounded-3xl overflow-hidden shadow-xl"
              style={{
                boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.25)",
              }}
            >
              {/* Winner Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
                67% OFF
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Side - Pricing Options */}
                <div className="p-8 lg:p-12 border-r border-orange-200 flex flex-col justify-between">
                  <div className="flex-grow">
                    {/* Header */}
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                        <Crown className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                        Choose Your Tier
                      </h3>

                      <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                        <span className="text-orange-600 text-sm font-medium">
                          🏆 WINNER'S TIER AVAILABLE
                        </span>
                      </div>
                    </div>

                    {/* Pricing Options */}
                    <div className="space-y-6">
                      {/* Workshop Winners - Highlighted */}
                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-2 border-orange-500/30 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Trophy className="w-6 h-6 text-orange-500" />
                            <span className="text-lg font-bold text-gray-900">
                              Workshop Winners
                            </span>
                          </div>
                          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            BEST VALUE
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            ₹1,999
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ₹5,999
                          </span>
                          <span className="text-green-600 font-bold text-sm">
                            Save ₹4,000!
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          For workshop participants and competition winners
                        </p>
                      </div>

                      {/* Partner Schools - Secondary */}
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Users className="w-6 h-6 text-gray-600" />
                            <span className="text-lg font-semibold text-gray-900">
                              Partner Schools
                            </span>
                          </div>
                          <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            42% OFF
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-bold text-gray-900">
                            ₹3,499
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ₹5,999
                          </span>
                          <span className="text-gray-600 font-medium text-sm">
                            Save ₹2,500
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          For students from our partner institutions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full mt-8 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    onClick={() =>
                      window.open(
                        "https://payments.cashfree.com/forms/bricks-bootcamp",
                        "_blank"
                      )
                    }
                  >
                    CLAIM YOUR SPOT NOW
                  </button>
                </div>

                {/* Right Side - Features */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div className="flex-grow">
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900">
                          What's Included
                        </h4>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Both tiers include all these amazing benefits and more!
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {commonFeatures.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50/30"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Us Button */}
                  <button
                    className="w-full mt-8 px-6 py-4 text-lg font-bold flex items-center justify-center bg-white/60 backdrop-blur-lg border-2 border-orange-300 text-orange-700 hover:bg-orange-50 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    onClick={() =>
                      window.open(
                        "https://wa.me/919871672790?text=Hi%20Bricks%20Education!%20I'm%20interested%20in%20your%20robotics%20and%20programming%20courses.",
                        "_blank"
                      )
                    }
                    aria-label="Learn more about the program"
                  >
                    <FaWhatsapp
                      className="mr-3 w-6 h-6"
                      color="#ea580c"
                      aria-hidden="true"
                    />
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Robotics Kit Section */}
        <div className="relative">
          <div
            className="absolute top-20 left-10 w-28 h-28 bg-orange-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-10 right-20 w-36 h-36 bg-orange-400/15 rounded-full blur-3xl animate-bounce pointer-events-none"
            style={{ animationDuration: "7s", animationDelay: "2s" }}
          ></div>

          {/* Kit Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300"
              style={{ boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.4)" }}
            >
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                FREE
              </span>{" "}
              Robotics Kit
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Get amazing robotics kit worth{" "}
              <span className="font-bold text-orange-600">₹4000</span> -
              included free with both tiers!
            </p>
          </div>

          {/* Kit Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Kit Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-orange-100">
                <img
                  src={roboticsKitImage}
                  alt="Free Robotics Kit"
                  className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  FREE
                </div>
              </div>
            </div>

            {/* Kit Details */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Everything You Need to{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Build & Create
                  </span>
                </h3>
              </div>

              {/* Kit Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {kitFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
