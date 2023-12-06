import { useContext } from "react";

import { ThemeContext } from "../../contexts/theme/ThemeContext.js";

import styles from "./styles.module.scss";

export const Button = ({children, onClick, disabled}) => {
  const {theme} = useContext(ThemeContext);

  console.log('theme', theme)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${theme === 'light' ? styles.light : theme === 'dark' ? styles.dark : ''}`}
    >
      {children}
    </button>
  );
};
