import React, { lazy, memo } from "react";
import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const Navbar = lazy(() => import("../components/Navigation"));
const Block = lazy(() => import("../components/Block"));
const MapManh = lazy(() => import("../components/AddressMap/manh"));
const Footer = lazy(() => import("../components/Footer"));
const MenuManhaton = lazy(() => import("../components/HairManuManhaton"));

const REVIEWS = gql`
  query seo {
    manhatonSalon {
      manh {
        title
        desc
        importantTitle
        url
        image
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
    <>
      <Helmet>
        <title>{data.manhatonSalon.manh.seo}</title>
        <meta name="description" content={data.manhatonSalon.manh.desc} />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content={data.manhatonSalon.manh.importantTitle}
        />
        <meta property="og:image" content={data.manhatonSalon.manh.image} />
        <meta property="og:url" content={data.manhatonSalon.manh.url} />
      </Helmet>
      <Navbar />
      <Block
        title={data.manhatonSalon.manh.title}
        img={data.manhatonSalon.manh.bg[0].url}
      />
      <MapManh />
      <MenuManhaton />
      <Footer />
    </>
  );
};

export default memo(ManhatonSalon);
