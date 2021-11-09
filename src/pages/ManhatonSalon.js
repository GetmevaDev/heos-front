import React, { useState, useEffect } from "react";

import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import Navbar from "../components/Menu/Navbar";

import Block from "../components/Block";

import Manhattan from "../images/mask.jpg";
import Map from "../components/AddressMap";
import Footer from "../components/Footer";

const ManhatonSalon = () => {
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
      <Block title="Manhattan Salon" img={Manhattan} />
      <Map />
      <Footer />
    </div>
  );
};

export default ManhatonSalon;
