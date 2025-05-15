"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-accent transition-colors shadow"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 transition-transform duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
