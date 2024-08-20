import PhoneInputField from "@components/Common/Input/PhoneNo";
import React from "react";

interface initialValues {
  title: string;
  overview: string;
  category: "topic" | "grammar" | "game";
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

function ModuleForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  Children,
  setFieldValue,
  isEdit,
}: UserFormProps) {
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
                onChange={
                  handleChange

                }
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
                <div className="text_13 weight_500">Overview</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <input
                  className="form_input"
                  type="text"
                  placeholder="Enter Overview"
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
            <div className="form_group">
              <div className="form_lable_wrapper">
                <div className="text_13 weight_500">Category</div>
              </div>
              <div className="form_input-wrapper w-embed">
                <select
                  className="form_input"
                  id="category"
                  name="category"
                  data-name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}

                >
                  <option value="">Select</option>
                  <option value="topic">Topic</option>
                  <option value="grammar">Grammar</option>
                  <option value="game">Game</option>
                </select>
              </div>
              {errors.category && touched.category ? (
                <div className="error_text">{errors.category}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleForm;
