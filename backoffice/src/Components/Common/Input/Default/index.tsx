import { TextField, TextFieldProps } from "@mui/material";
import React, { useState } from "react";

export default function DefaultInputField({ ...props }: TextFieldProps) {
  return (
    <>
      <TextField
        id="input-with-icon-textfield"
        className={`form_input is-none `}
        variant="standard"
        {...props}
      />
    </>
  );
}
