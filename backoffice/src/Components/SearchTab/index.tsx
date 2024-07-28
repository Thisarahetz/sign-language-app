import { DatePicker } from "@components/Common/DatePicker";
import TimerPicker from "@components/Common/TimePicker";
import LocationDropDownModel from "@components/Modals/DropMap";
import LocationPickUpModel from "@components/Modals/PickUpMap";
import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import { SERVICE, setServiceType } from "@redux/OrderSlice";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate, useSearchParams } from "react-router-dom";
import APP_ROUTES from "@src/Constants/route";

export default function SearchTab() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { scheduled_date, pickup_address, drop_address, service_type } =
    useAppSelector((state) => state.order);
  const [isLocationPickUpModelOpen, setIsLocationPickUpModelOpen] =
    useState(false);
  const [isLocationDropDownModelOpen, setIsLocationDropDownModelOpen] =
    useState(false);

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenDatePicker(true);
  };
  const handleClose = () => {
    setOpenDatePicker(false);
    setAnchorEl(null);
  };
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (service_type === SERVICE.TOWING) {
      setSelectedTab(0);
    } else {
      setSelectedTab(1);
    }
  }, []);

  return (
    <>
      <div className="form_container">
        <h5 className="heading-style-h5 text-weight-bold">
          Select order details
        </h5>
        <div className="spacer-custom2"></div>
        <div className="form_tabs">
          <ul className="tabs-nav">
            <li
              className="tabs-nav-item"
              onClick={() => {
                dispatch(setServiceType(SERVICE.TOWING));
                setSelectedTab(0);
              }}
            >
              <a
                className={`tabs-nav-item-inner-wrapper ${
                  selectedTab === 0 ? "tab-active" : ""
                }`}
              >
                <div className="tabs-nav-item-inner">
                  <div className="icon-1x1-small w-embed">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 7C2.5 5.34315 3.84315 4 5.5 4H10.5C12.1569 4 13.5 5.34315 13.5 7V16C13.5 17.1046 12.6046 18 11.5 18H8.5V16H11.5V7C11.5 6.44772 11.0523 6 10.5 6H5.5C4.94772 6 4.5 6.44772 4.5 7V15C4.5 15.5523 4.94772 16 5.5 16H6.5V18H5.5C3.84315 18 2.5 16.6569 2.5 15V7Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 7H16.7251C17.4729 7 18.1938 7.27929 18.7464 7.78313L21.5213 10.3132C22.1447 10.8816 22.5 11.6863 22.5 12.5301V15C22.5 16.6569 21.1569 18 19.5 18H18.5V16H19.5C20.0523 16 20.5 15.5523 20.5 15V12.5301C20.5 12.2488 20.3816 11.9806 20.1738 11.7911L17.3989 9.26104C17.2147 9.0931 16.9744 9 16.7251 9H13.5V16H16.5V18H11.5V7Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.5 17C8.5 17.5523 8.05228 18 7.5 18C6.94772 18 6.5 17.5523 6.5 17C6.5 16.4477 6.94772 16 7.5 16C8.05228 16 8.5 16.4477 8.5 17ZM10.5 17C10.5 18.6569 9.15685 20 7.5 20C5.84315 20 4.5 18.6569 4.5 17C4.5 15.3431 5.84315 14 7.5 14C9.15685 14 10.5 15.3431 10.5 17ZM18.5 17C18.5 17.5523 18.0523 18 17.5 18C16.9477 18 16.5 17.5523 16.5 17C16.5 16.4477 16.9477 16 17.5 16C18.0523 16 18.5 16.4477 18.5 17ZM20.5 17C20.5 18.6569 19.1569 20 17.5 20C15.8431 20 14.5 18.6569 14.5 17C14.5 15.3431 15.8431 14 17.5 14C19.1569 14 20.5 15.3431 20.5 17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>Towing</div>
                </div>
              </a>
            </li>
            <li
              className="tabs-nav-item"
              onClick={() => {
                dispatch(setServiceType(SERVICE.ROADSIDE));
                setSelectedTab(1);
              }}
            >
              <a
                className={`tabs-nav-item-inner-wrapper ${
                  selectedTab === 1 ? "tab-active" : ""
                }`}
              >
                <div className="tabs-nav-item-inner">
                  <div className="icon-1x1-small w-embed">
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
                        d="M12.5 2C13.1894 2 13.8136 2.27905 14.2659 2.73036C14.2834 2.74784 14.3007 2.76559 14.3177 2.78358C14.7174 3.20678 14.971 3.76953 14.9977 4.39107L14.9985 4.41205C14.9995 4.44124 15 4.47056 15 4.5V4.51426C15 4.55491 15.0247 4.59145 15.0623 4.60702C15.0998 4.62261 15.1431 4.61423 15.1719 4.58546L15.182 4.57538C15.2028 4.55456 15.2239 4.53419 15.2452 4.51426L15.2607 4.5C15.719 4.07934 16.2962 3.86073 16.8782 3.84417C16.9029 3.84346 16.9277 3.84312 16.9524 3.84315C17.5913 3.84382 18.23 4.0879 18.7175 4.57538L19.4246 5.28249C19.9121 5.76997 20.1562 6.40868 20.1569 7.0476C20.1569 7.07234 20.1565 7.09709 20.1558 7.12182C20.1393 7.70375 19.9207 8.281 19.5 8.73935L19.4857 8.75476C19.4658 8.77611 19.4454 8.7972 19.4246 8.81802L19.4145 8.82811C19.3858 8.85687 19.3774 8.90017 19.393 8.93775C19.4085 8.97529 19.4451 9 19.4857 9H19.5C19.5294 9 19.5588 9.00051 19.5879 9.00152L19.6089 9.00233C20.2305 9.02898 20.7932 9.28257 21.2164 9.68233C21.2344 9.69933 21.2522 9.71659 21.2696 9.73411C21.721 10.1864 22 10.8106 22 11.5V12.5C22 13.1894 21.721 13.8136 21.2696 14.2659C21.2522 14.2834 21.2344 14.3007 21.2164 14.3177C20.7932 14.7174 20.2305 14.971 19.6089 14.9977L19.5879 14.9985C19.5588 14.9995 19.5294 15 19.5 15H19.4857C19.4451 15 19.4085 15.0247 19.393 15.0623C19.3774 15.0998 19.3858 15.1431 19.4145 15.1719L19.4246 15.182C19.4454 15.2028 19.4658 15.2239 19.4857 15.2452L19.5 15.2607C19.9207 15.719 20.1393 16.2962 20.1558 16.8782C20.1565 16.9029 20.1569 16.9277 20.1569 16.9524C20.1562 17.5913 19.9121 18.23 19.4246 18.7175L18.7175 19.4246C18.23 19.9121 17.5913 20.1562 16.9524 20.1568C16.9277 20.1569 16.9029 20.1565 16.8782 20.1558C16.2963 20.1393 15.719 19.9207 15.2607 19.5L15.2452 19.4857C15.2239 19.4658 15.2028 19.4454 15.182 19.4246L15.1719 19.4145C15.1431 19.3858 15.0998 19.3774 15.0623 19.393C15.0247 19.4085 15 19.4451 15 19.4857V19.5C15 19.5294 14.9995 19.5588 14.9985 19.5879L14.9977 19.6089C14.971 20.2305 14.7174 20.7932 14.3177 21.2164C14.3007 21.2344 14.2834 21.2522 14.2659 21.2696C13.8136 21.7209 13.1894 22 12.5 22H11.5C10.8106 22 10.1864 21.7209 9.73411 21.2696C9.71659 21.2522 9.69933 21.2344 9.68233 21.2164C9.28257 20.7932 9.02898 20.2305 9.00233 19.6089L9.00152 19.5879C9.00051 19.5588 9 19.5294 9 19.5V19.4857C9 19.4451 8.97529 19.4085 8.93774 19.393C8.90017 19.3774 8.85687 19.3858 8.8281 19.4145L8.81802 19.4246C8.7972 19.4454 8.77611 19.4658 8.75475 19.4857L8.73934 19.5C8.281 19.9207 7.70375 20.1393 7.12182 20.1558C7.09708 20.1565 7.07234 20.1569 7.0476 20.1568C6.40868 20.1562 5.76997 19.9121 5.28249 19.4246L4.57538 18.7175C4.0879 18.23 3.84382 17.5913 3.84315 16.9524C3.84312 16.9277 3.84346 16.9029 3.84417 16.8782C3.86073 16.2962 4.07934 15.719 4.5 15.2607L4.51426 15.2452C4.53419 15.2239 4.55456 15.2028 4.57538 15.182L4.58546 15.1719C4.61423 15.1431 4.62261 15.0998 4.60702 15.0623C4.59145 15.0247 4.55491 15 4.51426 15H4.5C4.47056 15 4.44125 14.9995 4.41205 14.9985L4.39107 14.9977C3.76953 14.971 3.20678 14.7174 2.78358 14.3177C2.76558 14.3007 2.74784 14.2834 2.73036 14.2659C2.27905 13.8136 2 13.1894 2 12.5V11.5C2 10.8106 2.27905 10.1864 2.73036 9.73411C2.74784 9.71659 2.76558 9.69933 2.78358 9.68233C3.20678 9.28257 3.76953 9.02898 4.39107 9.00233L4.41205 9.00152C4.44125 9.00051 4.47056 9 4.5 9H4.51426C4.55491 9 4.59145 8.97529 4.60702 8.93775C4.62261 8.90017 4.61423 8.85687 4.58546 8.82811L4.57538 8.81802C4.55456 8.7972 4.53419 8.77611 4.51426 8.75476L4.5 8.73935C4.07934 8.281 3.86073 7.70375 3.84417 7.12182C3.84346 7.09709 3.84312 7.07234 3.84315 7.0476C3.84382 6.40868 4.0879 5.76997 4.57538 5.28249L5.28249 4.57538C5.76997 4.0879 6.40868 3.84382 7.0476 3.84315C7.07234 3.84312 7.09709 3.84346 7.12182 3.84417C7.70375 3.86073 8.281 4.07934 8.73934 4.5L8.75476 4.51426C8.77611 4.53419 8.7972 4.55456 8.81802 4.57538L8.8281 4.58546C8.85687 4.61423 8.90017 4.62261 8.93775 4.60702C8.97529 4.59145 9 4.55491 9 4.51426V4.5C9 4.47056 9.00051 4.44124 9.00152 4.41205L9.00233 4.39107C9.02898 3.76953 9.28257 3.20678 9.68233 2.78358C9.69933 2.76559 9.71659 2.74784 9.73411 2.73036C10.1864 2.27905 10.8106 2 11.5 2H12.5ZM11 19.5C11 19.7761 11.2239 20 11.5 20H12.5C12.7761 20 13 19.7761 13 19.5V19.4857C13 18.6262 13.5212 17.8669 14.2962 17.5455C15.0727 17.2235 15.9787 17.3929 16.5861 18.0003L16.5962 18.0104C16.7915 18.2057 17.108 18.2057 17.3033 18.0104L18.0104 17.3033C18.2057 17.108 18.2057 16.7915 18.0104 16.5962L18.0003 16.5861C17.3929 15.9787 17.2235 15.0727 17.5455 14.2961C17.8669 13.5212 18.6262 13 19.4857 13H19.5C19.7761 13 20 12.7761 20 12.5V11.5C20 11.2239 19.7761 11 19.5 11H19.4857C18.6262 11 17.8669 10.4788 17.5455 9.70385C17.2235 8.92727 17.3929 8.02132 18.0003 7.41389L18.0104 7.40381C18.2057 7.20854 18.2057 6.89196 18.0104 6.6967L17.3033 5.98959C17.108 5.79433 16.7915 5.79433 16.5962 5.98959L16.5861 5.99968C15.9787 6.60711 15.0727 6.77651 14.2962 6.45448C13.5212 6.13311 13 5.37381 13 4.51426V4.5C13 4.22386 12.7761 4 12.5 4H11.5C11.2239 4 11 4.22386 11 4.5V4.51426C11 5.37381 10.4788 6.13311 9.70384 6.45448C8.92725 6.77651 8.02132 6.60711 7.41389 5.99968L7.40381 5.98959C7.20854 5.79433 6.89196 5.79433 6.6967 5.98959L5.98959 6.6967C5.79433 6.89196 5.79433 7.20854 5.98959 7.40381L5.99967 7.41389C6.60711 8.02132 6.77651 8.92727 6.45448 9.70385C6.13311 10.4788 5.37382 11 4.51426 11H4.5C4.22386 11 4 11.2239 4 11.5V12.5C4 12.7761 4.22386 13 4.5 13H4.51426C5.37382 13 6.13311 13.5212 6.45447 14.2961C6.77651 15.0727 6.60711 15.9787 5.99968 16.5861L5.98959 16.5962C5.79433 16.7915 5.79433 17.108 5.98959 17.3033L6.6967 18.0104C6.89196 18.2057 7.20854 18.2057 7.4038 18.0104L7.41389 18.0003C8.02132 17.3929 8.92726 17.2235 9.70384 17.5455C10.4788 17.8669 11 18.6262 11 19.4857V19.5Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>Road side assistance</div>
                </div>
              </a>
            </li>
          </ul>
          <div className="tabs-stage">
            {selectedTab === 0 ? (
              <div id="tab-1">
                <form className="form-wrapper">
                  <div
                    id="w-node-_91d38349-a0cd-0774-c2c8-71799fa6c1d1-93a7aab7"
                    className="form_input is-select-input-calendar"
                    onClick={(e) => handleOpen(e)}
                  >
                    <div className="form_select-option">
                      {scheduled_date
                        ? format(scheduled_date, "yyyy/dd/MM")
                        : "Schedule"}
                    </div>
                  </div>
                  <DatePicker
                    anchorEl={anchorEl}
                    open={openDatePicker}
                    handleClose={() => handleClose()}
                  />
                  <TimerPicker />
                  <input
                    id="w-node-_54c5bcdf-adfa-ee8f-a469-1d88422237af-7c3505c8"
                    className="form_input is-with-bg_img"
                    type="text"
                    name="location"
                    placeholder="Enter pick up location"
                    defaultValue={pickup_address}
                    readOnly
                    onClick={() => setIsLocationPickUpModelOpen(true)}
                  />
                  <input
                    id="w-node-_54c5bcdf-adfa-ee8f-a469-1d88422237b0-7c3505c8"
                    className="form_input is-with-bg_img is-alt"
                    type="text"
                    name="location"
                    placeholder="Enter drop off location"
                    defaultValue={drop_address}
                    readOnly
                    onClick={() => setIsLocationDropDownModelOpen(true)}
                  />

                  <input
                    id="w-node-_54c5bcdf-adfa-ee8f-a469-1d88422237b1-7c3505c8"
                    className={`btn_base ${
                      pickup_address === "" || drop_address === ""
                        ? "is_disabled"
                        : ""
                    }`}
                    type="button"
                    value="Get a quote"
                    onClick={() => {
                      if (!pickup_address || !drop_address) {
                        return;
                      }

                      navigate({
                        pathname: APP_ROUTES.ORDER_ADD_QUESTION,
                        search: `callbackUrl=${searchParams.get(
                          "callbackUrl"
                        )}`,
                      });
                    }}
                  />
                </form>
              </div>
            ) : (
              <div id="tab-2">
                <form className="form-wrapper">
                  <div
                    id="w-node-_91d38349-a0cd-0774-c2c8-71799fa6c1d1-93a7aab7"
                    className="form_input is-select-input-calendar"
                    onClick={(e) => handleOpen(e)}
                  >
                    <div className="form_select-option">
                      {scheduled_date
                        ? format(scheduled_date, "yyyy/dd/MM")
                        : "Schedule"}
                    </div>
                  </div>
                  <DatePicker
                    anchorEl={anchorEl}
                    open={openDatePicker}
                    handleClose={() => handleClose()}
                  />
                  <TimerPicker />
                  <input
                    id="w-node-_54c5bcdf-adfa-ee8f-a469-1d88422237af-7c3505c8"
                    className="form_input is-with-bg_img"
                    type="text"
                    name="location"
                    placeholder="Enter pick up location"
                    readOnly
                    defaultValue={pickup_address}
                    onClick={() => setIsLocationPickUpModelOpen(true)}
                  />
                  <input
                    id="w-node-_54c5bcdf-adfa-ee8f-a469-1d88422237b1-7c3505c8"
                    className={`btn_base ${
                      pickup_address === "" ? "is_disabled" : ""
                    }`}
                    type="button"
                    value="Get a quote"
                    onClick={() => {
                      if (!pickup_address) {
                        return;
                      }

                      navigate({
                        pathname: APP_ROUTES.ORDER_ADD_QUESTION,
                        search: `callbackUrl=${searchParams.get(
                          "callbackUrl"
                        )}`,
                      });
                    }}
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <LocationDropDownModel
        onClose={() => setIsLocationDropDownModelOpen(false)}
        open={isLocationDropDownModelOpen}
      />
      <LocationPickUpModel
        onClose={() => setIsLocationPickUpModelOpen(false)}
        open={isLocationPickUpModelOpen}
      />
    </>
  );
}
