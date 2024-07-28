import { EventSourcePolyfill } from "event-source-polyfill";

const EventSource = () => {
  const baseurl = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");
  var es = new EventSourcePolyfill(
    baseurl + "/live-notification/events",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
      heartbeatTimeout: 60000,
    }
  );
  return es;
};

export default EventSource;
