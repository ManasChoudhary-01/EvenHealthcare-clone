import styles from "./networkcard.module.scss";

export default function NetworkCard({ color, title, headline, desc }) {
  return (
    <div className={styles.networkCard}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span
            className={styles.circle}
            style={{ backgroundColor: color }}
          ></span>
          <h3>{title}</h3>
        </div>
        <div className={styles.headline}>{headline}</div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
