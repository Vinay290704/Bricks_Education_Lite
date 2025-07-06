import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import BricksLogo from "../../assets/images/Logo.png";
import useActiveSection from "../../hooks/useActiveSection";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const activeSection = useActiveSection(["about", "outcomes", "schedule"]);

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
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleHashNavigation = (e, hash) => {
    e.preventDefault();

    if (!isHomePage) {
      window.location.href = `/${hash}`;
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (sectionId) => {
    return activeSection === sectionId;
  };

  const navigationItems = [
    { href: "#about", label: "About", section: "about" },
    { href: "#outcomes", label: "Outcomes", section: "outcomes" },
    { href: "#schedule", label: "Schedule", section: "schedule" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-red-500 backdrop-blur-[20px] border-b border-red-500/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-8 py-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-4 text-white transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 rounded-lg animate-[slideInLeft_0.8s_ease-out]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-[50px] h-[50px] bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_4px_15px_rgba(231,76,60,0.3)] transition-all duration-300 hover:rotate-[5deg] hover:scale-105 hover:shadow-[0_8px_25px_rgba(231,76,60,0.4)]">
              <img
                src={BricksLogo}
                alt="Bricks Education Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="text-2xl font-bold text-white">
              BRICKS EDUCATION
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navigationItems.map((item) => (
              <li key={item.section} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => handleHashNavigation(e, item.href)}
                  className={`relative px-4 py-2 rounded-[25px] font-medium text-white transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 overflow-hidden ${
                    isActiveLink(item.section)
                      ? "bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/25"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="relative">
              <Link
                to="/leaderboard"
                className={`relative flex items-center gap-2.5 px-4 py-2 rounded-[25px] font-medium text-white transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 overflow-hidden ${
                  location.pathname === "/leaderboard"
                    ? "bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/25"
                    : "hover:bg-white/10"
                }`}
              >
                <Trophy size={18} className="flex-shrink-0" />
                <span>Leaderboard</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`hidden md:hidden flex-col cursor-pointer gap-1 p-2 ${
              isMobileMenuOpen ? "active" : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-[25px] h-[3px] bg-white transition-all duration-300 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-x-[5px] translate-y-[5px]"
                  : ""
              }`}
            ></span>
            <span
              className={`w-[25px] h-[3px] bg-white transition-all duration-300 rounded-sm ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-[25px] h-[3px] bg-white transition-all duration-300 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 translate-x-[7px] -translate-y-[6px]"
                  : ""
              }`}
            ></span>
          </button>

          {/* Updated Mobile Menu Button for smaller screens */}
          <button
            className="relative p-3 rounded-xl text-white transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 md:hidden"
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
              {navigationItems.map((item) => (
                <li key={item.section}>
                  <a
                    href={item.href}
                    onClick={(e) => handleHashNavigation(e, item.href)}
                    className={`relative block px-4 py-3.5 rounded-[25px] font-medium text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 overflow-hidden ${
                      isActiveLink(item.section)
                        ? "bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/25"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <Link
                  to="/leaderboard"
                  className={`relative flex items-center gap-3 px-4 py-3.5 rounded-[25px] font-medium text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 overflow-hidden ${
                    location.pathname === "/leaderboard"
                      ? "bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/25"
                      : "hover:bg-white/10"
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
