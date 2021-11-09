import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./style.module.css";

import Logo from "../../images/logoFooter.png";
import Rgm from "../../images/rgm.png";

const Footer = ({ location }) => {
  const list = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About Us", href: "/about" },
    { id: 3, title: "Services", href: "/services" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.logoLeft}>
            <img src={Logo} alt="" />
            <p>
              @2020 EDDIE ARTHUR SALON.
              <br />
              All Rights Reserved
            </p>
          </div>
          <ul className={styles.menu}>
            <h4>Menu</h4>
            {list.map((item) => (
              <li key={item.id}>
                <NavLink
                  className={styles.link}
                  to={item.href}
                  activeClassName={
                    location.pathname === item.href
                      ? styles.active
                      : styles.link
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className={styles.social}>
            <h4>Social Media</h4>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5279 6.05469C8.95647 6.05469 6.11049 8.95647 6.11049 12.4721C6.11049 16.0435 8.95647 18.8895 12.5279 18.8895C16.0435 18.8895 18.9453 16.0435 18.9453 12.4721C18.9453 8.95647 16.0435 6.05469 12.5279 6.05469ZM12.5279 16.6574C10.24 16.6574 8.34263 14.8158 8.34263 12.4721C8.34263 10.1842 10.1842 8.34263 12.5279 8.34263C14.8158 8.34263 16.6574 10.1842 16.6574 12.4721C16.6574 14.8158 14.8158 16.6574 12.5279 16.6574ZM20.6752 5.83147C20.6752 4.99442 20.0056 4.32478 19.1685 4.32478C18.3315 4.32478 17.6618 4.99442 17.6618 5.83147C17.6618 6.66853 18.3315 7.33817 19.1685 7.33817C20.0056 7.33817 20.6752 6.66853 20.6752 5.83147ZM24.9163 7.33817C24.8047 5.32924 24.3583 3.54353 22.9074 2.09263C21.4565 0.641741 19.6708 0.195312 17.6618 0.0837054C15.5971 -0.0279018 9.4029 -0.0279018 7.33817 0.0837054C5.32924 0.195312 3.59933 0.641741 2.09263 2.09263C0.641741 3.54353 0.195312 5.32924 0.0837054 7.33817C-0.0279018 9.4029 -0.0279018 15.5971 0.0837054 17.6618C0.195312 19.6708 0.641741 21.4007 2.09263 22.9074C3.59933 24.3583 5.32924 24.8047 7.33817 24.9163C9.4029 25.0279 15.5971 25.0279 17.6618 24.9163C19.6708 24.8047 21.4565 24.3583 22.9074 22.9074C24.3583 21.4007 24.8047 19.6708 24.9163 17.6618C25.0279 15.5971 25.0279 9.4029 24.9163 7.33817ZM22.2377 19.8382C21.8471 20.9542 20.9542 21.7913 19.894 22.2377C18.2199 22.9074 14.3136 22.74 12.5279 22.74C10.6864 22.74 6.78013 22.9074 5.16183 22.2377C4.04576 21.7913 3.20871 20.9542 2.76228 19.8382C2.09263 18.2199 2.26004 14.3136 2.26004 12.4721C2.26004 10.6864 2.09263 6.78013 2.76228 5.10603C3.20871 4.04576 4.04576 3.20871 5.16183 2.76228C6.78013 2.09263 10.6864 2.26004 12.5279 2.26004C14.3136 2.26004 18.2199 2.09263 19.894 2.76228C20.9542 3.1529 21.7913 4.04576 22.2377 5.10603C22.9074 6.78013 22.74 10.6864 22.74 12.4721C22.74 14.3136 22.9074 18.2199 22.2377 19.8382Z"
                fill="#D1A068"
              />
            </svg>
          </span>
          <div className={styles.contact}>
            <h4>Contact</h4>
            <p>
              29 East 61st 4th Floor New York, NY 10065 2422 Montauk Hwy,
              Bridgehampton, NY 11932
            </p>
            <p>
              Bridgehampton Salon: <b>631-537-8000</b> <br />
              NYC Salon: <b>212-837-1014</b>
            </p>
          </div>

          <div className={styles.logoRight}>
            <img src={Rgm} alt="" />
            <span>
              Web Design & Digital Marketing
              <br /> by <b> Robert Gerov Media</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Footer);
