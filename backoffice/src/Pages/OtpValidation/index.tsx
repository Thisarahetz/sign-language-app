import { useAppDispatch } from "@hooks/Redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import SignInSchema from "@components/Schemas/SignIn";

import * as Yup from "yup";

interface initialValues {
  otp: [
    { digit: string },
    { digit: string },
    { digit: string },
    { digit: string },
    { digit: string },
    { digit: string }
  ];
}

const initialValues: initialValues = {
  otp: [
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
  ],
};
const OTPvalidationSchema = Yup.object({
  otp: Yup.array()
    .of(
      Yup.object().shape({
        digit: Yup.string()
          .length(1, "OTP digit must be 1 character long")
          .required("OTP digit is required"),
      })
    )
    .required("All OTP digits are required"),
});

function OTPValidation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (values: initialValues) => {
    // console.log(values);
    // login.mutate(values);
    let finalOtp = values.otp.map((item) => item.digit).join("");
    // const data = await AuthVerifyPhoneNumber({
    //   otp: finalOtp,
    //   phone_number: phone_number,
    //   country_code: country_code,
    // });
    // if (data) {
    //   toast.success("OTP verified successfully");
    //   if(type === AppConstant.from.forgotPassword){
    //     router.push("/auth/change-password");
    //   }else{
    //     router.push("/auth/sign-in");
    //   }

    // }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: SignInSchema,
    onSubmit,
  });

  //   const handleResendCode = async () => {
  //     try {
  //       const response = await AuthResendCode(phone_number, country_code);
  //       if (response) {
  //         toast.success(response.message);
  //       }
  //       setError("");
  //     } catch (e: any) {
  //       setError(e.message);
  //     }
  //   };

  //   const login = useMutation({
  //     mutationFn: (values: initialValues) =>
  //       SignInApiCall(values.email, values.password),
  //     onSuccess: (data: any) => {
  //       localStorage.setItem("token", data.data.token);
  //       dispatch(setToken(data.data.token));
  //       dispatch(setUserData(data.data.user));
  //       navigate(APP_ROUTES.DASHBOARD);
  //     },
  //     onError: (error: any) => {
  //       dispatch(setMessage(error.response.data.message));
  //     },
  //   });

  const handleOTPChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    element: string
  ) => {
    if (event.target.value === "") {
      return;
    }
    setFieldValue(element, event.target.value);
    const nextElementSibling = event.target
      .nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    element: string
  ) => {
    const target = e.target as HTMLInputElement;
    setFieldValue(element, "");

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  return (
    <div className="page_wrapper">
      <div className="auth_component_wrapper otp_auth_wrapper">
        <div className="form">
          <div className="form_section is_last">
            {/* {message && <AuthErrorMessage message={message} />} */}
            <div className="form_section is_last">
              <div className="authentication_block_wrapper otp_block_wrapper">
                <h1 className="text-size-xlarge text-weight-bold">Validate</h1>
                <div className="spacer-0-75"></div>
                <div className="text-size-regular text-color-grey--500 text-weight-medium">
                  Enter the code received to your email
                </div>
                <div className="spacer-custom1"></div>
                <form className="form-wrapper is-sign-up">
                  <div
                    id="w-node-_46a078d5-cf8f-b601-fe9d-51b059e76dec-1f206e99"
                    className="verification_code_wrapper"
                  >
                    <input
                      id="w-node-_46a078d5-cf8f-b601-fe9d-51b059e76ded-1f206e99"
                      className="form_input is-verification-code"
                      type="text"
                      name="verification_number"
                      placeholder="1"
                    />
                    <input
                      className="form_input is-verification-code"
                      type="text"
                      name="verification_number"
                      placeholder="1"
                    />
                    <input
                      className="form_input is-verification-code"
                      type="text"
                      name="verification_number"
                      placeholder="1"
                    />
                    <input
                      className="form_input is-verification-code"
                      type="text"
                      name="verification_number"
                      placeholder="1"
                    />
                    <input
                      className="form_input is-verification-code"
                      type="text"
                      name="verification_number"
                      placeholder="1"
                    />
                    <input
                      className="form_input is-verification-code"
                      type="text"
                      name="verification_number"
                      placeholder="1"
                    />
                  </div>
                  <input
                    id="w-node-_46a078d5-cf8f-b601-fe9d-51b059e76df3-1f206e99"
                    className="btn_base"
                    type="button"
                    value="Verify"
                  />
                </form>
                <div className="spacer-custom1"></div>
                <div className="help_text_wrapper">
                  <div className="text-size-regular text-color-grey--500 text-weight-medium">
                    Haven’t received any code?
                  </div>
                  <a
                    href="#"
                    className="text-size-regular text-weight-bold text-color-primary text-decoration-none"
                  >
                    Resend
                  </a>
                </div>
                <div className="spacer-custom1"></div>

                <div className="verification_lwaiting_wrapper">
                  <div className="verification_loader w-embed">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.037 17.567C15.2224 19.1393 12.901 20.0033 10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 12.136 19.83 14.116 18.69 15.74L15.5 10H18.5C18.4998 8.15621 17.8628 6.36906 16.6967 4.94089C15.5305 3.51272 13.9069 2.53119 12.1003 2.16236C10.2938 1.79352 8.41533 2.06002 6.78268 2.91677C5.15002 3.77351 3.86342 5.16791 3.14052 6.86408C2.41762 8.56025 2.30281 10.4541 2.81549 12.2251C3.32818 13.9962 4.43689 15.5358 5.95408 16.5836C7.47127 17.6313 9.30379 18.1228 11.1416 17.9749C12.9795 17.827 14.7099 17.0488 16.04 15.772L17.037 17.567Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-size-regular text-color-grey--500 text-weight-medium">
                    Resend the code in
                  </div>
                  <div className="text-size-regular text-weight-medium text-color-gold">
                    2.34s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPValidation;
