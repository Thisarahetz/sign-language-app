import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import {
  clearSchedule,
  setScheduledDate,
  setScheduledTime,
} from "@redux/OrderSlice";
import { useEffect } from "react";

export default function TimerPicker() {
  const { scheduled_time, scheduled_date } = useAppSelector(
    (state) => state.order
  );
  const disapatch = useAppDispatch();

  function roundTimeToNearest10Minutes(date: Date): Date {
    const roundedMinutes = Math.round(date.getMinutes() / 10) * 10;
    date.setMinutes(roundedMinutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }

  // Function to format time as hh:mm AM/PM
  function formatTime12hr(date: Date): string {
    const hours = date.getHours() % 12 || 12; // Convert 0 to 12
    const minutes = date.getMinutes();
    const period = date.getHours() < 12 ? "AM" : "PM";
    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }

  function formatTime(date: Date): string {
    return date.toISOString();
  }

  const genrateTimeGaps = () => {
    // Set the start time to the current time
    const startTime: Date = new Date();
    startTime.setMinutes(startTime.getMinutes() + 30);

    // Calculate the end time (10 hours later)
    const endTime: Date = new Date(startTime.getTime() + 10 * 60 * 60 * 1000);

    // Set the interval in minutes
    const interval: number = 10;

    // Generate the list of time gaps
    const timeGaps: Date[] = [];
    for (
      let currentTime = startTime;
      currentTime <= endTime;
      currentTime.setMinutes(currentTime.getMinutes() + interval)
    ) {
      const roundedTime = roundTimeToNearest10Minutes(new Date(currentTime));
      timeGaps.push(roundedTime);
    }

    // Convert the Date objects to an array of objects with label and value
    const timeGapsFormatted: { label: string; value: string }[] = timeGaps.map(
      (time) => ({
        label: formatTime12hr(time),
        value: formatTime(time),
      })
    );

    // Display the list
    return timeGapsFormatted;
  };

  function setAutoDate() {
    if (scheduled_date === "") {
      const today = new Date();
      disapatch(setScheduledDate(today.toISOString()));
    }
  }

  useEffect(() => {
    if (scheduled_time === "" && scheduled_date !== "") {
      disapatch(setScheduledTime(genrateTimeGaps()[0].value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduled_date]);

  return (
    <select
      id="w-node-_91d38349-a0cd-0774-c2c8-71799fa6c1d1-93a7aab7"
      className="form_input is-select-input-clock"
      onChange={(e) => {
        if (e.target.value === "now") {
          disapatch(clearSchedule());
        } else {
          disapatch(setScheduledTime(e.target.value));

          setAutoDate();
        }
      }}
      value={scheduled_time}
    >
      <option className="form_select-option" value={"now"}>
        Now
      </option>
      {genrateTimeGaps().map((time, index) => {
        return (
          <option
            key={`time-${index}`}
            className="form_select-option"
            value={time.value}
          >
            {time.label}
          </option>
        );
      })}
    </select>
  );
}
