import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import styles from './style.module.css';

const REVIEWS = gql`
  query information {
    infos {
      text
      desc
      desbBottom
      svg {
        url
      }
      clock {
        text
      }
    }
  }
`;

const Info = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;

  return (
    <div className="container">
      <div className={styles.info}>
        <div className={styles.address}>
          <span className={styles.circle}></span>
          <span
            className={styles.svg}
            style={{ backgroundImage: `url(${data.infos[0].svg[0].url})` }}></span>
          <h4 className={styles.infoTitle}>{data.infos[0].text}</h4>

          <p>{data.infos[0].desc}</p>
          <p>{data.infos[0].desbBottom}</p>
        </div>

        <div className={styles.address}>
          <span className={styles.circle}></span>
          <span
            className={styles.svg}
            style={{ backgroundImage: `url(${data.infos[0].svg[0].url})` }}></span>
          <h4 className={styles.infoTitle}>{data.infos[3].text}</h4>

          <p>{data.infos[3].desc}</p>
          <p>{data.infos[3].desbBottom}</p>
        </div>

        <div className={styles.hours}>
          <span className={styles.circle}></span>
          <span
            className={styles.svg}
            style={{ backgroundImage: `url(${data.infos[1].svg[0].url})` }}></span>
          <h4 className={styles.infoTitle}>{data.infos[1].text}</h4>
          {data.infos[1].clock.map(({ text }, index) => (
            <ReactMarkdown key={index}>{text}</ReactMarkdown>
          ))}
        </div>

        <div className={styles.phone}>
          <span className={styles.circle}></span>
          <span
            className={styles.svg}
            style={{ backgroundImage: `url(${data.infos[2].svg[0].url})` }}></span>

          <h4 className={styles.infoTitle}>{data.infos[2].text}</h4>
          <a href="tel:631-537-8000">
            <ReactMarkdown>{data.infos[2].clock[0].text}</ReactMarkdown>
          </a>

          <a href="tel:212-837-1014">
            <ReactMarkdown>{data.infos[2].clock[1].text}</ReactMarkdown>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Info;
