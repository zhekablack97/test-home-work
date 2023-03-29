import { Card } from "../Card";
import styles from "./Aside.module.scss";

export const Aside: React.FC = () => {
  return (
    <Card asNode="aside" classNameWrapper={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <a href="#"> Change amount</a>
          </li>
          <li>
            <a href="#">Change payment method</a>
          </li>
          <li>
            <a href="#">Change date</a>
          </li>
          <li>
            <button>Cancel recurring</button>
          </li>
        </ul>
      </nav>
    </Card>
  );
};
