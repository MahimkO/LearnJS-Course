import { useContext } from "react";

import { ThemeContext } from "../Layout/Layout.jsx";

import styles from "./styles.module.scss";

export const Header = () => {
  const { theme, setLightTheme, setDarkTheme } = useContext(ThemeContext);
  const handleChangeTheme = () => {
    theme.theme === 'dark' ? setLightTheme() : setDarkTheme();
  };

  return (
    <div className={styles.header}>
      <button>Order</button>
      <button onClick={handleChangeTheme}>Change theme</button>
    </div>
  );
};
