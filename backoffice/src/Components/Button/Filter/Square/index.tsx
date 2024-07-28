import { CircularProgress } from "@mui/material";
import React from "react";

interface Props {
  // onClick?: () => void;
  // disabled?: boolean;
  // loading?: boolean;
  isActive?: boolean;
  children?: React.ReactNode;
  title: string;
  valve: string | number;
  id?: string;
}

export default function FilterSquare({
  // onClick,
  // disabled,
  // loading,
  children,
  isActive,
  title,
  id,
  valve,
}: Props) {
  return (
    <div className={`filter-btn ${isActive && "is-filter-btn-clicked"}`}>
      <span className="text_14">{title}</span>
      <span className="weight_600">{valve}</span>
    </div>
  );
}
