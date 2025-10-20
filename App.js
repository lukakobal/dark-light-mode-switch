import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <button onClick={toggleMode}>
        {darkMode ? "Switch to light" : "Switch to dark"}
      </button>
    </div>
  );
}
