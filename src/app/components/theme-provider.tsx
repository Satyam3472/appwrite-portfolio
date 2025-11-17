"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply theme on mount
    const applyTheme = () => {
      const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      const initialTheme = storedTheme || systemTheme;
      
      const root = document.documentElement;
      if (initialTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme();

    // Listen for storage changes (when theme is changed in another tab/window)
    const handleStorageChange = () => {
      applyTheme();
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Listen for theme changes from the toggle
    window.addEventListener("themechange", applyTheme);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themechange", applyTheme);
    };
  }, []);

  return <>{children}</>;
}

