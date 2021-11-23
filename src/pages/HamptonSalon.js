import React, { lazy, memo } from 'react';
import LazyLoad from 'react-lazyload';

import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet-async';

import ClipLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/react';

const Navbar = lazy(() => import('../components/Navigation'));

const Block = lazy(() => import('../components/Block'));
const Map = lazy(() => import('../components/AddressMap'));
const Footer = lazy(() => import('../components/Footer'));
const MenuHampton = lazy(() => import('../components/HairMenuHampton'));

const REVIEWS = gql`
  query seo {
    hamptonSalon {
      ham {
        title
        desc
        importantTitle
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

  if (loading)
    return (
      <p>
        <ClipLoader loading={loading} css={override} size={120} />
      </p>
    );
  if (error) return <p>error {JSON.stringify(error)}</p>;

  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>{data.hamptonSalon.ham.seo}</title>
        <meta name="description" content={data.hamptonSalon.ham.desc} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={data.hamptonSalon.ham.importantTitle} />
      </Helmet>
      <Navbar />
      <Block title={data.hamptonSalon.ham.title} img={data.hamptonSalon.ham.bg[0].url} />
      <Map />
      <MenuHampton />
      <Footer />{' '}
    </>
  );
};

export default memo(HamptonSalon);
