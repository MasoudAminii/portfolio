"use client";
import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";

const ThemeChange = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <CgDarkMode
        title="Dark Mode"
        className="cursor-pointer text-2xl text-white"
      />
    </button>
  );
};

export default ThemeChange;
