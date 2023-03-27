import cx from "classnames";
import { Card } from "../Card";
import { Title } from "../Title";
import styles from "./InfoDonation.module.scss";

interface IInfoDonation {}

export const InfoDonation: React.FC<IInfoDonation> = () => {
  return (
    <Card
      className={styles.wrapper}
      footer={
        <ul className={styles.list}>
          <li>
            <span>Status</span>
            <span className={cx(styles.green, styles.check)}>Succeeded</span>
          </li>
          <li>
            <span>Supporter</span>
            <a href="#" title="Charlotte Ann">
              Charlotte Ann
            </a>
          </li>
          <li>
            <span>Campaign</span>
            <a href="#" title="Heart walk">
              Heart walk
            </a>
          </li>
        </ul>
      }
    >
      <>
        <div>
          <Title asNode="h2" className={cx(styles.title)}>
            Donation
          </Title>
          <div>
            <span className={cx(styles[`sum-usd`], styles.green)}>
              $20.60 USD
            </span>
            <span className={styles[`sum-eur`]}>≈ €17.92 EUR</span>
          </div>
        </div>
        <div className={styles["wrapper-button"]}>
          <span>ID</span>
          <button className={styles.copy}>
            <span>TYNY694Y</span>
          </button>
        </div>
      </>
    </Card>
  );
};
