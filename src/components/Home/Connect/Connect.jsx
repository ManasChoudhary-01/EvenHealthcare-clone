import React from "react";
import styles from "./connect.module.scss";

import whatsappIcon from "../../../assets/Homepage/Connect/whatsapp.svg";
import callIcon from "../../../assets/Homepage/Connect/call.svg";

export default function Connect() {
  return (
    <div className={styles.connect}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>Let's connect!</h2>
        </div>
        <div className={styles.right}>
          <div className={styles.infoContainer}>
            <img className={styles.icon} src={whatsappIcon}></img>
            <div className={styles.info}>
              <h3>WhatsApp us at</h3>
              <a href="https://wa.me/+918867900461" target="_blank">
                <p>+91 - 88679 00461</p>
                <div className={styles.hilight} style={{background: 'linear-gradient(0deg, #fbe277, 45%, transparent 45%)'}}></div>
              </a>
            </div>
          </div>
          <div className={styles.orContainer}>
            <span>or</span>
          </div>
          <div className={styles.infoContainer}>
            <img className={styles.icon} src={callIcon}></img>
            <div className={styles.info}>
              <h3>Call us at</h3>
              <a href="tel:+918047495555" target="_blank">
                <p>080 4749 5555</p>
                <div className={styles.hilight} style={{background: 'linear-gradient(0deg, #febacd, 45%, transparent 45%)'}}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
