import { Button } from "../Button/Button.jsx";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Button className={styles.button}>Contacts</Button>
    </div>
  );
};
