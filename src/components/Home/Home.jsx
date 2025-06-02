import React from "react";
import styles from "./home.module.scss";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Plans from "./Plans/Plans";
import Features from "./Features/Features";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <section className={styles.navbar}>
        <Navbar color="#DDEEFF" />
      </section>
      <Landing />
      <Plans />
      <Features />
      <Footer />
    </div>
  );
}
