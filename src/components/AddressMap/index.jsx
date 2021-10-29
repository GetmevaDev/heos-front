import React from "react";
import styles from "./style.module.css";

const Map = () => {
  return (
    <div className="container">
      <div className={styles.map}>
        <div className={styles.left}>
          <h4 className={styles.infoTitle}>Address:</h4>
          <p>29 East 61st 4th Floor New York, NY 10065</p>
          <h4 className={styles.infoTitle}>Salon Hours</h4>
          <p>
            Monday-Wednesday: <b> 9am – 7pm </b>
          </p>
          <p>
            Thursday: <b> 10am – 8pm</b>
          </p>
          <p>
            Friday: <b> 9am – 7pm </b>
          </p>
          <p>
            Saturday: <b> 9am – 6pm </b>
          </p>
          <h4 className={styles.infoTitle}>Phone:</h4>
          <b>212-837-1014</b>
        </div>
        <div className={styles.right}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.890186666158!2d-73.97238818434334!3d40.76443994234205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258efc79f47a3%3A0x7b5e0f173973140e!2zMjkgRSA2MXN0IFN0LCBOZXcgWW9yaywgTlkgMTAwNjUsINCh0KjQkA!5e0!3m2!1sru!2skz!4v1635152008721!5m2!1sru!2skz"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
