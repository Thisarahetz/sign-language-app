import { Permission } from "@redux/AuthSlice";
import moment from "moment";
import "moment-timezone";

export const functionMapping: { [key: string]: () => void } = {};

export function stripHtmlTags(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}

export function permissionsCheck(
  permissions: Permission[],
  current_module_id: number,
  action_id: number
) {
  let isAllowed = false;
  permissions.forEach((permission) => {
    permission.value.forEach((module) => {
      if (module.module_id === current_module_id.toString()) {
        if (module.action.includes(action_id)) {
          isAllowed = true;
        }
      }
    });
  });
  return isAllowed;
}

export function convertTimeWithTimeZone(time: string) {
  const date = new Date(time);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timeZone);
  const momentWithoutTimeZone = moment(date);
  // return momentWithoutTimeZone.tz(timeZone).format("YYYY-MM-DD HH:mm:ss");
  return momentWithoutTimeZone.tz(timeZone).format("DD-MM-YYYY ");
}

export function orderType(order: string) {
  if (order === "asc") {
    return "desc";
  } else {
    return "asc";
  }
}

export const DefaultLocationLatLng = {
  lat: -35.309896004537364,
  lng: 149.11714958496358,
};
