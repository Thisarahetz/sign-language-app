import * as yup from "yup";

const phoneRegExp = /^\d{10}$/;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const AddUserSchema = yup.object().shape({
  email: yup.string().email().required("Email is required").matches(emailRegExp, 'Email is not valid'),
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone_number: yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
});
    

export default AddUserSchema;
 