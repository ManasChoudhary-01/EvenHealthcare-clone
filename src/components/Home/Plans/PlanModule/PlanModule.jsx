import React from "react";
import styles from "./planModule.module.scss";

export default function PlanModule({img, desc, plus, essential, care}) {

    const tick = <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#0055FF"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2086 14.1573C9.81825 13.7666 9.18508 13.7664 8.79441 14.1568C8.40375 14.5471 8.40352 15.1803 8.7939 15.571L11.8278 18.6071C11.8766 18.656 11.9292 18.6987 11.9847 18.7353C12.3727 18.9918 12.9002 18.9492 13.2421 18.6077C13.2421 18.6076 13.2422 18.6075 13.2423 18.6074L19.6063 12.2434C19.9968 11.8529 19.9968 11.2198 19.6063 10.8292C19.2158 10.4387 18.5826 10.4387 18.1921 10.8292L12.5355 16.4858L10.2086 14.1573Z" fill="white"></path></svg>
    const dash = <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#EEEEEE"></circle><rect x="8.41211" y="15.521" width="2" height="11.1324" rx="1" transform="rotate(-90 8.41211 15.521)" fill="#BBBBBB"></rect></svg>
    return(
        <div className={styles.planModule}>
            <div className={styles.description}>
                <img src={img} alt="Plan Icon" />
                <p>{desc}</p>
            </div>
            <div className={styles.plus}>{plus === "yes" ? tick : dash }</div>
            <div className={styles.essential}>{essential === "yes" ? tick : dash }</div>
            <div className={styles.care}>{care === "yes" ? tick : dash }</div>
        </div>
    )
}