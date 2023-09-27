import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem("darkMode", newDarkMode);
    setIsDarkMode(newDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("color-theme", "dark");
    } else {
      document.documentElement.setAttribute("color-theme", "light");
    }
  }, [isDarkMode]);
  return { isDarkMode, toggleDarkMode };
}

export default useDarkMode;
