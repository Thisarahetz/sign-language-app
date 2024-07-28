import { TextField } from "@mui/material";
import React, { useState } from "react";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function PhoneInputField({ ...props }: PhoneInputProps) {
  return (
    <>
      <div
        id="w-node-ea4f0d92-2033-1982-7d1a-78416813a482-93a7aac0"
        className={`form_input-wrapper-phone  `}
      >
        <TextField
          id="input-with-icon-textfield"
          name={props.name}
          className={`form_input is-none `}
          InputProps={{
            startAdornment: (
              <div>{import.meta.env.VITE_DEFAULT_COUNTRY_CODE}</div>
            ),
          }}
          variant="standard"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {/* 
      {isError && (
        <div
          id="w-node-_86fdb789-6611-180d-b31a-2a23bd687c7b-93a7aac0"
          className="form-single-error-msg-wrapper"
        >
          <div className="icon-1x1-xsmall w-embed">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2362_709)">
                <path
                  d="M7.93819 2.01595C7.95779 2.0052 7.97984 1.99969 8.00219 1.99995C8.02421 1.99986 8.04588 2.00537 8.06519 2.01595C8.08806 2.02966 8.10673 2.04938 8.11919 2.07295L14.9762 13.74C15.0122 13.8 15.0112 13.864 14.9782 13.923C14.9655 13.9472 14.9469 13.9678 14.9242 13.983C14.9044 13.9951 14.8814 14.001 14.8582 14H1.14619C1.12298 14.0011 1.09997 13.9952 1.08019 13.983C1.05744 13.9678 1.03887 13.9472 1.02619 13.923C1.00971 13.8952 1.00118 13.8634 1.00153 13.8312C1.00189 13.7989 1.01111 13.7673 1.02819 13.74L7.88419 2.07295C7.89669 2.04941 7.91536 2.0297 7.93819 2.01595ZM8.98219 1.56595C8.8832 1.39352 8.74047 1.25025 8.5684 1.15062C8.39633 1.051 8.20102 0.998535 8.00219 0.998535C7.80336 0.998535 7.60805 1.051 7.43598 1.15062C7.26391 1.25025 7.12118 1.39352 7.02219 1.56595L0.16519 13.233C-0.29181 14.011 0.25619 15 1.14519 15H14.8582C15.7472 15 16.2962 14.01 15.8382 13.233L8.98219 1.56595Z"
                  fill="#B50000"
                ></path>
              </g>
              <path
                d="M8.392 10.2355C8.52 9.06842 8.6 8.91499 8.6 6.77801V5H7.4V6.77801C7.4 8.89856 7.464 9.06842 7.592 10.2355H8.392ZM8.008 12.9999C8.536 12.9999 9 12.5232 9 11.9643C9 11.4054 8.536 10.9451 8.008 10.9451C7.448 10.9451 7 11.4054 7 11.9643C7 12.5232 7.448 12.9999 8.008 12.9999Z"
                fill="#B50000"
              ></path>
              <defs>
                <clipPath id="clip0_2362_709">
                  <rect width="16" height="16" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div id="w-node-_8b3e7b35-5aa4-90ca-178d-eb782bef9f12-93a7aac0">
            {error}
          </div>
        </div>
      )} */}
    </>
  );
}
