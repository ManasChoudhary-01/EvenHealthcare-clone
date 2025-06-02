import React from "react";
import styles from "./carecard.module.scss";

export default function CareCard({video, title, desc, content}) {
    return(
        <div className={styles.card}>
            <div className={styles.video}>
                <video mute loop autoPlay src={video}></video>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{desc}</div>
            <div className={styles.content}>{content}</div>
        </div>
    )
}