import APICLIENT from "../../Axios";

export const GetAllLearn = async () => {
  const response = await APICLIENT.get('/learn/module'
  );
  return response.data;
};  


export const getResourceByModuleId = async (id: number) => {
  const response = await APICLIENT.get(`/learn/module/resource?id=${id}`);
  return response.data;
};


export const getResourceId = async (id: number) => {
  const response = await APICLIENT.get(`/learn/resource?id=${id}`);
  return response.data;
}