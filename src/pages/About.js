import React from "react";

import { Helmet } from "react-helmet";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import { useQuery, gql } from "@apollo/client";

import Navbar from "../components/Menu/Navbar";
import Block from "../components/Block";
import Team from "../components/Team";
// import Instagramm from "../components/Instagram";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Info from "../components/Information";

const REVIEWS = gql`
  query seo {
    aboutseo {
      aboutSeo {
        seo
        title
        bg {
          url
        }
      }
    }
  }
`;

const About = () => {
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
        <title>{data.aboutseo.aboutSeo.seo}</title>
      </Helmet>
      <Navbar />

      <Block
        title={data.aboutseo.aboutSeo.title}
        img={data.aboutseo.aboutSeo.bg[0].url}
      />

      <Team />

      {/* <Instagramm />   */}

      <Testimonials />

      <Info />

      <Footer />
    </div>
  );
};

export default About;
