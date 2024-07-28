import { format } from "date-fns";

export default function ScheduleLabel({
  scheduledDate,
  scheduledTime,
}: {
  scheduledDate: any;
  scheduledTime: any;
}) {
  return (
    <div className="selected-label-wrapper">
      <div className="label-inner-wrapper">
        <div className="icon-1x1-small w-embed">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 2.25C7.11522 2.25 2.75 6.61522 2.75 12C2.75 17.3848 7.11522 21.75 12.5 21.75C17.8848 21.75 22.25 17.3848 22.25 12C22.25 6.61522 17.8848 2.25 12.5 2.25ZM13.25 6C13.25 5.58579 12.9142 5.25 12.5 5.25C12.0858 5.25 11.75 5.58579 11.75 6V12C11.75 12.4142 12.0858 12.75 12.5 12.75H17C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25H13.25V6Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          {scheduledDate
            ? format(scheduledDate, "yyyy-MM-dd") +
              " / " +
              format(scheduledTime, "HH:mm")
            : "Now"}
        </div>
      </div>
    </div>
  );
}
