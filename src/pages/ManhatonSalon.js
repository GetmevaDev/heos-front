import React, { lazy } from "react";

import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

// import Navbar from "../components/Menu/Navbar";
// import Block from "../components/Block";
// import Footer from "../components/Footer";
// import MenuManhaton from "../components/HairManuManhaton";
// import MapManh from "../components/AddressMap/manh";

const Navbar = lazy(() => import("../components/Menu/Navbar"));
const Block = lazy(() => import("../components/Block"));
const MapManh = lazy(() => import("../components/AddressMap/manh"));
const Footer = lazy(() => import("../components/Footer"));
const MenuManhaton = lazy(() => import("../components/HairManuManhaton"));

const REVIEWS = gql`
  query seo {
    manhatonSalon {
      manh {
        title
        bg {
          url
        }
        seo
      }
    }
  }
`;

const ManhatonSalon = () => {
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
        <title>{data.manhatonSalon.manh.seo}</title>
      </Helmet>
      <Navbar />
      <Block
        title={data.manhatonSalon.manh.title}
        img={data.manhatonSalon.manh.bg[0].url}
      />
      <MapManh />
      <MenuManhaton />
      <Footer />
    </div>
  );
};

export default ManhatonSalon;
