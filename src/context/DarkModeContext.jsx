import { createContext, useState } from "react";

// 데이터를 담고있다
export const DarkModeContext = createContext();

// 우산을 만든다고 생각한다.
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
