
import APICLIENT from "../../Axios";
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

export const CreateNewAdminUser = async (data: AddAdminUsers) => {
  const response = await APICLIENT.post(`/user/create-admin`, data);
  return response.data;
};

export const GetUserById = async (userId: number) => {
  const response = await APICLIENT.get(`/user/admin/${userId}`);
  return response.data;
};

export const UpdateAdminUser = async (userId: number, data: any) => {
  const response = await APICLIENT.patch(`/user/admin/${userId}`, data);
  return response.data;
};

export const UpdateCustomerUser = async (userId: number, data: any) => {
  const response = await APICLIENT.patch(`/user/customer/${userId}`, data);
  return response.data;
};

export const CreateCustomerUser = async (data: any) => {
  const response = await APICLIENT.post(`/user/create-customer`, data);
  return response.data;
};

export const PatchEnableDisableUser = async (userId: number) => {
  const response = await APICLIENT.patch(`/user/admin/disable/${userId}`);
  return response.data;
};
