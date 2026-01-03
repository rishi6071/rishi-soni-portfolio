"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}
