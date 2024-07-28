import * as yup from "yup";


//number only
//number 10
const phoneRegExp = /^\d{10}$/;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


const AddColinetSchema = yup.object().shape({
  email: yup.string().email().required("Email is required").matches(emailRegExp, 'Email is not valid'),
  phone_number: yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
  business_name: yup.string().required("Business name is required"),
  contact_user_name: yup.string().required("Contact client name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  post_code: yup.string().required("Postal code is required"),
});

export default AddColinetSchema;
