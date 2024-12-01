import APICLIENT from "../../Axios";

export const GetAllDashbord = async () => {
  const response = await APICLIENT.get('/dashboard'
  );
  return response.data;
};

export const getDashbordTabelById = async () => {
  const response = await APICLIENT.get(`dashboard/score`);
  return response.data;
};

//create score
export const createScore = async (data: any) => {
  const response = await APICLIENT.post('/dashboard/score', data);
  return response.data;
};