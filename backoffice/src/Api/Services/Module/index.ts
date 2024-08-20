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


//get all resources by module id
export const getAllResourcesByModuleId = async (id: string) => {
  const response = await APICLIENT.get(`/learn/module/resource?id=${id}`);
  return response.data;
};


//create new module
export const CreateNewModule = async (data: any) => {
  const response = await APICLIENT.post(`/learn/module`, data);
  return response.data;
};




//add new resource
export const CreateNewResource = async (id:string ,data: any) => {
  const response = await APICLIENT.post(`/learn/module/resource?id=${id}`, data);
  return response.data;
};


//delete module
export const DeleteModule = async (id: string) => {
  const response = await APICLIENT.delete(`/learn/module/${id}`);
  return response.data;
};

//delete resource
export const DeleteResource = async (id: string) => {
  const response = await APICLIENT.delete(`/learn/resource/${id}`);
  return response.data;
};



