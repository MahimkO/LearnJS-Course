import {createContext, useCallback, useState} from "react";

import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

import styles from "./styles.module.scss";

const defaultTheme = { theme: 'light' };
export const ThemeContext = createContext(defaultTheme);
export const Layout = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const setDarkTheme = useCallback(() => {
    setTheme((prevState) => {
      return {
        ...prevState,
        theme: 'dark'
      };
    });
  }, []);

  const setLightTheme = useCallback(() => {
    setTheme((prevState) => {
      return {
        ...prevState,
        theme: 'light'
      };
    });
  }, []);

  return (
    <div className={styles.layout}>
      <ThemeContext.Provider value={{theme, setLightTheme, setDarkTheme}}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};
