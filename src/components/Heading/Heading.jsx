import clsx from "clsx";
import styles from "./Heading.module.css";

export const Heading = ({ title, top, bottom }) => {
  return (
    <h2
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
      })}
    >
      {title}
    </h2>
  );
};
