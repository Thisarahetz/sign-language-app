import moment from "moment";
import "moment-timezone";
import { PhotoProvider, PhotoView } from "react-photo-view";

type Files = {
  path: string;
  name: string;
};

type Documents = {
  doc_type: string;
  is_approved: boolean;
  user_id: number;
  expiry_days: string | Date;
  file: Files;
};

type Props = {
  userData: Documents[];
  handleEdit: (value: Documents) => void;
};

export default function DriverDocumentsDetails({
  userData,
  handleEdit,
}: Props) {
  return (
    <div className="customer_details_grid_wrapper">
      {userData?.map((item, index) => (
        <div className="customer_details_row" key={item.doc_type}>
          <div className="customer_details_wrapper">
            <div className="details_text_wrapper">
              <div className="detail_title">Type</div>
              <div className="detail_value">{item.doc_type}</div>
            </div>
          </div>
          <div className="customer_details_wrapper">
            <div className="details_text_wrapper">
              <div className="detail_title">Expire Date</div>
              <div className="detail_value">
                {moment(item.expiry_days).format("YYYY-MM-DD")}
              </div>
            </div>
          </div>
          <div className="customer_details_wrapper">
            <div className="details_text_wrapper">
              <div className="detail_title">View</div>
              {item.file.name.split(".").pop() === "jpg" ||
              item.file.name.split(".").pop() === "jpeg" ||
              item.file.name.split(".").pop() === "png" ||
              item.file.name.split(".").pop() === "jfif" ||
              item.file.name.split(".").pop() === "jpeg" ? (
                <PhotoProvider>
                  <div className="foo">
                    <PhotoView src={item.file.path}>
                      <img
                        src={item.file.path}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </PhotoView>
                  </div>
                </PhotoProvider>
              ) : (
                <a
                  id="w-node-_36c87bdb-82bc-2721-2e66-6e958fbcfc25-cfb0ca4f"
                  href={item.file.path}
                  className="view_link w-inline-block"
                  target="_blank"
                >
                  <div
                    id="w-node-_36c87bdb-82bc-2721-2e66-6e958fbcfc26-cfb0ca4f"
                    className="view_icon w-embed"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0002 6C7.14499 6 4.89006 9.77258 4.09708 11.5534C3.96927 11.8405 3.96927 12.1595 4.09708 12.4466C4.89006 14.2274 7.14499 18 12.0002 18C16.8555 18 19.1103 14.2273 19.9031 12.4465C20.0309 12.1595 20.0309 11.8405 19.9031 11.5535C19.1103 9.77274 16.8555 6 12.0002 6ZM2.27002 10.7399C3.13935 8.78756 5.89147 4 12.0002 4C18.1091 4 20.861 8.78782 21.7302 10.7401C22.0885 11.5448 22.0885 12.4552 21.7302 13.2599C20.861 15.2122 18.1091 20 12.0002 20C5.89147 20 3.13935 15.2124 2.27002 13.2601C1.91162 12.4552 1.91162 11.5448 2.27002 10.7399Z"
                        fill="currentcolor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM11.9153 10.0018C11.9434 10.0006 11.9716 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 11.9716 10.0006 11.9434 10.0018 11.9153C10.1577 11.9701 10.3253 12 10.5 12C11.3284 12 12 11.3284 12 10.5C12 10.3253 11.9701 10.1577 11.9153 10.0018Z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </div>
                </a>
              )}
            </div>
            <div className="details_text_wrapper">
              <div className="detail_title">Approve</div>
              <div className="is-flex w-embed">
                <div className="toggle_btn_wrapper">
                  <input
                    className="toggle_checkbox"
                    type="checkbox"
                    id={`toggle-btn_1_${item.doc_type}`}
                    checked={item.is_approved}
                    onChange={(e) => {
                      handleEdit({
                        doc_type: item.doc_type,
                        is_approved: e.target.checked,
                        user_id: item.user_id,
                        expiry_days: item.expiry_days,
                        file: {
                          path: item.file.path,
                          name: item.file.name,
                        },
                      });
                    }}
                  />

                  <label
                    className="toggle_label"
                    htmlFor={`toggle-btn_1_${item.doc_type}`}
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="customer_details_row">
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Type</div>
            <div className="detail_value">{"userData?.name"}</div>
          </div>
        </div>
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">Expire Date</div>
            <div className="detail_value">{"userData?.phone_number"}</div>
          </div>
        </div>
        <div className="customer_details_wrapper">
          <div className="details_text_wrapper">
            <div className="detail_title">View</div>
            <div className="detail_value">{"userData?.gender"}</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
