import React from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./style.module.css";
import ReactMarkdown from "react-markdown";

const REVIEWS = gql`
  query seo {
    maps {
      hampton {
        title
        mapUrl
        address
        salonHours {
          date
        }
        phone
      }
    }
  }
`;

const Map = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;

  return (
    <div className="container">
      <div className={styles.map}>
        <div className={styles.left}>
          <h4 className={styles.infoTitle}>Address:</h4>
          <p>{data.maps[0].hampton.address}</p>
          <h4 className={styles.infoTitle}>{data.maps[0].hampton.title}</h4>
          {data.maps[0].hampton.salonHours.map((item, index) => (
            <ReactMarkdown key={index}>{item.date}</ReactMarkdown>
          ))}
          <h4 className={styles.infoTitle}>Phone:</h4>
          <a href={"tel:" + data.maps[0].hampton.phone} className={styles.tel}>
            <b>{data.maps[0].hampton.phone}</b>
          </a>
        </div>
        <div className={styles.right}>
          <iframe
            src={data.maps[0].hampton.mapUrl}
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
