import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import BricksLogo from "../../assets/images/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleEnrollClick = () => {
    window.open(
      "https://payments.cashfree.com/forms/bricks-bootcamp",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-orange-100 shadow-lg shadow-orange-500/10 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-8 py-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-4 text-gray-800 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src={BricksLogo}
              alt="Bricks Education Logo"
              className="w-[50px] h-[50px] object-cover rounded-xl transition-all duration-300 hover:rotate-[5deg] hover:scale-105"
            />
            <div className="text-2xl md:text-2xl font-bold text-gray-800">
              BRICKS{" "}
              <span className="text-lg md:text-2xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-black">
                EDUCATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8 list-none">
              <li className="relative">
                <Link
                  to="/leaderboard"
                  className={`relative flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:ring-offset-2 overflow-hidden ${
                    location.pathname === "/leaderboard"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30"
                      : "bg-white/60 backdrop-blur-sm text-gray-700 border border-orange-100 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 hover:shadow-md hover:shadow-orange-500/10"
                  }`}
                >
                  <Trophy size={18} className="flex-shrink-0" />
                  <span>Leaderboard</span>
                </Link>
              </li>
            </ul>

            {/* Enroll Button */}
            <button
              className="flex items-center gap-2 px-6 py-3 font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full border-none transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-300/50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
              onClick={handleEnrollClick}
              aria-label="Enroll now in the bootcamp"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-bold">ENROLL NOW</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative p-3 rounded-xl transition-all duration-300 ease-out bg-white/60 backdrop-blur-sm border border-orange-100 text-gray-700 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:ring-offset-2 md:hidden hover:shadow-md hover:shadow-orange-500/10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X
                  size={24}
                  className="transition-transform duration-300 rotate-180"
                />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-orange-100 pt-4">
            <ul className="space-y-3 list-none">
              <li>
                <Link
                  to="/leaderboard"
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:ring-offset-2 overflow-hidden w-full ${
                    location.pathname === "/leaderboard"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white/60 backdrop-blur-sm text-gray-700 border border-orange-100 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 hover:shadow-md hover:shadow-orange-500/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Trophy size={20} className="flex-shrink-0" />
                  <span>Leaderboard</span>
                </Link>
              </li>
              <li>
                <button
                  className="relative flex items-center gap-3 px-6 py-4 rounded-full font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 overflow-hidden w-full shadow-lg hover:shadow-xl hover:shadow-orange-300/50"
                  onClick={() => {
                    handleEnrollClick();
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label="Enroll now in the bootcamp"
                >
                  <Sparkles
                    size={20}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>ENROLL NOW</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
