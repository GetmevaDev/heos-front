import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
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

  console.log(data);
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
                <FiXCircle />
              </span>
            </>
          ) : (
            <>
              <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                <GiHamburgerMenu />
              </span>
            </>
          )}

          <ul className={boxClass.join(' ')}>
            <li className="menu-item marginTop">
              <NavLink exact activeClassName="is-active " onClick={toggleClass} to={`/`}>
                {data.navigation?.header[0].item}
              </NavLink>
            </li>
            <li className="menu-item ">
              <NavLink onClick={toggleClass} activeClassName="is-active" to={`/about`}>
                {data.navigation?.header[1].item}
              </NavLink>
            </li>
            <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
              <Link to="/#">
                {data.navigation?.header[2].item}
                <FiChevronDown />
              </Link>
              <img className="logo-nav" src={logo} alt="" />
              <ul className={boxClassSubMenu.join(' ')}>
                {data.navigation.header[2].subItem.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink onClick={toggleClass} activeClassName="is-active" to={item.href}>
                        {item.subitem}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbarmenu;
