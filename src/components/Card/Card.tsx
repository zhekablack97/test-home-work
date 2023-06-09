import cx from "classnames";
import { HTMLAttributes, ReactNode } from "react";
import { TypeContainerBlockElements } from "../../types";
import styles from "./Card.module.scss";

interface ICard extends HTMLAttributes<HTMLDivElement> {
  footer?: ReactNode;
  asNode?: TypeContainerBlockElements;
  classNameFooter?: string;
  classNameWrapper?: string;
}

export const Card: React.FC<ICard> = ({
  asNode = "div",
  children,
  className,
  classNameFooter,
  footer,
  classNameWrapper,
  ...restProps
}) => {
  const ContainerNode = asNode;

  const contentStyle = footer
    ? styles["content-with_footer"]
    : styles["content-without_footer"];

  return (
    <ContainerNode
      className={cx(styles.wrapper, classNameWrapper)}
      {...restProps}
    >
      <div className={cx(contentStyle, styles.content, className)}>
        {children}
      </div>
      {footer && (
        <footer
          className={cx(classNameFooter, styles.footer)}
          role="contentinfo"
        >
          {footer}
        </footer>
      )}
    </ContainerNode>
  );
};
