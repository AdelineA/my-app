import React, { useEffect, useState } from 'react';

const Home = () => {
  const [theme, setTheme] = useState("light");

  // Apply the theme change to the document element (html tag)
  useEffect(() => {
    if (theme === "dark") { // Fix: Correct comparison for lowercase
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle between light and dark theme
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
      <button
        className="bg-red-800 text-white p-4 rounded"
        onClick={handleThemeSwitch}
      >
         {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Home;
