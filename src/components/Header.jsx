import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="app-header">
      <h1 className="app-title">Weather App</h1>
      <ToggleSwitch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </header>
  );
}

export default Header;
