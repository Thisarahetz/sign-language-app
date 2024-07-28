import axios from "axios";

const APICLIENT = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

APICLIENT.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers;
    config.headers.Authorization = `Bearer ${token}`;
    //add timezone to the header
    config.headers.time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  return config;
});

export default APICLIENT;
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       // const refreshToken = localStorage.getItem("refreshToken");
//       const response = await api.post(
//         "http://localhost:8041/api/auth/refresh-token"
//       );
//       localStorage.setItem("token", response.data.token);
//       return api(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );
