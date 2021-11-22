import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './style.module.css';
import { useQuery, gql } from '@apollo/client';

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
              <li key={index} className={styles.list}>
                <NavLink
                  className={styles.link}
                  to={href}
                  activeClassName={location.pathname === href ? styles.active : styles.link}>
                  {item}
                </NavLink>
              </li>
            ))}
            <div className={styles.salons}>
              <ul>
                <li>M.Salon</li>
                <li>H.Salon</li>
              </ul>
            </div>
          </ul>
          <span className={styles.social}>
            <h4> {data.navigation.footer[0].social[0].title}</h4>
            <img
              src={data.navigation.footer[0].social[0].icon[0].url}
              alt=""
              style={{ paddingTop: 5 }}
            />
          </span>
          <div className={styles.contact}>
            <h4> {data.navigation.footer[0].Contact[0].title}</h4>
            <p>{data.navigation.footer[0].Contact[0].text}</p>
            <p>
              {data.navigation.footer[0].Contact[1].text}
              <a href="tel:631-537-8000" className={styles.tel}>
                <b> {data.navigation.footer[0].Contact[1].textColor}</b>
              </a>
              <br />
              {data.navigation.footer[0].Contact[2].text}
              <a href="tel:212-837-1014" className={styles.tel}>
                <b>{data.navigation.footer[0].Contact[2].textColor}</b>
              </a>
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
