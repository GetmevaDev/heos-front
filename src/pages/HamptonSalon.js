import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

import Navbar from "../components/Menu/Navbar";
import Block from "../components/Block";
import Map from "../components/AddressMap";
import Footer from "../components/Footer";
import MenuHampton from "../components/HairMenuHampton";

const REVIEWS = gql`
  query seo {
    hamptonSalon {
      ham {
        title
        bg {
          url
        }
        seo
      }
    }
  }
`;

const HamptonSalon = () => {
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
        <title>{data.hamptonSalon.ham.seo}</title>
      </Helmet>
      <Navbar />
      <Block
        title={data.hamptonSalon.ham.title}
        img={data.hamptonSalon.ham.bg[0].url}
      />
      <Map />
      <MenuHampton />
      <Footer />
    </div>
  );
};

export default HamptonSalon;
