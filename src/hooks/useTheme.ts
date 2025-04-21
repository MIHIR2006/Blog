import { useEffect, useState } from 'react';

type Theme = "dark" | "light" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark mode
      setTheme("dark");
    }
  }, []);

  // Listen for changes to localStorage theme
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        setTheme(e.newValue as Theme || "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Define functions to change the theme
  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return {
    theme,
    setDarkTheme,
    setLightTheme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light"
  };
} 