import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import axios from "axios";

const Team = () => {
  const [firstSign, setFirstSign] = useState([]);
  const [secondSign, setSecondSign] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    const firstContent = "http://localhost:1337/hampton-teams";
    const secondContent = "http://localhost:1337/manhattan-teams";

    const getApiFirst = axios.get(firstContent);
    const getApiSecond = axios.get(secondContent);

    axios.all([getApiFirst, getApiSecond]).then(
      axios.spread((...allData) => {
        const allDataFirstContent = allData[0].data;
        const allDataSecondContent = allData[1].data;

        setFirstSign(allDataFirstContent);
        setSecondSign(allDataSecondContent);
        setLoading(false);
      })
    );
  };

  console.log(firstSign, "first");
  console.log(secondSign, "second");

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>loading</div>;
  console.log(secondSign);

  return (
    <div className="container">
      <div className={styles.teamManhattan}>
        <h1 className={styles.titleTeam}>{firstSign[0].title}</h1>
        <div className={styles.cards}>
          {firstSign.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.photo[0].url} alt="" />
              <h2 className={styles.name}>{item.name}</h2>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.teamHampton}>
        <h1 className={styles.titleTeam}>{secondSign[0].title}</h1>
        <div className={styles.cards}>
          {secondSign.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.photo[0].url} alt="" />
              <h2 className={styles.name}>{item.name}</h2>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
