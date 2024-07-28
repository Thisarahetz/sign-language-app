import { useAppSelector } from "@hooks/Redux";
import { permissionsCheck } from "@utils/index";
import {APP_USER_TYPES} from "@constants/user"

export function hasCreatePermission(permissionType: number) {
  const permissions = useAppSelector(
    (state) => state.auth.data.user.permissions
  );
  const user_type = useAppSelector((state) => state.auth.data.user.role);
  const current_module_id = useAppSelector((state) => state.drawer.isActive);

  return (
    (user_type === APP_USER_TYPES.ADMIN &&
      permissionsCheck(permissions, current_module_id, permissionType)) ||
    user_type === APP_USER_TYPES.SUPER_ADMIN
  );
}


export function capitalizeFirstLetter(string: string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function limitParagraphToWords(paragraph: string, limit: number) {
  // Split the paragraph into words
  const words = paragraph.split(" ");

  // If the number of words is less than or equal to the limit, return the original paragraph
  if (words.length <= limit) {
    return paragraph;
  }

  // Join the first `limit` words and add ellipsis to indicate truncation
  const limitedParagraph = words.slice(0, limit).join(" ") + "...";

  return limitedParagraph;
}
