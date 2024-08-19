import PhoneInputField from "@components/Common/Input/PhoneNo";
import React from "react";

interface initialValues {
  title: string;
 name: string;
  overview: string;
  video: string;

}
interface FormProps {
  values: initialValues;
  errors: any;
  touched: any;
  handleBlur: any;
  handleChange: any;
  Children?: React.ReactNode;
  setFieldValue?: any;
  isEdit: boolean;
}

function ResourceForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  Children,
  setFieldValue,
  isEdit,
}: FormProps) {
  return (
    <div className="form_container">
      <div className="form">
        <div className="form_section is_last">
          <div className="form_title_wrapper">
            <h5 className="text_24 weight_500">
              {isEdit ? "Edit Module" : "Add Module"}
            </h5>
          </div>

          <div className="form_group">
            <div className="form_lable_wrapper">
              <div className="text_13 weight_500">Title</div>
            </div>
            <div className="form_input-wrapper w-embed">
              <input
                className="form_input"
                type="text"
                placeholder="Enter title"
                id="title"
                name="title"
                data-name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title ? (
                <div className="error_text">{errors.title}</div>
              ) : null}
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Name</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="text"
                  placeholder="Enter name"
                  id="name"
                  name="name"
                  data-name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <div className="error_text">{errors.name}</div>
                ) : null}
              </div>
            </div>
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Overview</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="text"
                  placeholder="Enter overview"
                  id="overview"
                  name="overview"
                  data-name="overview"
                  value={values.overview}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.overview && touched.overview ? (
                  <div className="error_text">{errors.overview}</div>
                ) : null}
              </div>
              </div>

            
          </div>
          <div className="form_group">
            <div className="form_lable_wrapper">
              <div className="text_13 weight_500">Video</div>
            </div>
            <div className="form_input-wrapper w-embed">
              <input
                className="form_input"
                type="text"
                placeholder="Enter video"
                id="video"
                name="video"
                data-name="video"
                value={values.video}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.video && touched.video ? (
                <div className="error_text">{errors.video}</div>
              ) : null}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceForm;
