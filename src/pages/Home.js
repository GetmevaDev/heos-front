import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import { Helmet } from "react-helmet";

import BlockAdress from "../components/BlockAdress";
import AboutUs from "../components/AboutUs";
import MeetFounders from "../components/MeetFounders";
import Testimonials from "../components/Testimonials";
import Info from "../components/Information";
import Footer from "../components/Footer";
import Instagramm from "../components/Instagram";
import Navbar from "../components/Menu/Navbar";

const REVIEWS = gql`
  query seo {
    homeseo {
      seoHome {
        Home
      }
    }
  }
`;

const Home = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    top: 300px;
    border-color: red;
  `;
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading)
    return (
      <p>
        <ClipLoader loading={loading} css={override} size={120} />
      </p>
    );
  if (error) return <p>error {JSON.stringify(error)}</p>;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.homeseo.seoHome.Home}</title>
      </Helmet>
      <Navbar />
      <BlockAdress />
      <AboutUs />
      <MeetFounders />
      {/* <Instagramm /> */}
      <Testimonials />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
