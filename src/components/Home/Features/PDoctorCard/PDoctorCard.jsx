import React from "react";
import styles from "./pdoctor.module.scss";

export default function PDoctorCard({img, title, content}) {
    return(
        <div className={styles.pdocCard}>
            <img className={styles.imgContainer} src={img}></img>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
        </div>
    )
}