import React from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./style.module.css";

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
      <img
        className={styles.blockimg}
        src={data.blockAddresses[0].centerlogo[0].url}
        alt=""
      />
      <div
        className={styles.leftBlock}
        style={{ backgroundImage: `url(${data.blockAddresses[0].bg[0].url})` }}
      >
        <span
          className={styles.location}
          style={{
            backgroundImage: `url(${data.blockAddresses[0].location[0].url})`,
          }}
        ></span>
        <p>{data.blockAddresses[0].desc}</p>
      </div>
      <div
        className={styles.rightBlock}
        style={{ backgroundImage: `url(${data.blockAddresses[1].bg[0].url})` }}
      >
        <span
          className={styles.location}
          style={{
            backgroundImage: `url(${data.blockAddresses[1].location[0].url})`,
          }}
        ></span>
        <p>{data.blockAddresses[1].desc}</p>
      </div>
    </div>
  );
};
export default BlockAdress;
