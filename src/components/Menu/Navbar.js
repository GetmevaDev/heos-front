import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Logo from "../../images/logo.png";

function Navbar({ location }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="container navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="Logo" />
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className="navbar-logo-mobile"
              onClick={closeMobileMenu}
            >
              <img src={Logo} alt="Logo" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              activeClassName={location.pathname === "/" ? "linkActive" : ""}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              activeClassName={
                location.pathname === "/about" ? "linkActive" : ""
              }
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              activeClassName={
                location.pathname === "/services" ? "linkActive" : ""
              }
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="/#"
              activeClassName={
                location.pathname === "/contact" ? "linkActive" : ""
              }
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact <i className="fas fa-caret-down" />
              {dropdown && <Dropdown />}
            </NavLink>
          </li>

          <div className="rightSearch-mobile">
            <i className="fas fa-search"></i>
            <input type="name" />
          </div>
        </ul>
        <div className="rightSearch">
          <i className="fas fa-search"></i>
          <input type="name" />
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
