import React from "react";
import styles from "./reviews.module.scss";
import ReviewCard from "./ReviewCard/ReviewCard";

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <div className={styles.wrapper}>
        <h2>
          Real reviews from real members
          <svg width="45" height="58" viewBox="0 0 45 58" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.9551 11.6763C22.6209 23.8384 26.1354 23.8384 44.6869 23.8384C21.7995 23.8384 21.7995 30.1077 21.7995 54.7374C21.7995 30.0182 21.7995 23.8384 0 23.8384C18.2814 23.8384 21.6676 23.8384 21.9551 11.6763ZM21.9551 11.6763C21.7995 8.8337 21.7995 5.32669 21.7995 1L21.8093 1.35301C21.9257 5.51794 22.0205 8.91141 21.9551 11.6763ZM32.8081 57.0005C34.3701 57.0005 35.6364 55.1011 35.6364 52.758C35.6364 50.415 34.3701 48.5156 32.8081 48.5156C31.2461 48.5156 29.9798 50.415 29.9798 52.758C29.9798 55.1011 31.2461 57.0005 32.8081 57.0005Z"
              fill="#FBE277"
            ></path>
            <path
              d="M21.7995 1L22.0494 0.993022L21.5495 1H21.7995ZM21.8093 1.35301L21.5594 1.35999V1.35999L21.8093 1.35301ZM44.6869 23.5884C40.0459 23.5884 36.3572 23.5883 33.4184 23.3989C30.4765 23.2093 28.3156 22.8312 26.719 22.0913C25.1372 21.3583 24.0995 20.2658 23.4098 18.6113C22.714 16.9423 22.3709 14.6976 22.2047 11.6626L21.7055 11.69C21.8722 14.736 22.2181 17.0521 22.9483 18.8037C23.6845 20.5698 24.8098 21.7577 26.5088 22.545C28.1929 23.3254 30.4307 23.7074 33.3862 23.8978C36.3448 24.0885 40.0521 24.0884 44.6869 24.0884V23.5884ZM22.0495 54.7374C22.0495 48.5759 22.0497 43.5786 22.4061 39.5408C22.7627 35.5011 23.4738 32.4556 24.8733 30.1829C27.6541 25.6669 33.2323 24.0884 44.6869 24.0884V23.5884C33.2541 23.5884 27.3885 25.1446 24.4475 29.9207C22.9861 32.294 22.2667 35.4338 21.9081 39.4968C21.5492 43.5615 21.5495 48.584 21.5495 54.7374H22.0495ZM0 24.0884C10.9083 24.0884 16.2126 25.6436 18.859 30.1449C20.1925 32.413 20.87 35.4571 21.2097 39.5019C21.5493 43.5446 21.5495 48.5537 21.5495 54.7374H22.0495C22.0495 48.5615 22.0497 43.5284 21.708 39.4601C21.3665 35.3939 20.6815 32.2583 19.29 29.8915C16.4866 25.123 10.8912 23.5884 0 23.5884V24.0884ZM21.7052 11.6704C21.6334 14.7061 21.368 16.9508 20.7401 18.6195C20.1181 20.2727 19.1398 21.3619 17.6171 22.0927C16.0783 22.8312 13.9722 23.2093 11.0861 23.3989C8.20342 23.5883 4.57353 23.5884 0 23.5884V24.0884C4.56715 24.0884 8.21605 24.0885 11.1189 23.8978C14.0183 23.7073 16.2045 23.3253 17.8334 22.5435C19.4783 21.7541 20.5431 20.5629 21.2081 18.7955C21.8673 17.0436 22.133 14.7276 22.205 11.6822L21.7052 11.6704ZM21.5495 1C21.5495 5.32415 21.5494 8.83899 21.7055 11.69L22.2047 11.6626C22.0496 8.8284 22.0495 5.32923 22.0495 1H21.5495ZM22.0592 1.34604L22.0494 0.993022L21.5496 1.00698L21.5594 1.35999L22.0592 1.34604ZM22.205 11.6822C22.2706 8.90942 22.1755 5.5086 22.0592 1.34603L21.5594 1.35999C21.6758 5.52729 21.7703 8.91339 21.7052 11.6704L22.205 11.6822ZM35.3864 52.758C35.3864 53.8871 35.0809 54.8979 34.6 55.6192C34.118 56.3423 33.4795 56.7505 32.8081 56.7505V57.2505C33.6987 57.2505 34.4744 56.709 35.016 55.8966C35.5588 55.0824 35.8864 53.972 35.8864 52.758H35.3864ZM32.8081 48.7656C33.4795 48.7656 34.118 49.1738 34.6 49.8969C35.0809 50.6182 35.3864 51.629 35.3864 52.758H35.8864C35.8864 51.5441 35.5588 50.4337 35.016 49.6195C34.4744 48.8071 33.6987 48.2656 32.8081 48.2656V48.7656ZM30.2298 52.758C30.2298 51.629 30.5354 50.6182 31.0162 49.8969C31.4983 49.1738 32.1367 48.7656 32.8081 48.7656V48.2656C31.9175 48.2656 31.1418 48.8071 30.6002 49.6195C30.0574 50.4337 29.7298 51.5441 29.7298 52.758H30.2298ZM32.8081 56.7505C32.1367 56.7505 31.4983 56.3423 31.0162 55.6192C30.5354 54.8979 30.2298 53.8871 30.2298 52.758H29.7298C29.7298 53.972 30.0574 55.0824 30.6002 55.8966C31.1418 56.709 31.9175 57.2505 32.8081 57.2505V56.7505Z"
              fill="#363434"
            ></path>
          </svg>
        </h2>
        <div className={styles.reviewsContainer}>
          <ReviewCard
            stars={5}
            date="2 months ago"
            review="From the moment I started working with Lavanya from Even, my fitness journey has been a remarkable experience. Her expertise and careful guidance have allowed me to regain my strength and get back into shape without any injuries or setbacks. Her personalised approach to my needs and goals has been exceptional, ensuring every exercise is tailored to my abilities. Her positive energy and unwavering support have motivated me to push beyond my limits, and I couldn't be happier with the results. Thank you, Lavanya for helping me out!"
            name="Rajat Sarin"
          />
          <ReviewCard
            stars={1}
            date="3 weeks ago"
            review="My first experience with Even care. Had a fall, called Even's emergency team. In 5 minutes, connected with a Physician. He prescribed an X ray. The team enabled scanner for payments. Got the X ray done and the Even team enabled scanner for an offline OPD visit with a Orthopaedic. The entire process was seamless. The even care expert remained in conversation on chat throughout the entire process. Have never experienced insurance like this before. Truly amazing. Thanks Even."
            name="Manas Choudhary"
          />
          <ReviewCard
            stars={3}
            date="2 months ago"
            review="Even is different from others and amazingly awesome. Recently I have used the service for my family and was fully satisfied Shout out to 24/7 customer service, home sample Collection and cashless visit at partner hospital. Along with that they have in house doctors. Also they provide flawless service end to end thank you even for making the process easy .😊"
            name="XYZ"
          />
          <ReviewCard
            stars={5}
            date="2 months ago"
            review="I bought Even 3 months back, but last week was the first time I used it. I booked a consultation for constant back pain. The process was as easy as they advertise. Everything was done through the app and I didn’t have to run around much. They were happy to arrange my tests at work, which was very unusually convenient for me since I live Bangalore. Right from my tests to consultation, everything fortunately was good. For the first time, experience was smooth. I’ll update the review after my follow ups. So far, really good!"
            name="XYZ"
          />
          <ReviewCard
            stars={5}
            date="2 months ago"
            review="The support team is really super caring and super supportive and will be ready to with the solutions. They will try to resolve the issue and provide proper support and care. They will be help us to be calm and cool even when we are stressed because of the condition. I will recommend Even Health to everyone out there."
            name="XYZ"
          />
          <ReviewCard
            stars={5}
            date="a months ago"
            review="I enrolled for Even 3 months back. My experience with Even has been really smooth and comfortable until now. The sign-up process was easy where Subhajit guided me thoroughly. He answered all my queries patiently. Onboarding process was good too, where the team arranged tests to build the health profiles. Even after onboarding, the consultations and tests are arranged quickly and the team is there 24x7 for assistance. I'm satisfied with the service so far."
            name="XYZ"
          />
        </div>
        <button className={styles.seeAll}>
          Get Started
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
