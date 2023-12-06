import { useContext } from "react";

import { Button } from "../Button/Button.jsx";

import { ThemeContext } from "../../contexts/theme/ThemeContext.js";

import styles from "./styles.module.scss";
import {ThemeProvider} from "../../contexts/theme/ThemeProvider.jsx";

export const Header = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={styles.header}>
        <Button>Order</Button>
        <Button onClick={changeTheme}>Change theme</Button>
      </div>
    </ThemeProvider>
  );
};
