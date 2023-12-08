import { useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../contexts/theme/ThemeContext.js";

import styles from "./styles.module.scss";

export const Button = ({children, onClick, disabled, className}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark'
      })}
    >
      {children}
    </button>
  );
};
