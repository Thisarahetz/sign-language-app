import * as yup from "yup";

export const AppVersionSchema = yup.object().shape({
    android_version: yup.string().required("Android version is required"),
    message: yup.string().required("Message is required"),
    ios_version: yup.string().required("ISO Version is required"),
    android_force_update: yup.boolean().required("Android force update is required"),
    ios_force_update: yup.boolean().required("ISO force update is required"),
  
});
