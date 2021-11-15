import React from "react";
import { useQuery, gql } from "@apollo/client";

import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination, Navigation]);

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

  return (
    <div className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialsInner}>
          <h1 className={styles.title}>Testimonials</h1>
          <div className={styles.arrows}>
            <svg
              className="leftArrrow"
              width="16"
              height="28"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 26L14 14L2 2"
                stroke="#D1A068"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={styles.cards}>
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetweenSlides: 30,
                pagination: false,
                slidesPerGroup: 1,
              },

              768: {
                slidesPerView: 1,
                spaceBetweenSlides: 30,
                slidesPerGroup: 1,
              },

              1200: {
                slidesPerView: 3,
                spaceBetweenSlides: 40,
                slidesPerGroup: 1,
                navigation: {
                  nextEl: ".rightArrow", // arrows on the side of the slides
                  prevEl: ".leftArrow", // arrows on the side of the slides
                },
              },
            }}
            slidesPerView={3}
            spaceBetween={30}
            keyboard={true}
            className="mySwiper"
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {data.testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <img
                      className={styles.cardImg}
                      src={item.photo[0].url}
                      alt=""
                    />
                    <div className={styles.nameInner}>
                      <h5>{item.name}</h5>
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <div className={styles.cardText}>{item.desc}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
