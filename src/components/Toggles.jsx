import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function Toggles({ isCelsius, setIsCelsius }) {
  return (
    <div className="toggles-container">
      <ToggleSwitch
        label="°C / °F"
        checked={isCelsius}
        onChange={() => setIsCelsius(!isCelsius)}
      />
    </div>
  );
}

export default Toggles;