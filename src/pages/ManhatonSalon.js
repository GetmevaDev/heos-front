import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import Navbar from "../components/Menu/Navbar";

import Block from "../components/Block";

import Manhattan from "../images/mask.jpg";
import Map from "../components/AddressMap";
import Footer from "../components/Footer";
import MenuManhaton from "../components/HairManuManhaton";
import MapManh from "../components/AddressMap/manh";

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
  console.log(data);

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
