import cx from "classnames";
import { InputHTMLAttributes } from "react";
import styles from "./Range.module.scss";

interface IRange extends InputHTMLAttributes<HTMLInputElement> {}

export const Range: React.FC<IRange> = ({
  value,
  onChange,
  className,
  min = 0,
  max = 100,
}) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <input
        onChange={onChange}
        value={value}
        className={cx(styles.input)}
        min={min}
        max={max}
        type="range"
      />

      <span className={styles["track"]} />
      <span
        className={cx(styles["track-progress"], styles["track"])}
        style={{ width: `${Number(value) / (Number(max) / 100)}%` }}
      />
      <div className={styles["wrapper-handle"]}>
        <span
          className={styles.handle}
          style={{ left: `${Number(value) / (Number(max) / 100)}%` }}
        />
      </div>
    </div>
  );
};
