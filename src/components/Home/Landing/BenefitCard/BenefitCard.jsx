import React from "react";
import styles from "./benefitcard.module.scss"

export default function BenefitCard({ icon, title, description }) {
    return(
        <div className={styles.benefitCard}>
            <div className={styles.iconContainer}>
                <img src={icon} alt={`${title} icon`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}