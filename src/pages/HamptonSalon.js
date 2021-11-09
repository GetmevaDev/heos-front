import React, { useState, useEffect } from "react";

import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import Navbar from "../components/Menu/Navbar";

import Block from "../components/Block";

import Manhattan from "../images/mask.jpg";
import Map from "../components/AddressMap";
import Footer from "../components/Footer";
import MenuHampton from "../components/HairMenuHampton";

const HamptonSalon = () => {
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
      <Block title="Hampton Salon" img={Manhattan} />
      <Map />
      <MenuHampton />
      <Footer />
    </div>
  );
};

export default HamptonSalon;
