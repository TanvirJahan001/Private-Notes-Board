// components/ThemeSelector.jsx
import React, { useEffect, useState } from "react";

const themes = [
  { name: "White", class: "bg-white text-black" },
  { name: "Dark", class: "bg-gray-900 text-white" },
  { name: "Pink", class: "bg-pink-500 text-gray-800" },
  { name: "Ocean", class: "bg-blue-400 text-blue-900" },
];

const ThemeSelector = ({ setTheme }) => {
  const [customColor, setCustomColor] = useState("#ffffff");

  // Load the selected theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    const savedCustomColor = localStorage.getItem("customColor");

    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === "custom" && savedCustomColor) {
        setCustomColor(savedCustomColor);
        document.documentElement.style.setProperty(
          "--custom-bg",
          savedCustomColor
        );
      }
    }
  }, [setTheme]);

  const handleThemeChange = (themeClass) => {
    setTheme(themeClass);
    localStorage.setItem("selectedTheme", themeClass);
    if (themeClass !== "custom") {
      localStorage.removeItem("customColor");
    }
  };

  const handleCustomTheme = () => {
    setTheme("custom");
    localStorage.setItem("selectedTheme", "custom");
    localStorage.setItem("customColor", customColor);
    document.documentElement.style.setProperty("--custom-bg", customColor);
  };

  return (
    <div className="mb-4 flex flex-wrap gap-2 items-center">
      {themes.map((theme, idx) => (
        <button
          key={idx}
          className="px-4 py-2 rounded shadow border text-sm hover:shadow-lg"
          onClick={() => handleThemeChange(theme.class)}
        >
          {theme.name}
        </button>
      ))}
      <div className="flex items-center space-x-2">
        <input
          type="color"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          className="border rounded w-10 h-10 p-1 cursor-pointer"
        />
        <button
          onClick={handleCustomTheme}
          className="bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600"
        >
          Apply Color
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
