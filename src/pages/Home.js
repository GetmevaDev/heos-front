import React, { lazy, memo } from 'react';

import { useQuery, gql } from '@apollo/client';
import ClipLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import Nav from '../components/Navigation';

const BlockAdress = lazy(() => import('../components/BlockAdress'));
const AboutUs = lazy(() => import('../components/AboutUs'));
const MeetFounders = lazy(() => import('../components/MeetFounders'));
const Testimonials = lazy(() => import('../components/Testimonials/'));

const Info = lazy(() => import('../components/Information'));
const Footer = lazy(() => import('../components/Footer'));
// const Navbar = lazy(() => import('../components/Menu/Navbar'));

const REVIEWS = gql`
  query seo {
    homeseo {
      seoHome {
        Home
        desc
        importantTitle
        url
        image
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.homeseo.seoHome.Home}</title>
        <meta name="description" content={data.homeseo.seoHome.desc} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={data.homeseo.seoHome.importantTitle} />
        <meta property="og:url" content={data.homeseo.seoHome.url} />
        <meta property="og:image" content={data.homeseo.seoHome.image} />
      </Helmet>
      <Nav />
      {/* <Navbar /> */}
      <BlockAdress />
      <AboutUs />
      <MeetFounders />
      {/* <Instagramm /> */}
      <Testimonials />
      <Info />
      <Footer />
    </>
  );
};

export default memo(Home);
