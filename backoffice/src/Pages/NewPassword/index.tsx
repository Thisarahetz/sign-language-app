import { ResetPasswordApiCall } from "@src/Api/Services/Auth";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import APP_ROUTES from "@src/Constants/route";
import { NewPasswordSchema } from "@components/Schemas/NewPassword";
import NewPasswordForm from "@components/Forms/Auth/NewPassword/indexx";
import { useMutation } from "@tanstack/react-query";

interface initialValues {
  newPassword: string;
  confirmPassword: string;
}

function NewPassword() {
  const navigate = useNavigate();

  const initialValues: initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const resetPasswordMutation = useMutation({
    mutationFn: (values: initialValues) =>
      ResetPasswordApiCall(token as string, values.confirmPassword),
    onSuccess: (data: any) => {
      navigate(APP_ROUTES.SIGNIN);
      toast.success(data.message);
    },
  });

  const onSubmit = (values: initialValues) => {
    if (token === null) {
      navigate(APP_ROUTES.SIGNIN);
      toast.error("Invalid token");
      return;
    } else {
      resetPasswordMutation.mutate(values);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: NewPasswordSchema,
      onSubmit,
    });

  return (
    <NewPasswordForm
      values={values}
      errors={errors}
      touched={touched}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default NewPassword;
