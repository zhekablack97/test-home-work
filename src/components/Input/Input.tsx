import { InputHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  prefixStyle?: "normal" | "search";
}

export const Input: React.FC<IInput> = ({
  value,
  className,
  prefixStyle = "normal",
  ...restProps
}) => {
  return (
    <div className={cx(styles[`wrapper-${prefixStyle}`], styles.wrapper)}>
      <input
        type="text"
        className={cx(className, styles.input, styles[`input-${prefixStyle}`])}
        {...restProps}
      />
    </div>
  );
};
