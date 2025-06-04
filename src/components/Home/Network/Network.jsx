import styles from './network.module.scss';
import NetworkCard from './NetworkCard/NetworkCard';

export default function Network() {
    return(
        <div className={styles.network}>
            <div className={styles.wrapper}>
                <h2>Our network hospitals</h2>
                <div className={styles.networkcardContainer}>
                    <NetworkCard
                        color="#DADBF1"
                        title="IPD network"
                        headline="7500+ hospitals across India"
                        desc="Cashless hospitalisation across an ever growing hospital network"
                    />
                    <NetworkCard
                        color="#FBE277"
                        title="OPD network"
                        headline="at any facility across India"
                        desc="Get prescribed tests & consultations at any facility across India including"
                    />
                </div>
            </div>
        </div>
    )
}