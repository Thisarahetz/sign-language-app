import { Popover } from "@mui/material";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import moment from "moment-timezone";

interface AdvanceDatePickerProps {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
  onSelect: (date: any) => void;
  value: any;
}

export function AdvanceTimePicker({
  open,
  anchorEl,
  handleClose,
  value,
  onSelect,
}: AdvanceDatePickerProps) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <input
        type="time"
        id="meeting-time"
        name="meeting-time"
        value={value}
        onChange={(e) => {
          console.log(e.target.value, "e.target.value");
          onSelect(e.target.value);
        }}
      />
    </Popover>
  );
}
