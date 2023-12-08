import { useCallback, useState } from "react";

import { ThemeContext } from "./ThemeContext.js";

export const ThemeProvider = ({children, defaultTheme = 'light'}) => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
