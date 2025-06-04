import React from "react";
import styles from "./faq.module.scss";

import Accordion from "./Accordion/Accordion";

export default function FAQ() {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.wrapper}>
        <h2>FAQ</h2>
        <div className={styles.accordionContainer}>
          <Accordion
            question="What is Even?"
            answer="Even is a healthcare provider that offers 24/7, unlimited consultations with in-house clinical and wellness team to offer episodic care, lifestyle care and managed care to keep members healthy and out of hospitals. Members can access these services online (pan-India) or by visiting Even Clinics in Bengaluru. Members can also add optional OP group insurance (for external consultations and tests/scans) and IP group insurance (DayCare, 24-hour hospitalisation, emergencies) on top of their Even Care plan. These services are offered through Even's insurance partner, Magma Insurance."
          />
          <Accordion
            question="Is Even classified as insurance?"
            answer="Even Healthcare Private Limited is not registered with the IRDAI, however Euston Insurance Advisors Pvt. Ltd., a wholly owned subsidiary of Even Healthcare Pvt. Ltd., is an IRDAI-registered Corporate Agent licensed to sell general (including health) and life insurance policies to prospective clients."
          />
          <Accordion
            question="What is Even?"
            answer="Even is a healthcare provider that offers 24/7, unlimited consultations with in-house clinical and wellness team to offer episodic care, lifestyle care and managed care to keep members healthy and out of hospitals. Members can access these services online (pan-India) or by visiting Even Clinics in Bengaluru. Members can also add optional OP group insurance (for external consultations and tests/scans) and IP group insurance (DayCare, 24-hour hospitalisation, emergencies) on top of their Even Care plan. These services are offered through Even's insurance partner, Magma Insurance."
          />
        </div>
        <button className={styles.seeAll}>
          See all FAQs
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
    </div>
  );
}
