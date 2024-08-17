import APICLIENT from "../../Axios";

export const GetAllLearn = async () => {
  const response = await APICLIENT.get('/learn/module'
  );
  return response.data;
};  