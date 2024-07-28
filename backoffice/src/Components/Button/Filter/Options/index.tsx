import React from "react";

interface Props {
  onClick?: (e:any) => void;
  isActive?: boolean;
  children?: React.ReactNode;
  title: string;
  valve: string;
  id?: string;
  value?: string;
}

export default function FilterOptions({
  onClick,
  value,
  children,
  isActive,
  title,
  id,
  valve,
}: Props) {
  return (
   <>
    <div className={`filter-option ${isActive && 'is-filter-btn-clicked'}`} onClick={onClick}>
      <span>{title}</span>
      {
        value &&<span className="filter-option-current-value">{value}</span>
      }
    </div>
   </>
  );
}
