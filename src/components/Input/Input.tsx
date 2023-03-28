import { InputHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  prefixStyle?: "normal" | "search";
}

export const Input: React.FC<IInput> = ({
  className,
  prefixStyle = "normal",
  ...restProps
}) => {
  return (
    <div
      className={cx(
        styles[`wrapper-${prefixStyle}`],
        styles.wrapper,
        className
      )}
    >
      <input
        type="text"
        className={cx(styles.input, styles[`input-${prefixStyle}`])}
        {...restProps}
      />
    </div>
  );
};
