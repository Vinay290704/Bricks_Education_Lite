import { Link } from "lucide-react";
import BricksLogo from "../../assets/Logo.png";
const Header = () => {
  return (
    <header id="header">
      <nav className="container">
        <div className="logo-container">
          <div className="logo-icon">
            <img src={BricksLogo} alt="Bricks" />
          </div>
          <div className="logo-text">BRICKS EDUCATION</div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#outcomes">Outcomes</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
        <div className="mobile-menu-toggle" id="mobileMenuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
