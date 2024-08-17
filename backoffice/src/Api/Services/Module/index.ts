import APICLIENT from "@src/Api/Axios";
import { AddAdminUsers, AdminUsers } from "./type";

export const GetAllAdminUsers = async (
  page: number,
  limit: number,
  search_key: string
): Promise<AdminUsers> => {
  const response = await APICLIENT.get(
    `/user/admin/all?page=${page}&limit=${limit}&search_key=${search_key}`
  );
  return response.data;
};

export const getAllModule = async () => {
  const response = await APICLIENT.get(`/learn/module`);
  return response.data;
};

