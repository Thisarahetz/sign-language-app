import { CircularProgress } from "@mui/material";
import React from "react";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  title: string;
  id?: string;
}

export default function PrimeryButton({
  onClick,
  disabled,
  loading,
  children,
  title,
  id,
}: Props) {
  return (
    <button
      id={id}
      className={`btn_base w-button  ${loading ? "is_disabled" : ""} ${
        disabled ? "is_disabled" : ""
      }`}
      onClick={onClick}
      type="button"
    >
      {loading ? <CircularProgress color="inherit" size={20} /> : title}
    </button>
  );
}
