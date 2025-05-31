import React from "react";
import styles from "./landing.module.scss";

import BenefitCard from "./BenefitCard/BenefitCard";

import one from "../../../assets/Homepage/Landing/one.png";
import two from "../../../assets/Homepage/Landing/two.png";

export default function Landing() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.landingWrapper}>
        <div className={styles.textContainer}>
          <h2>Healthcare meets</h2>
          <h2>insurance.</h2>
          <p>Plans that keep you healthy and cover your hospital bills.</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Check Prices
            <span>
              <svg
                class="Button-module--arrow--37a37"
                width="14"
                height="13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12 12.5 1.5M3 1h9a1 1 0 0 1 1 1v9"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className={styles.benefitContainer}>
          <BenefitCard
            icon={one}
            title="Optional group insurance"
            description="Cashless cover through our insurance partners. 7500+ network across India. 80D benefits."
          />
          <BenefitCard
            icon={two}
            title="Emergency care"
            description="24x7 doctors, emergency visits to the hospital, ambulance and more."
          />
          <BenefitCard
            icon={two}
            title="24/7 Support"
            description="We're here to help you anytime, day or night."
          />
          <BenefitCard
            icon={one}
            title="Optional group insurance"
            description="Cashless cover through our insurance partners. 7500+ network across India. 80D benefits."
          />
        </div>
      </div>
    </div>
  );
}