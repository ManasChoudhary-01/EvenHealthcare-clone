import React, { useState, useRef } from "react";
import styles from "./accordion.module.scss";

export default function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const rotateIcon = (isOpen ? "rotate(180deg)" : "rotate(0deg)") + " translateY(-5px)";
  return (
    <div className={styles.accordion}>
      <div className={styles.qsContainer} onClick={handleToggle}>
        <h3 className={styles.question}>
          {question}
        </h3>
        <span style={{ transform: rotateIcon }}>
          <svg class="" width="10" height="6" viewBox="0 0 10 5" fill="none">
            <path
              d="M9.33496 0.667236L5.79943 4.20277C5.4089 4.59329 4.77574 4.59329 4.38521 4.20277L0.84968 0.667236"
              stroke="#333333"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <div
        className={styles.ansContainer}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight + "px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <h3 className={styles.answer}>{answer}</h3>
      </div>
    </div>
  );
}
