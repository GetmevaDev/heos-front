import React from 'react';
import styles from './style.module.css';
import InstagramEmbed from 'react-instagram-embed';

import Woman from '../../images/woman.png';

const Instagramm = () => {
  return (
    <div className={styles.instagramm}>
      <div className="container">
        <div className={styles.instInner}>
          <h1 className={styles.title}>Follow on Instagram</h1>
          <div className={styles.img}>
            <InstagramEmbed
              clientAccessToken="<appId>|<clientToken>"
              url="https://instagr.am/p/HeZ7IxgUUc/"
              maxWidth={375}
              hideCaption={false}
              containerTagName="div"
              injectScript
              protocol=""
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>

          <div className={styles.blockImage}>
            <img src={Woman} alt="" />
            <div className={styles.nameInner}>
              <h2 className={styles.name}>Eddie Arthur Salon</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, eius!</p>
            </div>
          </div>

          <button className={styles.button}>Follow on Instagram</button>
        </div>
      </div>
    </div>
  );
};
export default Instagramm;
