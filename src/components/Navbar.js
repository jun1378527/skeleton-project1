import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import searchIcon from "../assets/img/search.png";
import userIcon from "../assets/img/user.png";
import cartIcon from "../assets/img/cart.png";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const navbar = document.querySelector(".navbar");
    const links = document.querySelectorAll(".nav-link");
    const logo = document.querySelector(".logo");
    const icons = document.querySelectorAll(".icon");
    const hamburger = document.querySelector(".hamburger");
    const navbarLinks = document.querySelector(".navbar-links");

    const handleDropdownClick = e => {
      e.preventDefault();
      const dropdown = e.currentTarget.closest(".dropdown");
      const isShown = dropdown.classList.contains("show");

      dropdowns.forEach(d => d.classList.remove("show"));
      navbar.classList.remove("open");

      if (!isShown) {
        dropdown.classList.add("show");
        navbar.classList.add("open");
      } else {
        dropdown.classList.remove("show");
        navbar.classList.remove("open");
      }
    };

    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector(".nav-link");
      link.addEventListener("click", handleDropdownClick);
    });

    const handleDocumentClick = e => {
      if (!e.target.closest(".dropdown")) {
        dropdowns.forEach(d => d.classList.remove("show"));
        navbar.classList.remove("open");
        if (window.scrollY <= 50) {
          navbar.classList.remove("scrolled");
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);

    const handleHamburgerClick = () => {
      navbarLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else if (!navbar.classList.contains("open")) {
        navbar.classList.remove("scrolled");
      }
    };

    const handleMouseEnter = () => {
      navbar.classList.add("hovered");
    };

    const handleMouseLeave = () => {
      navbar.classList.remove("hovered");
    };

    window.addEventListener("scroll", handleScroll);
    navbar.addEventListener("mouseenter", handleMouseEnter);
    navbar.addEventListener("mouseleave", handleMouseLeave);

    const updateNavbarAppearance = () => {
      if (
        navbar.classList.contains("open") ||
        navbar.classList.contains("scrolled") ||
        navbar.classList.contains("hovered")
      ) {
        links.forEach(link => (link.style.color = "#333"));
        logo.style.color = "#333";
        icons.forEach(icon => (icon.style.filter = "invert(0)"));
      } else {
        links.forEach(link => (link.style.color = "#fff"));
        logo.style.color = "#fff";
        icons.forEach(icon => (icon.style.filter = "invert(1)"));
      }
    };

    updateNavbarAppearance();
    const observer = new MutationObserver(updateNavbarAppearance);
    observer.observe(navbar, { attributes: true, attributeFilter: ["class"] });

    return () => {
      dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector(".nav-link");
        link.removeEventListener("click", handleDropdownClick);
      });
      document.removeEventListener("click", handleDocumentClick);
      hamburger.removeEventListener("click", handleHamburgerClick);
      window.removeEventListener("scroll", handleScroll);
      navbar.removeEventListener("mouseenter", handleMouseEnter);
      navbar.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          HealthApp
        </Link>
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navbar-links">
          <div className="dropdown">
            <Link to="/" className="nav-link" data-toggle="dropdown">
              Home
            </Link>
          </div>
          <div className="dropdown">
            <Link to="#" className="nav-link" data-toggle="dropdown">
              Diet Management
            </Link>
            <div className="dropdown-content">
              <Link to="/dashboard/diet">Daily Plan</Link>
              <Link to="/dashboard/diet">Weekly Plan</Link>
              <Link to="/dashboard/diet">Monthly Plan</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="#" className="nav-link" data-toggle="dropdown">
              Exercise Plan
            </Link>
            <div className="dropdown-content">
              <Link to="/dashboard/exercise">Daily Workout</Link>
              <Link to="/dashboard/exercise">Weekly Routine</Link>
              <Link to="/dashboard/exercise">Monthly Schedule</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/communities" className="nav-link" data-toggle="dropdown">
              Community
            </Link>
            <div className="dropdown-content">
              <Link to="/communities">All Communities</Link>
              <Link to="#">My Communities</Link>
              <Link to="#">Join a Community</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="#" className="nav-link" data-toggle="dropdown">
              Reports
            </Link>
            <div className="dropdown-content">
              <Link to="/dashboard/health-report">Diet Reports</Link>
              <Link to="/dashboard/health-report">Exercise Reports</Link>
              <Link to="/dashboard/health-report">Health Reports</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/challenges" className="nav-link" data-toggle="dropdown">
              Challenges
            </Link>
            <div className="dropdown-content">
              <Link to="/challenges">All Challenges</Link>
              <Link to="#">Ongoing Challenges</Link>
              <Link to="#">Completed Challenges</Link>
            </div>
          </div>
          {user ? (
            <Link to="#" className="nav-link" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </div>
        <div className="navbar-icons">
          <Link to="#">
            <img src={searchIcon} alt="Search Icon" className="icon" />
          </Link>
          <Link to="/login">
            <img src={userIcon} alt="User Icon" className="icon" />
          </Link>
          <Link to="#">
            <img src={cartIcon} alt="Cart Icon" className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
