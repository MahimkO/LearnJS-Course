import { Button } from "../Button/Button.jsx";

import styles from "./styles.module.scss";

export const Counter = ({
  value = 0,
  min = 0,
  max = 5,
  increment,
  decrement,
}) => {
  return (
    <div className={styles.counter}>
      <Button
        onClick={decrement}
        disabled={value <= min}
      >
        -
      </Button>
      <span> {value} </span>
      <Button
        onClick={increment}
        disabled={value >= max}
      >
        +
      </Button>
    </div>
  );
};
