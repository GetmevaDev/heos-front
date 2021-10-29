import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../images/logo.png";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = ({ location }) => {
  return (
    <div className="container">
      <div className={styles.main}>
        <div className={styles.left}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav className={styles.center}>
          <ul>
            <li>
              <NavLink
                className={styles.link}
                to="/"
                activeClassName={
                  location.pathname === "/" ? styles.linkActive : styles.link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.link}
                to="/about"
                activeClassName={
                  location.pathname === "/about"
                    ? styles.linkActive
                    : styles.link
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.link}
                to="/services"
                activeClassName={
                  location.pathname === "/services"
                    ? styles.linkActive
                    : styles.link
                }
              >
                Services
              </NavLink>
            </li>
            <li className={styles.contact}>
              <NavLink
                className={styles.link}
                to="/contact"
                activeClassName={
                  location.pathname === "/contact"
                    ? styles.linkActive
                    : styles.link
                }
              >
                Contact
              </NavLink>
              <div className={styles.contactBlock}>
                <a href="/#">Manhattan Salon</a>
                <a href="/#">Hampton Salon</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className={styles.rightSearch}>
          <i className="fas fa-search"></i>
          <input type="name" />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Navbar);
