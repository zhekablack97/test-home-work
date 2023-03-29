import { HTMLAttributes, OptionHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./Select.module.scss";

interface ISelect extends HTMLAttributes<HTMLSelectElement> {
  options?: React.DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >[];
  selectStyles?: "border" | "onlyText";
  classNameWrapper?: string;
}

export const Select: React.FC<ISelect> = ({
  className,
  options = [],
  selectStyles = "border",
  classNameWrapper,
  ...restProps
}) => {
  return (
    <div
      className={cx(
        styles.wrapper,
        classNameWrapper,
        styles[`wrapper-${selectStyles}`]
      )}
    >
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
