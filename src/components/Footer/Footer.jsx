import { Button } from "../Button/Button.jsx";

import { ThemeProvider } from "../../contexts/theme/ThemeProvider.jsx";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <ThemeProvider>
      <div className={styles.footer}>
        <Button className={styles.button}>Contacts</Button>
      </div>
    </ThemeProvider>
  );
};
