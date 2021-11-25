import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineClose } from 'react-icons/ai';
import { useQuery, gql } from '@apollo/client';

import './styles.css';

import logo from '../../images/logo.png';
import burger from '../../images/Group.svg';

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
              <span className="menubar__button" onClick={toggleClass}>
                <AiOutlineClose />
              </span>
            </>
          ) : (
            <>
              <span className="menubar__button" onClick={toggleClass}>
                <img src={burger} alt="" />
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
