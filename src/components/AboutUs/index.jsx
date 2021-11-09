import React from "react";
import styles from "./style.module.css";
import ReactMarkdown from "react-markdown";
import { useQuery, gql } from "@apollo/client";

import Photo from "../../images/bitmap.png";

const REVIEWS = gql`
  query about {
    aboutuses {
      title
      desc
      photo {
        url
      }
    }
  }
`;

const AboutUs = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.center}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              <ReactMarkdown>{data.aboutuses[0].title}</ReactMarkdown>
            </h1>
            <p className={styles.desc}>{data.aboutuses[0].desc}</p>
          </div>

          <div className={styles.right}>
            <img
              className={styles.photo}
              src={data.aboutuses[0].photo[0].url}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
