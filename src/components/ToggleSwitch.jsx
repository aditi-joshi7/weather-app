import React from "react";
import "./toggle.css";

function ToggleSwitch({ label, checked, onChange }) {
  return (
    <div className="toggle-row">
      <span>{label}</span>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;