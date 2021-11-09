import React from "react";
import styles from "./style.module.css";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query meet {
    meetTeams {
      title
      logo {
        url
      }
      bg {
        url
      }
    }
  }
`;

const Block = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>loadng</p>;
  if (error) return <p>error</p>;
  return (
    <div
      className={styles.block}
      style={{ backgroundImage: `url(${data.meetTeams[0].bg[0].url})` }}
    >
      <div className="container">
        <div className={styles.blockInner}>
          <h1>{data.meetTeams[0].title}</h1>
          <img src={data.meetTeams[0].logo[0].url} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Block;
