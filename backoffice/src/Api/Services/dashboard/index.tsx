import APICLIENT from "@src/Api/Axios";

export const getAllScoresUser = async () => {
    const response = await APICLIENT.get(`dashboard/score/all`);
    return response.data;
    }