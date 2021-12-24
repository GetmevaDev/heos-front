import React from 'react';
import { useQuery, gql } from '@apollo/client';

import styles from './style.module.css';

const REVIEWS = gql`
  query menu {
    manhatonMenus {
      text
      textColor
      manhatoMenu {
        price
        title

        descparagraphmanh {
          desc
        }
        priceDescManh {
          text
        }
      }
    }
  }
`;

const MenuManhaton = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;

  return (
    <>
      <div className={styles.menuHampton}>
        <div>
          <div className={styles.menu}>
            <div className={styles.menuInner}>
              {data.manhatonMenus.slice(0, 2).map((item, index) => (
                <div className={styles.left} key={index}>
                  <h2>{item.manhatoMenu.title}</h2>
                  {/* <h3>{item.manhatoMenu.price}</h3> */}
                  <div className={styles.price}>
                    <div className={styles.pricesLeft}>
                      {item.manhatoMenu.descparagraphmanh.map((d, index) => (
                        <p key={index}>{d.desc}</p>
                      ))}
                    </div>
                    <div className={styles.pricesRight}>
                      {item.manhatoMenu.priceDescManh.map((p, index) => (
                        <p key={index}>{p.text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <span className={styles.pricesMay}>
                *Prices may vary depending on length and thickness of hair.
              </span>
            </div>

            <div className={styles.right}>
              <h1>
                {data.manhatonMenus[0].text}
                <p>{data.manhatonMenus[0].textColor} </p>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.menuHampton} style={{ paddingTop: 0 }}>
        <div>
          <div className={styles.menu}>
            <div className={styles.menuInner}>
              {data.manhatonMenus.slice(2).map((item, index) => (
                <div className={styles.left} key={index}>
                  <h2>{item.manhatoMenu.title}</h2>
                  {/* <h3>{item.manhatoMenu.price}</h3> */}
                  <div className={styles.price}>
                    <div className={styles.pricesLeft}>
                      {item.manhatoMenu.descparagraphmanh.map((d, index) => (
                        <p key={index}>{d.desc}</p>
                      ))}
                    </div>
                    <div className={styles.pricesRight}>
                      {item.manhatoMenu.priceDescManh.map((p, index) => (
                        <p key={index}>{p.text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.right}>
              <h1>
                {data.manhatonMenus[2].text}
                <p>{data.manhatonMenus[2].textColor} </p>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* bg 2nd */}

      {/* <div className={styles.menuHamptonTwo}>
        <div>
          <div className={styles.menu}>
            <div className={styles.menuInner}>
              {data.manhatonMenus.slice(5, 6).map((item, index) => (
                <div className={styles.left} key={index}>
                  <h2>{item.manhatoMenu.title}</h2>
                  <h3>{item.manhatoMenu.price}</h3>
                  <div className={styles.price}>
                    <div className={styles.pricesLeft}>
                      {item.manhatoMenu.descparagraphmanh.map((d, index) => (
                        <p key={index}>{d.desc}</p>
                      ))}
                    </div>
                    <div className={styles.pricesRight}>
                      {item.manhatoMenu.priceDescManh.map((p, index) => (
                        <p key={index}>{p.text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.right}>
              <h1>
                {data.manhatonMenus[4]?.text}
                <p>{data.manhatonMenus[4]?.textColor} </p>
              </h1>
            </div>
          </div>
        </div>
      </div> */}

      {/* bg 3rd */}
    </>
  );
};

export default MenuManhaton;
