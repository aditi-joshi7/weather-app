import React from "react";
import "./UnitToggle.css";

const UnitToggle = ({ isCelsius, onToggle }) => {
  return (
    <div className="unit-toggle">
      <span className={isCelsius ? "active" : ""}>Celsius</span>
      <label className="switch">
        <input type="checkbox" checked={!isCelsius} onChange={onToggle} />
        <span className="slider"></span>
      </label>
      <span className={!isCelsius ? "active" : ""}>Fahrenheit</span>
    </div>
  );
};

export default UnitToggle;
