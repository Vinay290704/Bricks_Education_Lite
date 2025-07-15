
import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import BricksLogo from "../../assets/images/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Add dark theme styles
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .glass-header {
        background: rgba(15, 15, 23, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .header-gradient {
        background: linear-gradient(135deg, #9333ea 0%, #06b6d4 50%, #22c55e 100%);
      }
      .glass-nav-item {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .nav-glow:hover {
        box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle scroll for navbar hiding/showing
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

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 glass-header border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-8 py-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-4 text-white transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-[50px] h-[50px] header-gradient rounded-xl flex items-center justify-center overflow-hidden shadow-[0_4px_15px_rgba(147,51,234,0.3)] transition-all duration-300 hover:rotate-[5deg] hover:scale-105 hover:shadow-[0_8px_25px_rgba(147,51,234,0.4)]">
              <img
                src={BricksLogo}
                alt="Bricks Education Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="text-2xl md:text-2xl font-bold text-white">
              BRICKS <span className="text-lg md:text-2xl bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">EDUCATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            <li className="relative">
              <Link
                to="/leaderboard"
                className={`relative flex items-center gap-2.5 px-4 py-2 rounded-[25px] font-medium text-white transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 overflow-hidden nav-glow ${
                  location.pathname === "/leaderboard"
                    ? "header-gradient shadow-lg shadow-purple-500/25"
                    : "glass-nav-item hover:bg-white/10"
                }`}
              >
                <Trophy size={18} className="flex-shrink-0" />
                <span>Leaderboard</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="relative p-3 rounded-xl text-white transition-all duration-300 ease-out glass-nav-item hover:bg-white/10 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 md:hidden nav-glow"
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

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/20 pt-4">
            <ul className="space-y-3 list-none">
              <li>
                <Link
                  to="/leaderboard"
                  className={`relative flex items-center gap-3 px-4 py-3.5 rounded-[25px] font-medium text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 overflow-hidden nav-glow ${
                    location.pathname === "/leaderboard"
                      ? "header-gradient shadow-lg shadow-purple-500/25"
                      : "glass-nav-item hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Trophy size={20} className="flex-shrink-0" />
                  <span>Leaderboard</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
