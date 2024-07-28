import { useFormik } from "formik";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { ForgotPasswordApiCall } from "@src/Api/Services/Auth";
import APP_ROUTES from "@src/Constants/route";
import { ForgotPasswordSchema } from "@components/Schemas/ForgotPassword";
import ForgotPasswordForm from "@components/Forms/Auth/ForgotPassword";
import { useMutation } from "@tanstack/react-query";

interface initialValues {
  email: string;
}
function ForgotPassword() {
  const navigate = useNavigate();

  const initialValues: initialValues = {
    email: "",
  };

  const forgot = useMutation({
    mutationFn: (values: any) => ForgotPasswordApiCall(values),
    onSuccess: (data: any) => {
      navigate(APP_ROUTES.SIGNIN);
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const onSubmit = (values: initialValues) => {
    forgot.mutateAsync({
      email: values.email,
    });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: ForgotPasswordSchema,
      onSubmit,
    });
  return (
    <ForgotPasswordForm
      values={values}
      errors={errors}
      touched={touched}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default ForgotPassword;
