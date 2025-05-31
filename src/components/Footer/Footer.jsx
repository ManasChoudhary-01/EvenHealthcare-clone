import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.mainWrapper}>
                <div className={styles.firstColumn}>
                    <div className={styles.top}>
                        <h2>Inside Even</h2>
                        <a href="#" target="_blank">FAQ</a>
                        <a href="#" target="_blank">Careers</a>
                        <a href="#" target="_blank">Blog</a>
                    </div>
                    <div className={styles.bottom}>
                    </div>
                </div>
                <div className={styles.firstColumn}>
                    <div className={styles.top}>
                        <h2>Terms & Conditions</h2>
                        <a href="#" target="_blank">Terms of Use</a>
                        <a href="#" target="_blank">Membership Terms</a>
                        <a href="#" target="_blank">Privacy Policy</a>
                        <a href="#" target="_blank">Cancellation & Refund policy</a>
                    </div>
                </div>
                <div className={styles.thirdColumn}>
                    <div className={styles.top}>
                        <h2>Contact us</h2>
                        <a href="tel:+918047495555" target="_blank">080 4749 5555</a>
                        <a href="https://wa.me/+918867900461" target="_blank">WhatsApp</a>
                        <a href="mailto:hello@even.in" target="_blank">hello@even.in</a>
                    </div>
                    <div className={styles.middle}>
                        <h2>Corporate Office Addresses:</h2>
                        <h4>Bangalore:</h4>
                        <p>Even Healthcare Private Limited, 1335,</p>
                        <p>11th Cross Rd, Stage 3, Indiranagar, Bengaluru,</p>
                        <p>Karnataka</p>
                        <p>560038 - India</p>
                        <h4>Abu Dhabi:</h4>
                        <p>Even Development & Innovation in Computer</p>
                        <p>Systems & Programs, L.L.C.</p>
                        <p>Etihad Airways Centre, Al Muneera,</p>
                        <p>1st, 4th & 7th Floors, Abu Dhabi, U.A.E.</p>
                        <p>Telephone : <b>028760307</b></p>
                    </div>
                </div>
                <div className={styles.fourthColumn}>
                    <div className={styles.middle}>
                        <h2>Registered Office Address:</h2>
                        <p>C/o J. S. Uberoi and Company, Plot No-2,</p>
                        <p>Sat Pratap, Bezonbagh, Kamptee Road,</p>
                        <p> Nagpur,</p>
                        <p>Maharashtra</p>
                        <p>440004 - India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}