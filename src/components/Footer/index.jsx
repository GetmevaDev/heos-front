import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./style.module.css";
import { useQuery, gql } from "@apollo/client";

import Logo from "../../images/logoFooter.png";
import Rgm from "../../images/rgm.png";

const REVIEWS = gql`
  query seo {
    navigation {
      footer {
        Contact {
          text
          title
          textColor
        }
        items {
          title
          item
          href
        }
        social {
          icon {
            url
          }
          title
        }

        logoFooter {
          url
        }
        textColorCompany
        text
        captcha
        reserved
        logoCompany {
          url
        }
      }
    }
  }
`;

const Footer = ({ location }) => {
  const { loading, error, data } = useQuery(REVIEWS);

  console.log(data);
  if (loading) return <p></p>;
  if (error) return <p>error</p>;

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.logoLeft}>
            <img src={data.navigation.footer[0].logoFooter[0].url} alt="" />
            <p>
              {data.navigation.footer[0].captcha}
              <br />
              {data.navigation.footer[0].reserved}
            </p>
          </div>
          <ul className={styles.menu}>
            <h4>{data.navigation.footer[0].items[0].title}</h4>
            {data.navigation.footer[0].items.map(({ item, href }, index) => (
              <li key={index}>
                <NavLink
                  className={styles.link}
                  to={href}
                  activeClassName={
                    location.pathname === href ? styles.active : styles.link
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className={styles.social}>
            <h4> {data.navigation.footer[0].social[0].title}</h4>
            <img src={data.navigation.footer[0].social[0].icon[0].url} alt="" />
          </span>
          <div className={styles.contact}>
            <h4> {data.navigation.footer[0].Contact[0].title}</h4>
            <p>{data.navigation.footer[0].Contact[0].text}</p>
            <p>
              {data.navigation.footer[0].Contact[1].text}
              <b>{data.navigation.footer[0].Contact[1].textColor}</b> <br />
              {data.navigation.footer[0].Contact[2].text}{" "}
              <b>{data.navigation.footer[0].Contact[2].textColor}</b>
            </p>
          </div>

          <div className={styles.logoRight}>
            <img src={data.navigation.footer[0].logoCompany[0].url} alt="" />
            <span>
              {data.navigation.footer[0].text}
              <br /> by <b> {data.navigation.footer[0].textColorCompany}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Footer);
