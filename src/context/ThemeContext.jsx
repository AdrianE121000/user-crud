import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(false);

  const toggTethemeMode = () => {
    setThemeMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggTethemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
