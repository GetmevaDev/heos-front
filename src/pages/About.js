import React, { lazy, memo } from 'react';
import { Helmet } from 'react-helmet';
import ClipLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/react';
import { useQuery, gql } from '@apollo/client';
import LazyLoad from 'react-lazyload';

// import Carousel from '../components/Testimonials/Carousel';

const Navbar = lazy(() => import('../components/Navigation'));

const Block = lazy(() => import('../components/Block'));
const Team = lazy(() => import('../components/Team'));
const Testimonials = lazy(() => import('../components/Testimonials/'));
const Info = lazy(() => import('../components/Information'));
const Footer = lazy(() => import('../components/Footer'));

const REVIEWS = gql`
  query seo {
    aboutseo {
      aboutSeo {
        seo
        title
        desc
        importantTitle
        url
        image
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
    <>
      <Helmet>
        <title>{data.aboutseo.aboutSeo.seo}</title>

        <meta name="description" content={data.aboutseo.aboutSeo.desc} />
        <meta property="og:image" content={data.aboutseo.aboutSeo.image} />
        <meta property="og:url" content={data.aboutseo.aboutSeo.url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={data.aboutseo.aboutSeo.importantTitle} />
      </Helmet>

      <LazyLoad>
        <Navbar />
      </LazyLoad>
      <LazyLoad>
        <Block title={data.aboutseo.aboutSeo.title} img={data.aboutseo.aboutSeo.bg[0].url} />
      </LazyLoad>

      <LazyLoad>
        <Team />
      </LazyLoad>

      <LazyLoad>
        {/* <Carousel /> */}
        <Testimonials />
      </LazyLoad>
      {/* <Instagramm />   */}

      <LazyLoad>
        <Info />
      </LazyLoad>

      <LazyLoad>
        <Footer />
      </LazyLoad>
    </>
  );
};

export default memo(About);
