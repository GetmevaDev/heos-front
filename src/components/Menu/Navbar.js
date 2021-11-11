import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import "./Navbar.css";
import Dropdown from "./Dropdown";
import Logo from "../../images/logo.png";

const REVIEWS = gql`
  query menu {
    navigation {
      logo {
        url
      }
      header {
        item
        subItem {
          subitem
          href
          cName
        }
      }
    }
  }
`;

function Navbar({ location }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { loading, error, data } = useQuery(REVIEWS);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;

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
          <img src={data.navigation.logo[0].url} alt="Logo" />
          <i className="fab fa-firstdraft" />
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
              {data.navigation?.header[0].item}
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
              {data.navigation?.header[1].item}
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
              {data.navigation?.header[2].item}
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
              {data.navigation?.header[3].item}
              <i className="fas fa-caret-down" />
              {dropdown && <Dropdown data={data} />}
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
