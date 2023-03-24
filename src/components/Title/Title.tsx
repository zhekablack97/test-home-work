import cx from "classnames";
import { HTMLAttributes } from "react";
import { TypeHeadingElements } from "../../types";
import styles from "./Title.module.scss";

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  asNode?: TypeHeadingElements;
}

export const Title: React.FC<ITitle> = ({
  asNode = "h1",
  className,
  ...restProps
}) => {
  const ContainerNode = asNode;
  return (
    <ContainerNode className={cx(styles[asNode], className)} {...restProps} />
  );
};
