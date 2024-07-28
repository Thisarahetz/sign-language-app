interface CustomSettingCardProps {
  isDefault?: boolean;
  values: {
    section: string;
    nested_section: string;
    type: number;
    charge: number;
    use_default: true;
  };
  handleChange: (
    value: any,
    section: string,
    field: string,
    nested_section?: string
  ) => void;
}

export default function CustomSettingCard({
  isDefault = false,
  values,
  handleChange,
}: CustomSettingCardProps) {
  return (
    <>
      {!isDefault && (
        <div className="toggle_btn_wrapper ">
          Use Default Setting
          <input
            className="toggle_checkbox"
            type="checkbox"
            id={`toggle-btn_1_${values.section}_${values.nested_section}`}
            checked={values.use_default}
            onChange={(e) => {
              handleChange(
                !values.use_default,
                values.section,
                "use_default",
                values.nested_section
              );
            }}
          />
          <label
            className="toggle_label"
            htmlFor={`toggle-btn_1_${values.section}_${values.nested_section}`}
          ></label>
        </div>
      )}
      {(!values.use_default || isDefault) && (
        <div className="not-default-settings-wrapper">
          <input
            className="form_input"
            type="number"
            placeholder="Enter service charge"
            id="charge"
            name="charge"
            data-name="charge"
            value={values?.charge}
            onChange={(e) => {
              handleChange(
                e.target.value,
                values.section,
                "charge",
                values.nested_section
              );
            }}
          />

          <div className="car-config-radio-wrappers">
            <div className="is-flex-center w-embed">
              Flat charge{" "}
              <div className="round_checkbox car-config-radio-margin">
                <input
                  type="checkbox"
                  id={`actionToggle1_${values.section}_${values.nested_section}`}
                  checked={values.type === 0}
                  value={0}
                  onChange={(e) => {
                    handleChange(
                      Number(e.target.value),
                      values.section,
                      "type",
                      values.nested_section
                    );
                  }}
                />
                <label
                  htmlFor={`actionToggle1_${values.section}_${values.nested_section}`}
                ></label>
              </div>
            </div>
            <div className="is-flex-center w-embed">
              Precentage charge{" "}
              <div className="round_checkbox car-config-radio-margin">
                <input
                  type="checkbox"
                  id={`actionToggle2__${values.section}_${values.nested_section}`}
                  value={1}
                  checked={values.type === 1}
                  onChange={(e) => {
                    handleChange(
                      Number(e.target.value),
                      values.section,
                      "type",
                      values.nested_section
                    );
                  }}
                />
                <label
                  htmlFor={`actionToggle2__${values.section}_${values.nested_section}`}
                ></label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
