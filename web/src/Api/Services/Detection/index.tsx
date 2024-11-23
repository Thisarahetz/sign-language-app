import axios from "axios";

const APICLIENT = axios.create({
    baseURL: import.meta.env.VITE_API_DETECECTION_URL,
});



interface GetDetection {
    image_url: string;
    answer: string;
}

export interface response {
    predicted: string;
    result: true;
}

export const GetDetection = async (data: GetDetection) : Promise<response> => {
  
  const response = await APICLIENT.post('/detection/lang/v2', data
  );
  return response.data;
};

