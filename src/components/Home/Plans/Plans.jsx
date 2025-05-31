import React from 'react'
import styles from './plans.module.scss'

import ET from "../../../assets/Homepage/Plans/ET.png";
import etHealthWorld from "../../../assets/Homepage/Plans/etHealthWorld.png";
import mint from "../../../assets/Homepage/Plans/mint.png";
import moneycontrol from "../../../assets/Homepage/Plans/moneycontrol.png";
import TechCrunchLogo from "../../../assets/Homepage/Plans/TechCrunchLogo.png";
import timesOfIndia from "../../../assets/Homepage/Plans/timesOfIndia.png";

export default function Plans() {
    return(
        <div className={styles.plans}>
            <div className={styles.topContainer}>
                <h2>Even in the Press</h2>
                <div className={styles.imgContainer}>
                    <a href="#"><img className={styles.img} src={TechCrunchLogo} alt="TechCrunch" /></a>
                    <a href="#"><img className={styles.img} src={ET} alt="ET" /></a>
                    <a href="#"><img className={styles.img} src={mint} alt="Mint" /></a>
                    <a href="#"><img className={styles.img} src={etHealthWorld} alt="ET Health World" /></a>
                    <a href="#"><img className={styles.img} src={moneycontrol} alt="Moneycontrol" /></a>
                    <a href="#"><img className={styles.img} src={timesOfIndia} alt="Times of India" /></a>
                </div>
            </div>
            <div className={styles.middleContainer}></div>
            <div className={styles.bottomContainer}></div>
        </div>
    )
}