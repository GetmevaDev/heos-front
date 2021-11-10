import React from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./style.module.css";
import Man1 from "../../images/man1.png";
import Man2 from "../../images/man2.png";

const REVIEWS = gql`
  query meet {
    meetFounders {
      title
      photo {
        url
      }
      logo {
        url
      }
      name
    }
  }
`;

const MeetFounders = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;
  return (
    <div className="container">
      <div className={styles.meet}>
        <h1 className={styles.title}>{data.meetFounders[0].title}</h1>
        <div className={styles.centerMeet}>
          <span
            className={styles.ceneterMeetLogo}
            style={{
              backgroundImage: `url(${data.meetFounders[0].logo[0].url})`,
            }}
          ></span>
          <div className={styles.leftMeet}>
            <img
              className={styles.man}
              src={data.meetFounders[0].photo[0].url}
              alt=""
            />
            <h3 className={styles.name}>{data.meetFounders[0].name}</h3>
          </div>
          <div className={styles.rightMeet}>
            <img
              className={styles.man}
              src={data.meetFounders[1].photo[0].url}
              alt=""
            />
            <h3 className={styles.name}>{data.meetFounders[1].name}v</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetFounders;
