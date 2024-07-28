interface initialValues {
    newPassword: string;
    confirmPassword: string;
  }
  interface NewPasswordFormProps {
    values: initialValues;
    errors: any;
    touched: any;
    handleBlur: any;
    handleChange: any;
    handleSubmit: any;
  }
  
  function NewPasswordForm({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  }: NewPasswordFormProps) {
    return (
      <div className="page_wrapper">
        <div className="auth_component_wrapper">
          <div className="form">
            <div className="form_section is_last">
              <div className="form_title_wrapper">
                <h5 className="text_24 weight_500">Change Password</h5>
              </div>
              <div className="form_group">
                <div className="form_lable_wrapper">
                  <div className="text_13 weight_500">New Password</div>
                  <div className="required">*</div>
                </div>
                <div className="form_input-wrapper w-embed">
                  <input
                    className="form_input"
                    type="password"
                    placeholder="Enter new password"
                    id="newPassword"
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.newPassword && touched.newPassword ? (
                    <div className="error_text">{errors.newPassword}</div>
                  ) : null}
                </div>
              </div>
              <div className="form_group">
                <div className="form_lable_wrapper">
                  <div className="text_13 weight_500">Confirm Password</div>
                  <div className="required">*</div>
                </div>
                <div className="form_input-wrapper w-embed">
                  <input
                    className="form_input"
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error_text">{errors.confirmPassword}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="action_wrapper is_flex_end">
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
  
  export default NewPasswordForm;
  