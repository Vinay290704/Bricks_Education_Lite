import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import BricksLogo from "../../assets/images/Logo.png";
import useActiveSection from "../../hooks/useActiveSection";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const activeSection = useActiveSection(["about", "outcomes", "schedule"]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleHashNavigation = (e, hash) => {
    e.preventDefault();

    if (!isHomePage) {
      window.location.href = `/${hash}`;
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/60 shadow-sm transition-all duration-300 ease-in-out">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="group flex items-center gap-3 text-gray-900 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 rounded-lg"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-1 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-red-500/10">
              <div className="h-8 w-8 overflow-hidden rounded-lg lg:h-10 lg:w-10">
                <img
                  src={BricksLogo}
                  alt="Bricks Education Logo"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-lg font-bold tracking-wide text-transparent lg:text-xl">
              BRICKS EDUCATION
            </div>
          </Link>

          {/* Desktop Navigation with increased gaps */}
          <ul className="hidden items-center gap-10 md:flex lg:gap-8">
            {[
              { href: "#about", label: "About", section: "about" },
              { href: "#outcomes", label: "Outcomes", section: "outcomes" },
              { href: "#schedule", label: "Schedule", section: "schedule" },
            ].map((item) => (
              <li key={item.section}>
                <a
                  href={item.href}
                  onClick={(e) => handleHashNavigation(e, item.href)}
                  className={`relative px-4 py-2.5 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 ${
                    isActiveLink(item.section)
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 hover:shadow-md"
                  }`}
                >
                  {item.label}
                  {isActiveLink(item.section) && (
                    <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
                  )}
                </a>
              </li>
            ))}

            <li>
              <Link
                to="/leaderboard"
                className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 ${
                  location.pathname === "/leaderboard"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 hover:shadow-md"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Trophy size={18} className="flex-shrink-0" />
                <span>Leaderboard</span>
                {location.pathname === "/leaderboard" && (
                  <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="relative p-3 rounded-xl text-gray-700 transition-all duration-300 ease-out hover:bg-gray-100 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 md:hidden"
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
          <div className="border-t border-gray-200/60 pt-4">
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About", section: "about" },
                { href: "#outcomes", label: "Outcomes", section: "outcomes" },
                { href: "#schedule", label: "Schedule", section: "schedule" },
              ].map((item) => (
                <li key={item.section}>
                  <a
                    href={item.href}
                    onClick={(e) => handleHashNavigation(e, item.href)}
                    className={`relative block px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 ${
                      isActiveLink(item.section)
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600"
                    }`}
                  >
                    {item.label}
                    {isActiveLink(item.section) && (
                      <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
                    )}
                  </a>
                </li>
              ))}

              <li>
                <Link
                  to="/leaderboard"
                  className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 ${
                    location.pathname === "/leaderboard"
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Trophy size={20} className="flex-shrink-0" />
                  <span>Leaderboard</span>
                  {location.pathname === "/leaderboard" && (
                    <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
                  )}
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
