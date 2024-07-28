import { Popover } from "@mui/material";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import { setScheduledDate } from "@redux/OrderSlice";

interface DatePickerProps {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
}

export function DatePicker({ open, anchorEl, handleClose }: DatePickerProps) {
  const { scheduled_date } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

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
        selected={scheduled_date ? new Date(scheduled_date) : new Date()}
        onSelect={(newDate) => {
          console.log(newDate?.toISOString() || "");
          dispatch(setScheduledDate(newDate?.toISOString() || ""));
        }}
        initialFocus
        disabled={{
          before: new Date(),
          after: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        }}
      />
    </Popover>
  );
}
