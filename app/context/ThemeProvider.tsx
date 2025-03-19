"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);


    setTimeout(() => {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300"
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
      {children}
    </ThemeContext.Provider>
  );
}
