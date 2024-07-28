import APICLIENT from "@src/Api/Axios";

export const GetAllNotifications = async () => {
  const response = await APICLIENT.get(`/live-notification`);
  return response.data;
};

export const ClickNotificationAsRead = async (id: number) => {
  const response = await APICLIENT.patch(`/live-notification/${id}`);
  return response.data;
};

export const ReadAllNotifications = async (notifications_ids: string[]) => {
  const response = await APICLIENT.patch(`/live-notification/read-all`, {
    notifications_ids,
  });
  return response.data;
};
