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
            <button
                onClick={decrement}
                disabled={value <= min}
            >
                -
            </button>
            <span> {value} </span>
            <button
              onClick={increment}
              disabled={value >= max}
            >
                +
            </button>
        </div>
    );
};
