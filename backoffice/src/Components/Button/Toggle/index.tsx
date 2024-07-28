import { URGENCY } from "@redux/OrderSlice";
import { useState } from "react";

type ToggleButtonProps = {
  handleChange: (option: URGENCY) => void;
};

export default function ToggleButton({ handleChange }: ToggleButtonProps) {
  const [selectedId, setSelectedId] = useState<URGENCY>(URGENCY.STANDARD);

  const handleToggle = (option: URGENCY) => {
    setSelectedId(option);
    handleChange(option);
  };

  return (
    <div className="form-toggle-option-wrapper">
      <div
        className={`form-toggle-option-item-wrapper ${
          selectedId === URGENCY.STANDARD ? "is-selected" : ""
        }`}
        onClick={() => handleToggle(URGENCY.STANDARD)}
      >
        <div>Standard</div>
      </div>
      <div
        className={`form-toggle-option-item-wrapper ${
          selectedId === URGENCY.EXPRESS ? "is-selected" : ""
        }`}
        onClick={() => handleToggle(URGENCY.EXPRESS)}
      >
        <div>Express</div>
      </div>
    </div>
  );
}
