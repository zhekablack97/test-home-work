import { Card } from "../Card";
import styles from "./Aside.module.scss";

export const Aside: React.FC = () => {
  return (
    <Card asNode="aside" classNameWrapper={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <a href="#" title="Change amount" className={styles.amount}>
              Change amount
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Change payment method"
              className={styles.payment}
            >
              Change payment method
            </a>
          </li>
          <li>
            <a href="#" title="Change date" className={styles.date}>
              Change date
            </a>
          </li>
          <li>
            <button title="Cancel recurring" className={styles.cancel}>
              Cancel recurring
            </button>
          </li>
        </ul>
      </nav>
    </Card>
  );
};
