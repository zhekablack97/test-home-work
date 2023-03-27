import { HTMLAttributes, OptionHTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import styles from "./Select.module.scss";

interface ISelect extends HTMLAttributes<HTMLSelectElement> {
  options?: OptionHTMLAttributes<HTMLOptionElement>[];
  selectStyles?: "border" | "onlyText";
}

export const Select: React.FC<ISelect> = ({
  className,
  options = [],
  selectStyles = "border",
  ...restProps
}) => {
  return (
    <div className={styles.wrapper}>
      <select
        className={cx(
          className,
          styles.select,
          styles[`select-${selectStyles}`]
        )}
        {...restProps}
      >
        {options.map((option) => (
          <option {...option} />
        ))}
      </select>
    </div>
  );
};
