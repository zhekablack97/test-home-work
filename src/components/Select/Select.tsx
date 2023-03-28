import { HTMLAttributes, OptionHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./Select.module.scss";

interface ISelect extends HTMLAttributes<HTMLSelectElement> {
  options?: React.DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >[];
  selectStyles?: "border" | "onlyText";
}

export const Select: React.FC<ISelect> = ({
  className,
  options = [],
  selectStyles = "border",
  ...restProps
}) => {
  return (
    <div className={cx(styles.wrapper, styles[`wrapper-${selectStyles}`])}>
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
