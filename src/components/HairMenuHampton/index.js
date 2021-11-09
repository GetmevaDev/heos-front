import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./style.module.css";
import ReactMarkdown from "react-markdown";

const REVIEWS = gql`
  query menu {
    hamptonMenus {
      title
      textColor
      HamptonMenu {
        title
        price
        descparagraph {
          desc
        }
        priceDesc {
          text
        }
      }
    }
  }
`;

const MenuHampton = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>loadng</p>;
  if (error) return <p>error</p>;

  console.log(data.hamptonMenus[0], "data");
  return (
    <>
      <div className={styles.menuHampton}>
        <div>
          <div className={styles.menu}>
            <div className={styles.menuInner}>
              {data.hamptonMenus.slice(0, 5).map((item) => (
                <div className={styles.left}>
                  <h2>{item.HamptonMenu.title}</h2>
                  <h3>{item.HamptonMenu.price}</h3>
                  <div className={styles.price}>
                    <div className={styles.pricesLeft}>
                      {item.HamptonMenu.descparagraph.map((d) => (
                        <p>{d.desc}</p>
                      ))}
                    </div>
                    <div className={styles.pricesRight}>
                      {item.HamptonMenu.priceDesc.map((p) => (
                        <p>{p.text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.right}>
              <h1>
                {data.hamptonMenus[0].title}{" "}
                <p>{data.hamptonMenus[0].textColor} </p>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* bg 2nd */}

      <div className={styles.menuHamptonTwo}>
        <div>
          <div className={styles.menu}>
            <div className={styles.menuInner}>
              {data.hamptonMenus.slice(5, 6).map((item) => (
                <div className={styles.left}>
                  <h2>{item.HamptonMenu.title}</h2>
                  <h3>{item.HamptonMenu.price}</h3>
                  <div className={styles.price}>
                    <div className={styles.pricesLeft}>
                      {item.HamptonMenu.descparagraph.map((d) => (
                        <p>{d.desc}</p>
                      ))}
                    </div>
                    <div className={styles.pricesRight}>
                      {item.HamptonMenu.priceDesc.map((p) => (
                        <p>{p.text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.right}>
              <h1>
                {data.hamptonMenus[5].title}
                <p>{data.hamptonMenus[5].textColor} </p>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.menuHampton}>
        <div>
          <div className={styles.menu}>
            <div className={styles.menuInner}>
              {data.hamptonMenus.slice(6).map((item) => (
                <div className={styles.left}>
                  <h2>{item.HamptonMenu.title}</h2>
                  <h3>{item.HamptonMenu.price}</h3>
                  <div className={styles.price}>
                    <div className={styles.pricesLeft}>
                      {item.HamptonMenu.descparagraph.map((d) => (
                        <p>{d.desc}</p>
                      ))}
                    </div>
                    <div className={styles.pricesRight}>
                      {item.HamptonMenu.priceDesc.map((p) => (
                        <p>{p.text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.right}>
              <h1>
                {data.hamptonMenus[7].title}{" "}
                <p>{data.hamptonMenus[7].textColor} </p>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* bg 3rd */}
    </>
  );
};

export default MenuHampton;
