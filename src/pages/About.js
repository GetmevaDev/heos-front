import React, { lazy, memo } from 'react';
import { Helmet } from 'react-helmet';
import ClipLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/react';
import { useQuery, gql } from '@apollo/client';
import LazyLoad from 'react-lazyload';

const Navbar = lazy(() => import('../components/Menu/Navbar'));
const Block = lazy(() => import('../components/Block'));
const Team = lazy(() => import('../components/Team'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Info = lazy(() => import('../components/Information'));
const Footer = lazy(() => import('../components/Footer'));

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.aboutseo.aboutSeo.seo}</title>
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
