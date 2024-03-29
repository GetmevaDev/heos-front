import React from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./style.module.css";
import { Link } from "react-router-dom";

const REVIEWS = gql`
  query Team {
    blockAddresses {
      desc
      bg {
        url
      }
      location {
        url
      }
      centerlogo {
        url
      }
    }
  }
`;

const BlockAdress = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;

  return (
    <div className={styles.blockAddress}>
      <Link to="/">
        <img
          className={styles.blockimg}
          src={data.blockAddresses[0].centerlogo[0].url}
          alt=""
        />
      </Link>
      <div className={styles.leftBlock}>
        <img
          className={styles.leftimgBlock}
          src={data.blockAddresses[0].bg[0].url}
          alt=""
        />
        <span
          className={styles.location}
          style={{
            backgroundImage: `url(${data.blockAddresses[0].location[0].url})`,
          }}
        ></span>
        <p>{data.blockAddresses[0].desc}</p>
        <Link to="/contact/manhattan">
          <button className={styles.btnLeft}>MAKE AN APPOINTMENT</button>
        </Link>
      </div>
      <div className={styles.rightBlock}>
        <img
          className={styles.rightimgBlock}
          src={data.blockAddresses[1].bg[0].url}
          alt=""
        />
        <span
          className={styles.location}
          style={{
            backgroundImage: `url(${data.blockAddresses[1].location[0].url})`,
          }}
        ></span>
        <p>{data.blockAddresses[1].desc}</p>
        <Link to="/contact/hampton">
          <button className={styles.btnLeft}>MAKE AN APPOINTMENT</button>
        </Link>
      </div>
    </div>
  );
};
export default BlockAdress;
