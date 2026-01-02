"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      return savedTheme || "dark";
    }
    return "dark";
  });
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      // Apply initial theme - sync with what's already set by the script
      const initialTheme =
        (localStorage.getItem("theme") as Theme | null) || "dark";
      const html = document.documentElement;
      if (initialTheme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
      // Ensure it's applied
      html.setAttribute("data-theme", initialTheme);
    }
  }, []);

  useEffect(() => {
    if (hasInitialized.current) {
      // Update DOM and localStorage when theme changes
      const html = document.documentElement;
      if (theme === "dark") {
        html.classList.add("dark");
        html.setAttribute("data-theme", "dark");
      } else {
        html.classList.remove("dark");
        html.setAttribute("data-theme", "light");
      }
      localStorage.setItem("theme", theme);
      // Force a repaint to ensure styles update
      html.style.colorScheme = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
