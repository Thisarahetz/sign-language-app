import { useNavigate } from "react-router-dom";
import APP_ROUTE from "@constants/route"
import { useAppDispatch, useAppSelector } from "@hooks/Redux/index";
import { useEffect } from "react";
import { setMessage } from "@redux/AuthSlice";
import AuthErrorMessage from "@components/Common/ValidationMessages/Auth/Error";


interface initialValues {
  email: string;
  password: string;
}

interface SignInFormProps {
  values: initialValues;
  errors: any;
  touched: any;
  handleBlur: any;
  handleChange: any;
  handleSubmit: any;
}

function SignInForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}: SignInFormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.auth.message);

  useEffect(() => {
    dispatch(setMessage(""));
  }, []);

  return (
    <div className="page_wrapper">
      <div className="auth_component_wrapper">
        <div className="form">
          <div className="form_section is_last">
            <div className="form_title_wrapper">
              <h5 className="text_24 weight_500">Sign In</h5>
            </div>
            {message && <AuthErrorMessage message={message} />}
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Email</div>
                <div className="required">*</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="text"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <div className="error_text">{errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Password</div>
                <div className="required">*</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <div className="error_text">{errors.password}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="action_wrapper is_flex">
            <div className="form_link_wrapper">
              <a
                href="#"
                className="form_link w-inline-block"
                onClick={() => {
                  navigate(APP_ROUTE.FORGOT_PASSWORD);
                }}
              >
                <div className="text_14 weight_500">Forgot Password?</div>
              </a>
            </div>
            <a
              href="#"
              className="btn_base w-inline-block"
              onClick={() => {
                handleSubmit();
              }}
            >
              <div>Login</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
