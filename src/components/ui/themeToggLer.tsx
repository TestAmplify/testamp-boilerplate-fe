import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const ThemeToggler = ({ className }: { className?: string }) => {
  const { darkMode, toggleTheme } = useTheme();

  const classes = cn(
    "relative w-16 h-8 flex items-center dark:bg-[#272A2F] bg-[#EFF0F3] cursor-pointer rounded-full p-1",
    className
  );

  return (
    <div className={classes} onClick={() => toggleTheme()}>
      <Moon size={18} />
      <div
        className="absolute bg-[#272A2F] dark:bg-white w-6 h-6 rounded-full shadow-md transform tansition-transform duration-300 
      "
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <Sun size={18} className="ml-auto text-primary" />
    </div>
  );
};

export { ThemeToggler };
