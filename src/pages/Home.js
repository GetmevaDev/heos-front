import React, { useState, useEffect } from "react";

import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import BlockAdress from "../components/BlockAdress";
import AboutUs from "../components/AboutUs";
import MeetFounders from "../components/MeetFounders";
import Testimonials from "../components/Testimonials";
import Info from "../components/Information";
import Footer from "../components/Footer";
import Instagramm from "../components/Instagram";
import Navbar from "../components/Menu/Navbar";

const Home = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    top: 300px;
    border-color: red;
  `;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading)
    return (
      <p>
        {loading ? (
          <ClipLoader loading={loading} css={override} size={120} />
        ) : (
          ""
        )}
      </p>
    );
  return (
    <div>
      <Navbar />
      <BlockAdress />
      <AboutUs />
      <MeetFounders />
      <Instagramm />
      <Testimonials />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
