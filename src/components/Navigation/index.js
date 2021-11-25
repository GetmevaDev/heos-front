import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useQuery, gql } from '@apollo/client';

import './styles.css';

import logo from '../../images/logo.png';

const REVIEWS = gql`
  query menu {
    navigation {
      logo {
        url
      }
      header {
        item
        href
        subItem {
          subitem
          href
          cName
        }
      }
    }
  }
`;

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const { loading, error, data } = useQuery(REVIEWS);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ['main-menu menu-right menuq1'];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ['sub__menus'];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  if (loading) return <p></p>;
  if (error) return <p>error</p>;

  return (
    <div className="container">
      <header className="header__middle">
        {/* Add Logo  */}
        <NavLink exact activeClassName="is-active" to="/">
          <img className="header-mobile-nav-logo" src={data.navigation.logo[0].url} alt="logo" />
        </NavLink>

        <nav className="main-nav">
          {/* Responsive Menu Button */}
          {isResponsiveclose === true ? (
            <>
              <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                <AiOutlineClose />
              </span>
            </>
          ) : (
            <>
              <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6065 4.39439C22.7734 1.56121 19.0066 0.000976562 14.9999 0.000976562C10.9932 0.000976562 7.22653 1.56121 4.39341 4.39439C1.56029 7.22745 0 10.9943 0 15.0009C0 19.0075 1.56029 22.7744 4.39341 25.6075C7.22653 28.4406 10.9934 30.0009 15 30.0009C19.0067 30.0009 22.7735 28.4406 25.6066 25.6075C28.4397 22.7744 30 19.0075 30 15.0009C30 10.9943 28.4397 7.22745 25.6065 4.39439ZM7.95168 9.12746H22.0483C22.5473 9.12746 22.9519 9.53205 22.9519 10.031C22.9519 10.5301 22.5473 10.9347 22.0483 10.9347H7.95168C7.45264 10.9347 7.04811 10.5301 7.04811 10.031C7.04805 9.53205 7.45264 9.12746 7.95168 9.12746ZM22.0483 20.8743H7.95168C7.45264 20.8743 7.04811 20.4697 7.04811 19.9707C7.04811 19.4717 7.4527 19.0672 7.95168 19.0672H22.0483C22.5473 19.0672 22.9519 19.4718 22.9519 19.9707C22.9519 20.4697 22.5473 20.8743 22.0483 20.8743ZM23.2531 15.9045H6.74688C6.24784 15.9045 5.84331 15.4999 5.84331 15.0009C5.84331 14.5018 6.2479 14.0973 6.74688 14.0973H23.2531C23.7521 14.0973 24.1566 14.5019 24.1566 15.0009C24.1566 15.4999 23.7521 15.9045 23.2531 15.9045Z"
                    fill="white"
                  />
                </svg>
              </span>
            </>
          )}

          <ul className={boxClass.join(' ')}>
            <img className="logo-nav" src={logo} alt="" />
            {data.navigation?.header.map(({ item, href }) => (
              <li className="menu-item marginTop">
                <NavLink exact activeClassName="is-active " onClick={toggleClass} to={href}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbarmenu;

{
}
