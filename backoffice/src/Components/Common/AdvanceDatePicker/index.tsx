import { Popover } from "@mui/material";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import moment from "moment-timezone";

interface AdvanceDatePickerProps {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
  isActivateBefore?: boolean;
  isActivateAfter?: boolean;
  onSelect: (date: string) => void;
}

export function AdvanceDatePicker({
  open,
  anchorEl,
  handleClose,
  isActivateAfter,
  isActivateBefore,
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
      <DayPicker
        mode="single"
        // selected={new Date()}
        onSelect={(date) => {
          if (date) {
            const selectedDate = moment(date).format("YYYY-MM-DD");
            onSelect(selectedDate);
            handleClose();
          }
        }}
        initialFocus
        disabled={{
          ...(isActivateBefore ? {} : { before: moment().toDate() }),
          ...(isActivateAfter
            ? { after: moment().toDate() }
            : { after: moment().add(1, "month").toDate() }),
        }}
      />
    </Popover>
  );
}
