import { InputHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<IInput> = ({ value, className, ...restProps }) => {
  return (
    <input type="text" className={cx(className, styles.input)} {...restProps} />
  );
};
