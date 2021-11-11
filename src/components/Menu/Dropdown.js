import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown({ data }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {data.navigation.header[3].subItem.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.href}
                onClick={() => setClick(false)}
              >
                {item.subitem}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
