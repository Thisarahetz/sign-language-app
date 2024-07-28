import { useAppDispatch } from "@hooks/Redux";
import { setMessage, setToken, setUserData } from "@redux/AuthSlice";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";
import APP_ROUTES from "@src/Constants/route";
import SignInForm from "@components/Forms/Auth/SignIn";
import SignInSchema from "@components/Schemas/SignIn";
import { SignInApiCall } from "@src/Api/Services/Auth";
import { useMutation } from "@tanstack/react-query";

interface initialValues {
  email: string;
  password: string;
}

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues: initialValues = {
    email: "",
    password: "",
  };

  const login = useMutation({
    mutationFn: (values: initialValues) =>
      SignInApiCall(values.email, values.password),
    onSuccess: (data: any) => {
      localStorage.setItem("token", data.data.access_token);
      dispatch(setToken(data.data.access_token));
      dispatch(setUserData(data.data));
      navigate(APP_ROUTES.DASHBOARD);
    },
    onError: (error: any) => {
      dispatch(setMessage(error.response.data.message));
    },
  });

  const onSubmit = (values: initialValues) => {
    console.log(values);
    login.mutate(values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignInSchema,
      onSubmit,
    });

  return (
    <SignInForm
      values={values}
      errors={errors}
      touched={touched}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignIn;
