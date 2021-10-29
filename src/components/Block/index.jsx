import React from "react";
import styles from "./style.module.css";
import logo from "../../images/logo-center.png";

const Block = ({ title, img }) => {
  return (
    <div className={styles.block} style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <div className={styles.blockInner}>
          <h1>{title}</h1>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Block;
