import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useContext(ThemeContext);

  return <div className={darkMode ? "dark" : ""}>{children}</div>;
};

export default DarkModeWrapper;
