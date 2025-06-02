import React from "react";
import styles from "./features.module.scss";
import CareCard from "./CareCard/CareCard";
import PDoctorCard from "./PDoctorCard/PDoctorCard";

import video from "/exp_video.mp4";
import background from "../../../assets/Homepage/Features/doctors_back.png";
import p_doctor from "../../../assets/Homepage/Features/personal-doc.png";

export default function Features() {
  return (
    <>
      <div className={styles.firstContainer}>
        <div className={styles.wrapper}>
          <h1>Complete healthcare on your fingertips</h1>
          <div className={styles.cardsContainer}>
            <CareCard
              video={video}
              title="Managed care"
              desc="Reduce your chances of hospitalisation"
              content="Evidence-based care for chronic conditions like Diabetes, PCOS, High Cholesterol and more."
            />
            <CareCard
              video={video}
              title="Managed care"
              desc="Reduce your chances of hospitalisation"
              content="Evidence-based care for chronic conditions like Diabetes, PCOS, High Cholesterol and more."
            />
            <CareCard
              video={video}
              title="Managed care"
              desc="Reduce your chances of hospitalisation"
              content="Evidence-based care for chronic conditions like Diabetes, PCOS, High Cholesterol and more."
            />
          </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <h2>Personalised care designed for your needs</h2>
        <p>This will be included in any plan you choose</p>
        <div className={styles.wrapper}>
          <div className={styles.backContainer}>
            <img src={background}></img>
          </div>
          <div className={styles.lines}>
            <div className={styles.circle}></div>
            <div className={styles.h_line}></div>
            <div className={styles.v_line}></div>
          </div>
          <div className={styles.doctorsConatiner}>
            <div className={styles.row}>
              <PDoctorCard
                img={p_doctor}
                title="Your Even doctor"
                content="Your personal doctor to guide you throughout your healthcare journey and design individualised care based on your medical history, lifestyle risks and goals."
              />
              <PDoctorCard
                img={p_doctor}
                title="24/7 care manager"
                content="Dedicated support to help you with anything that you need for your care."
              />
            </div>
            <div className={styles.row}>
              <PDoctorCard
                img={p_doctor}
                title="Your Even doctor"
                content="Your personal doctor to guide you throughout your healthcare journey and design individualised care based on your medical history, lifestyle risks and goals."
              />
              <PDoctorCard
                img={p_doctor}
                title="24/7 care manager"
                content="Dedicated support to help you with anything that you need for your care."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
