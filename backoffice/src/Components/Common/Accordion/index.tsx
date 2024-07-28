import { useState } from "react";

interface CustomAccordionProps {
  icon: any;
  label: string;
  selected: boolean;
  handleSelect: (value: number) => void;
  index: number;
  children?: React.ReactNode;
}

export default function CustomAccordion({
  icon,
  index,
  label,
  children,
  selected,
  handleSelect,
}: CustomAccordionProps) {
  return (
    <>
      <div
        className={`form-option-wrapper ${selected ? "is-selected" : ""}`}
        onClick={() => handleSelect(index)}
      >
        <div className="icon-1x1-small w-embed">{icon}</div>
        <div>{label}</div>
      </div>
      {selected && children}
    </>
  );
}
