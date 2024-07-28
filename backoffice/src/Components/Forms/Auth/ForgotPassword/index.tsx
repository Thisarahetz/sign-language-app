import APP_ROUTES from "@src/Constants/route";
import { useNavigate } from "react-router-dom";


interface initialValues {
  email: string;
}

interface ForgotPasswordFormProps {
  values: initialValues;
  errors: any;
  touched: any;
  handleBlur: any;
  handleChange: any;
  handleSubmit: any;
}

function ForgotPasswordForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}: ForgotPasswordFormProps) {
  const navigate = useNavigate();
  return (
    <div className="page_wrapper">
      <div className="auth_component_wrapper">
        <div className="form">
          <div className="form_section is_last">
            <div className="form_title_wrapper">
              <h5 className="text_24 weight_500">Forgot Password </h5>
            </div>
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Email</div>
                <div className="required">*</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="email"
                  placeholder="Enter your email"
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
          </div>
          <div className="action_wrapper is_flex_end">
            <a
              href="#"
              className="btn_base is_secondary w-inline-block"
              onClick={() => {
                navigate(APP_ROUTES.SIGNIN);
              }}
            >
              <div>Back</div>
            </a>
            <a
              href="#"
              className="btn_base w-inline-block"
              onClick={() => {
                handleSubmit();
              }}
            >
              <div>Submit</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
