import cx from "classnames";
import styles from "./Radio.module.scss";
import { InputHTMLAttributes } from "react";

interface IRadio extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Radio: React.FC<IRadio> = ({ className, ...restProps }) => {
  return (
    <div className={cx(className, styles.wrapper)}>
      <input type="radio" className={styles.input} {...restProps} />
      <span className={styles.checkbox} />
    </div>
  );
};
