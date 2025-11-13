import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      });
    } else {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  if (!mounted) return null;

  return (
    <>
      <style>
        {`
          @supports (view-transition-name: root) {
            ::view-transition-old(root),
            ::view-transition-new(root) {
              animation-duration: 0.4s;
            }
            
            ::view-transition-old(root) {
              animation-name: fade-out;
            }
            
            ::view-transition-new(root) {
              animation-name: fade-in;
            }
            
            @keyframes fade-out {
              to { opacity: 0; }
            }
            
            @keyframes fade-in {
              from { opacity: 0; }
            }
          }
        `}
      </style>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Sun
            className={`absolute h-5 w-5 transition-all duration-500 ${
              theme === "light"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-0 opacity-0"
            }`}
            style={{ color: "#F59E0B" }}
          />
          <Moon
            className={`absolute h-5 w-5 transition-all duration-500 ${
              theme === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }`}
            style={{ color: "#818CF8" }}
          />
        </div>
      </Button>
    </>
  );
};