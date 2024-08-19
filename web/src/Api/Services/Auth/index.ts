import APICLIENT from "../../Axios";


export const SignInApiCall = async (email: string, password: string) => {
  const response = await APICLIENT.post("auth/login", {
    email,
    password,
  });
  return response.data;
};

export const ResetPasswordApiCall = async (
  token: string,
  new_password: string
) => {
  const response = await APICLIENT.put(
    `/auth/reset-password-token?token=${token}`,
    {
      newPassword: new_password,
    }
  );

  return response.data;
};

export const ForgotPasswordApiCall = async (email: string) => {
  const response = await APICLIENT.post(`/auth/forgot-password`, email);
  return response.data;
};

export const ChnagePasswordApiCall = async (data: any) => {
  const response = await APICLIENT.put(`/auth/change-password`, data);
  return response.data;
};

export const SignUpApiCall = async (data: any) => {
  const response = await APICLIENT.post(`/auth/register`, data);
  return response.data;
};

