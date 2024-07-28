import UserImageUploadZone from "@components/Common/CustomImageUploadZone";

interface initialValues {
  newPassword: string;
  currentPassword: string;
}

interface MyAccountFormProps {
  userName: string;
  email: string;
  values: initialValues;
  errors: any;
  touched: any;
  handleBlur: any;
  handleChange: any;
  files: any;
  setFiles: any;
}

function MyAccountForm({
  userName,
  email,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  files,
  setFiles,
}: MyAccountFormProps) {
  return (
    <div className="form">
      <div className="form_container">
        <div className="enquiries_details_wrapper">
          <div className="form_section is_last">
            {/* <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_14 weight_500 color_gray_3">
                  Profile Picture
                </div>
              </div>
              <UserImageUploadZone files={files} setFiles={setFiles} />
            </div> */}
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_14 weight_500 color_gray_3">Username</div>
              </div>
              <div className="form_value_wrapper">
                <div className="text_14 weight_500">{userName}</div>
              </div>
            </div>
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_14 weight_500 color_gray_3">Email</div>
              </div>
              <div className="form_value_wrapper">
                <div className="text_14 weight_500">
                  {email}
                  <br />
                </div>
              </div>
            </div>

            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_16 weight_600">
                  <strong>
                    Only enter a password if you would like to set a new one
                  </strong>
                  <br />
                </div>
              </div>
            </div>
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_14 weight_500 color_gray_3">
                  Current Password
                </div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="password"
                  placeholder="Enter password"
                  id="currentPassword"
                  name="currentPassword"
                  data-name="currentPassword"
                  value={values.currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.currentPassword && touched.currentPassword ? (
                  <div className="error_text">{errors.currentPassword}</div>
                ) : null}
              </div>
            </div>
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_14 weight_500 color_gray_3">
                  New Password
                </div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="password"
                  placeholder="New password"
                  id="newPassword"
                  name="newPassword"
                  data-name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newPassword && touched.newPassword ? (
                  <div className="error_text">{errors.newPassword}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountForm;
