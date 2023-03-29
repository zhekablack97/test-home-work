import { Card } from "../Card";
import styles from "./Aside.module.scss";

export const Aside: React.FC = () => {
  return (
    <Card asNode="aside" classNameWrapper={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <a href="#" className={styles.amount}>
              {" "}
              Change amount
            </a>
          </li>
          <li>
            <a href="#" className={styles.payment}>
              Change payment method
            </a>
          </li>
          <li>
            <a href="#" className={styles.date}>
              Change date
            </a>
          </li>
          <li>
            <button className={styles.cancel}>Cancel recurring</button>
          </li>
        </ul>
      </nav>
    </Card>
  );
};
