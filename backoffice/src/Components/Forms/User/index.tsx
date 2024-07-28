import PhoneInputField from "@components/Common/Input/PhoneNo";
import React from "react";

interface initialValues {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  is_admin_disabled?: boolean;
}
interface UserFormProps {
  values: initialValues;
  errors: any;
  touched: any;
  handleBlur: any;
  handleChange: any;
  Children?: React.ReactNode;
  setFieldValue?: any;
  isEdit: boolean;
}

function UserForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  Children,
  setFieldValue,
  isEdit 
}: UserFormProps) {
  return (
    <div className="form_container">
      <div className="form">
        <div className="form_section is_last">
          <div className="form_title_wrapper">
            <h5 className="text_24 weight_500">{isEdit ? "Edit Customer" :"Add Customer"}</h5>
          </div>
          {isEdit && (
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">User Config</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <div className="toggle_btn_wrapper ">
                  Disable User
                  <input
                    className="toggle_checkbox"
                    type="checkbox"
                    id={`toggle-btn_1_disable_user`}
                    checked={values?.is_admin_disabled}
                    onChange={(e) => {
                      setFieldValue("is_admin_disabled", e.target.checked);
                    }}
                  />
                  <label
                    className="toggle_label"
                    htmlFor={`toggle-btn_1_disable_user`}
                  ></label>
                </div>
              </div>
            </div>
          )}
          <div className="form_group">
            <div className="form_lable_wrapper">
              <div className="text_13 weight_500">Email</div>
            </div>
            <div className="form_input-wrapper w-embed">
              <input
                className="form_input"
                type="text"
                placeholder="Enter email"
                id="email"
                name="email"
                data-name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <div className="error_text">{errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">First Name</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="text"
                  placeholder="Enter First Name"
                  id="first_name"
                  name="first_name"
                  data-name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.first_name && touched.first_name ? (
                  <div className="error_text">{errors.first_name}</div>
                ) : null}
              </div>
            </div>
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Last Name</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="text"
                  placeholder="Enter Last Name"
                  id="last_name"
                  name="last_name"
                  data-name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.last_name && touched.last_name ? (
                  <div className="error_text">{errors.last_name}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Phone</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <PhoneInputField
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                />
                {errors.phone_number && touched.phone_number ? (
                  <div className="error_text">{errors.phone_number}</div>
                ) : null}
              </div>
            </div>
          </div>
          {Children}
        </div>
      </div>
    </div>
  );
}

export default UserForm;
