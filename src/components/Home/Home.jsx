import React from "react";
import styles from "./home.module.scss";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Plans from "./Plans/Plans";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <section className={styles.navbar}>
        <Navbar color="#DDEEFF" />
      </section>
      <Landing />
      <Plans />
      <Footer />
    </div>
  );
}
