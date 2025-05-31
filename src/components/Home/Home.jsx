import React from "react";
import styles from "./home.module.scss";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Plans from "./Plans/Plans";

export default function Home() {
  return (
    <div>
      <section className={styles.navbar}>
        <Navbar color="#DDEEFF" />
      </section>
      <Landing />
      <Plans />
    </div>
  );
}
