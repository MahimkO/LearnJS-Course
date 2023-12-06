import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

import { ThemeProvider } from "../../contexts/theme/ThemeProvider.jsx";

import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className={styles.layout}>
          <Header />
          <main>{children}</main>
          <Footer />
      </div>
    </ThemeProvider>
  );
};
