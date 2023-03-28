import cx from "classnames";
import styles from "./CheckBox.module.scss";
import { InputHTMLAttributes } from "react";

interface ICheckBox
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const CheckBox: React.FC<ICheckBox> = ({ className, ...restProps }) => {
  return (
    <div className={cx(className, styles.wrapper)}>
      <input type="checkbox" className={styles.input} {...restProps} />
      <span className={styles.checkbox} />
    </div>
  );
};
