import React from "react";
import styles from "./home.module.scss";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Plans from "./Plans/Plans";
import Features from "./Features/Features";
import Network from "./Network/Network";
import Experience from "./Experience/Experience";
import FAQ from "./FAQ/FAQ";
import Connect from "./Connect/Connect";
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
      <Network />
      <Experience />
      <FAQ />
      <Connect />
      <Footer />
    </div>
  );
}
