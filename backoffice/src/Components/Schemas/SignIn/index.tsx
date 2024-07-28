import * as yup from "yup";

const phoneRegExp = /^\d{10}$/;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

 const SignInSchema = yup.object().shape({
  email: yup.string().email().required("Email is required").matches(emailRegExp, 'Email is not valid'),
  password: yup.string().required("Password is required"),
});


export default SignInSchema;
