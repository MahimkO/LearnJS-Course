import { useContext } from "react";

import { ThemeContext } from "../Layout/Layout.jsx";

import styles from "./styles.module.scss";

export const Counter = ({
  value = 0,
  min = 0,
  max = 5,
  increment,
  decrement,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.counter}>
      <button
        className={`${theme.theme === 'dark' ? styles['theme-dark'] : styles['theme-light']}`}
        onClick={decrement}
        disabled={value <= min}
      >
        -
      </button>
      <span> {value} </span>
      <button
        className={`${theme.theme === 'dark' ? styles['theme-dark'] : styles['theme-light']}`}
        onClick={increment}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};
