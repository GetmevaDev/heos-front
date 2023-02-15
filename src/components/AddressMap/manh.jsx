import React from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./style.module.css";
import ReactMarkdown from "react-markdown";

const REVIEWS = gql`
  query seo {
    maps {
      manhatan {
        title
        address
        phone
        mapUrl
        salonHoursManh {
          date
        }
      }
    }
  }
`;

const MapManh = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;

  console.log(data, "data");
  return (
    <div className="container">
      <div className={styles.map}>
        {data && (
          <div className={styles.left}>
            <h4 className={styles.infoTitle}>Address:</h4>
            <p>{data.maps[0].manhatan.address}</p>
            <h4 className={styles.infoTitle}>{data.maps[0].manhatan.title}</h4>
            {data.maps[0].manhatan.salonHoursManh.map((item, index) => (
              <ReactMarkdown key={index}>{item.date}</ReactMarkdown>
            ))}
            <h4 className={styles.infoTitle}>Phone</h4>
            <a
              href={"tel:" + data.maps[0].manhatan.phone}
              className={styles.tel}
            >
              <b>{data.maps[0].manhatan.phone}</b>
            </a>
            <a
              href="https://app.salonrunner.com/customer/login.htm?id=31228"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.button}>Book an Appointment</button>
            </a>
          </div>
        )}

        <div className={styles.right}>
          <iframe
            src={data.maps[0].manhatan.mapUrl}
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

export default MapManh;
