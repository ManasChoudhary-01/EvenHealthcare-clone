import React from 'react'
import styles from './plans.module.scss'

import ET from "../../../assets/Homepage/Plans/ET.png";
import etHealthWorld from "../../../assets/Homepage/Plans/etHealthWorld.png";
import mint from "../../../assets/Homepage/Plans/mint.png";
import moneycontrol from "../../../assets/Homepage/Plans/moneycontrol.png";
import TechCrunchLogo from "../../../assets/Homepage/Plans/TechCrunchLogo.png";
import timesOfIndia from "../../../assets/Homepage/Plans/timesOfIndia.png";

export default function Plans() {
    return (
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
            <div className={styles.bottomContainer}>
                <div className={styles.background}>
                    <svg class="PolicyDoc-module--uploadBg--939c9" width="88" height="109" viewBox="0 0 88 109" fill="none"><g opacity="0.15"><rect x="2" y="2" width="68" height="92" rx="10" stroke="white" stroke-width="4"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 21C16.1193 21 15 22.1193 15 23.5C15 24.8807 16.1193 26 17.5 26H42.5C43.8807 26 45 24.8807 45 23.5C45 22.1193 43.8807 21 42.5 21H17.5ZM17.5 60C16.1193 60 15 61.1193 15 62.5C15 63.8807 16.1193 65 17.5 65H29.5C30.8807 65 32 63.8807 32 62.5C32 61.1193 30.8807 60 29.5 60H17.5ZM15 36.5C15 35.1193 16.1193 34 17.5 34H52.5C53.8807 34 55 35.1193 55 36.5C55 37.8807 53.8807 39 52.5 39H17.5C16.1193 39 15 37.8807 15 36.5ZM17.5 47C16.1193 47 15 48.1193 15 49.5C15 50.8807 16.1193 52 17.5 52H52.5C53.8807 52 55 50.8807 55 49.5C55 48.1193 53.8807 47 52.5 47H17.5Z" fill="white"></path><circle cx="63" cy="84" r="23.5" fill="white" stroke="#111547" stroke-width="3"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M62.9999 75C61.8954 75 60.9999 75.8954 60.9999 77V86.4144L60.2426 85.6571C59.4615 84.876 58.1952 84.876 57.4142 85.6571C56.6331 86.4381 56.6331 87.7045 57.4142 88.4855L61.6568 92.7281C62.4378 93.5092 63.7042 93.5092 64.4852 92.7281L68.7279 88.4855C69.5089 87.7045 69.5089 86.4381 68.7279 85.6571C67.9468 84.876 66.6805 84.876 65.8994 85.6571L64.9999 86.5566V77C64.9999 75.8954 64.1045 75 62.9999 75Z" fill="#111547"></path></g></svg>
                </div>
                <div className={styles.left}>
                    <h2>What's covered and what's not</h2>
                    <h3>Even terms: plain and simple</h3>
                </div>
                <div className={styles.right}>
                    <a href='https://even.in/files/plans-overview/Even-Plans-Overview.pdf' target='_blank'><button>Download Document <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9.5" stroke="white"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99989 6C9.72375 6 9.49989 6.22386 9.49989 6.5V12.1414L7.54057 10.1821C7.3453 9.98683 7.02872 9.98683 6.83346 10.1821C6.6382 10.3774 6.6382 10.6939 6.83346 10.8892L9.66189 13.7176C9.85715 13.9129 10.1737 13.9129 10.369 13.7176L10.3706 13.716L13.1974 10.8892C13.3927 10.6939 13.3927 10.3773 13.1974 10.1821C13.0022 9.98682 12.6856 9.98682 12.4903 10.1821L10.4999 12.1725V6.5C10.4999 6.22386 10.276 6 9.99989 6Z" fill="white"></path></svg></button></a>
                </div>
            </div>
        </div>
    )
}