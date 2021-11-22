import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Carousel from 'react-elastic-carousel';

import styles from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

const REVIEWS = gql`
  query gettest {
    testimonials {
      name
      desc
      id
      photo {
        url
      }
    }
  }
`;

const Testimonials = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p></p>;
  if (error) return <p>error</p>;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialsInner}>
          <h1 className={styles.title}>Testimonials</h1>
          {/* <div className={styles.arrows}>
            <svg
              className="leftArrrow"
              width="16"
              height="28"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 26L2 14L14 2"
                stroke="#c4c4c4"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="rightArrow"
              width="16"
              height="28"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 26L14 14L2 2"
                stroke="#D1A068"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div> */}
        </div>
        <div className={styles.cards}>
          <Carousel breakPoints={breakPoints}>
            {data.testimonials.map((item) => (
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <img className={styles.cardImg} src={item.photo[0]?.url} alt="" />
                  <div className={styles.nameInner}>
                    <h5>{item?.name}</h5>
                    <span style={{ color: '#FBB040' }}>★★★★★</span>
                  </div>
                </div>
                <div className={styles.cardText}>{item?.desc}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
