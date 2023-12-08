import { useContext } from "react";

import { Button } from "../Button/Button.jsx";

import { ThemeProvider } from "../../contexts/theme/ThemeProvider.jsx";
import { ThemeContext } from "../../contexts/theme/ThemeContext.js";

import styles from "./styles.module.scss";

export const Header = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={styles.header}>
        <Button className={styles.button}>Order</Button>
        <Button
          onClick={changeTheme}
          className={styles.button}
        >
          Change theme
        </Button>
      </div>
    </ThemeProvider>
  );
};
