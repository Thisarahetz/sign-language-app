import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});
