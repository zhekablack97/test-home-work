import { HTMLAttributes } from "react";
import { TypeContainerBlockElements } from "../../types";
import cx from "classnames";
import styles from "./Container.module.scss";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  asNode?: TypeContainerBlockElements;
}

export const Container: React.FC<IContainer> = ({
  asNode = "div",
  className,
  ...restProps
}) => {
  const ContainerNode = asNode;

  return (
    <ContainerNode className={cx(styles.container, className)} {...restProps} />
  );
};
