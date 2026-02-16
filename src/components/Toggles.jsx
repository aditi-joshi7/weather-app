import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function Toggles({
  isCelsius,
  setIsCelsius,
  showUnitToggle,
}) {
  return (
    <div className="toggles-container">
      {showUnitToggle && (
        <ToggleSwitch
          label="°C / °F"
          checked={isCelsius}
          onChange={() => setIsCelsius(!isCelsius)}
        />
      )}
    </div>
  );
}

export default Toggles;
