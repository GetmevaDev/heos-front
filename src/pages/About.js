import React, { useState, useEffect } from "react";

import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

import Navbar from "../components/Menu/Navbar";

import Block from "../components/Block";
import Team from "../components/Team";
import Instagramm from "../components/Instagram";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Info from "../components/Information";

const About = () => {
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

      <Block title="Meet The Team" />

      <Team />

      <Instagramm />

      <Testimonials />

      <Info />

      <Footer />
    </div>
  );
};

export default About;
