import { NavLink, useNavigate } from "react-router-dom";
import {
  DASHBOARD_CONTENTS,
  DASHBOARD_CONTENTS_KEYS,
} from "@constants/dashboard";
import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import Layout from "@components/Common/Layout";
import SideBar from "@components/Common/SideBar";
import { setIsActive } from "@redux/DrawerSlice";
import APP_ROUTES from "@src/Constants/route";
import { clearCustomerAndCoClientID } from "@redux/OrderSlice";

const DASHBOARD_FIRST_SECTION = [
  {
    title: DASHBOARD_CONTENTS.MANAGEMENT_LEARN,
    icon: "/images/Drivers.svg",
    key: DASHBOARD_CONTENTS_KEYS.MANAGEMENT_ORDERS_KEY,
    route: APP_ROUTES.CUSTOMER,
    dropdown: [
      {
        title: DASHBOARD_CONTENTS.MANAGEMENT_MODULE,
        icon: "/images/Drivers.svg",
        key: DASHBOARD_CONTENTS_KEYS.MANAGEMENT_ORDERS_CUSTOMER_KEY,
        route: APP_ROUTES.ORDER_CUSTOMER,
      },

      {
        title: DASHBOARD_CONTENTS.MANAGEMENT_DRIVERS_ORDERS,
        icon: "/images/Drivers.svg",
        key: DASHBOARD_CONTENTS_KEYS.MANAGEMENT_ORDERS_MANAGE_KEY,
        route: APP_ROUTES.ORDER_DRIVER,
      },
    ],
  },
 
];

const DASHBOARD_SECOND_SECTION = [
  {
    title: DASHBOARD_CONTENTS.CONFIGURATIONS_SETTINGS,
    icon: "/images/Drivers.svg",
    key: DASHBOARD_CONTENTS_KEYS.CONFIGURATIONS_SETTINGS_KEY,
    route: APP_ROUTES.SETTING,
    dropdown: [
      {
        title: DASHBOARD_CONTENTS.CONFIGURATIONS_SETTINGS_MANAGE,
        icon: "/images/Drivers.svg",
        key: DASHBOARD_CONTENTS_KEYS.CONFIGURATIONS_SETTINGS_MANAGE_KEY,
        route: APP_ROUTES.SETTING,
      },
      {
        title: DASHBOARD_CONTENTS.CONFIGURATIONS_APP_SETTINGS,
        icon: "/images/Drivers.svg",
        key: DASHBOARD_CONTENTS_KEYS.CONFIGURATIONS_APP_SETTINGS_KEY,
        route: APP_ROUTES.APP_SETTINGS,
      
      },
    ],
  },
  {
    title: DASHBOARD_CONTENTS.CONFIGURATIONS_USER,
    icon: "/images/Drivers.svg",
    key: DASHBOARD_CONTENTS_KEYS.CONFIGURATIONS_USER_KEY,
    route: APP_ROUTES.USERS,
    dropdown: [
      {
        title: DASHBOARD_CONTENTS.CONFIGURATIONS_USER_MANAGE,
        icon: "/images/Drivers.svg",
        key: DASHBOARD_CONTENTS_KEYS.CONFIGURATIONS_USER_MANAGE_KEY,
        route: APP_ROUTES.USERS,
      },
    ],
  },
];

const DASHBOARD_LAST_SECTION = [
  {
    title: DASHBOARD_CONTENTS.REPORT,
    icon: "/images/Reports.svg",
    key: DASHBOARD_CONTENTS_KEYS.REPORT_KEY,
    route: APP_ROUTES.DRIVERS,
    dropdown: [
      {
        title: DASHBOARD_CONTENTS.MANAGEMENT_REPORT_CUSTOMER,
        icon: "/images/Drivers.svg",
        key: DASHBOARD_CONTENTS_KEYS.MANAGEMENT_TOP_CLIENT_REPORT_KEY,
        route: APP_ROUTES.REPORT_CLIENT,
      },
      {
        title: DASHBOARD_CONTENTS._MANAGEMENT_REPORT_DRIVER,
        icon: "/images/Reports.svg",
        key: DASHBOARD_CONTENTS_KEYS.MANAGEMENT_REPORT_DRIVER_KEY,
        route: APP_ROUTES.REPORT_DRIVER,
      },
      {
        title: DASHBOARD_CONTENTS.TOWING_JOBS_MANAGE,
        icon: "/images/Reports.svg",
        key: DASHBOARD_CONTENTS_KEYS.MANAGEMENT_REPORT_Job_KEY,
        route: APP_ROUTES.REPORT_JOB,
      },
      {
        title: DASHBOARD_CONTENTS.MANAGEMENT_REPORT_REVENUE,
        icon: "/images/Reports.svg",
        key: DASHBOARD_CONTENTS_KEYS.MANAGEMENT_REPORT_REVENUE_KEY,
        route: APP_ROUTES.REPORT_REVENUE,
      },
    ],
  },
];

function SuperAdminDashBoard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activeItem = useAppSelector((state) => state.drawer.isActive);

  //   function FeatureInformationsActive() {
  //     const validConfigurations = [
  //         DASHBOARD_CONTENTS_KEYS.MANAGEMENT_FEATURE_INFORMATIONS_ACTIVITIES_KEY,
  //         DASHBOARD_CONTENTS_KEYS.MANAGEMENT_FEATURE_INFORMATIONS_BLOOD_SUGAR_KEY,
  //         DASHBOARD_CONTENTS_KEYS.MANAGEMENT_FEATURE_INFORMATIONS_HBA1C_KEY,
  //         DASHBOARD_CONTENTS_KEYS.MANAGEMENT_FEATURE_INFORMATIONS_BLOOD_PRESSURE_KEY,
  //         DASHBOARD_CONTENTS_KEYS.MANAGEMENT_FEATURE_INFORMATIONS_CHOLESTEROL_KEY,
  //         DASHBOARD_CONTENTS_KEYS.MANAGEMENT_FEATURE_INFORMATIONS_KIDNEY_FUNCTION_KEY,
  //     ];

  //     return validConfigurations.includes(activeItem);
  //   }

  return (
    <Layout
      sidebar={
        <SideBar
          sideBarSectionFirst={
            <>
              {DASHBOARD_FIRST_SECTION.map((item, index) => {
                return (
                  <div className="sidebar_dropdown" key={`index${index}`}>
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="dropdown-wrapper sidebar-dropdown w-dropdown"
                    >
                      <div
                        className="dropdown-toggle-2 sidebar-dropdown w-dropdown-toggle"
                        onClick={() => {
                          // navigate(item.route);
                        }}
                      >
                        <div className="menu_icon w-embed">
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
                              d="M14.6911 2.11058C14.2284 1.9995 13.7487 1.99973 13.1137 2.00003L9.7587 2.00006C8.95373 2.00005 8.28937 2.00004 7.74818 2.04426C7.18608 2.09018 6.66937 2.18875 6.18404 2.43604C5.43139 2.81953 4.81947 3.43145 4.43598 4.1841C4.18868 4.66944 4.09012 5.18614 4.04419 5.74824C3.99998 6.28943 3.99999 6.95378 4 7.75875V16.2414C3.99999 17.0463 3.99998 17.7107 4.04419 18.2519C4.09012 18.814 4.18868 19.3307 4.43598 19.816C4.81947 20.5687 5.43139 21.1806 6.18404 21.5641C6.66937 21.8114 7.18608 21.9099 7.74818 21.9559C8.28937 22.0001 8.95372 22.0001 9.75868 22.0001H14.2413C15.0463 22.0001 15.7106 22.0001 16.2518 21.9559C16.8139 21.9099 17.3306 21.8114 17.816 21.5641C18.5686 21.1806 19.1805 20.5687 19.564 19.816C19.8113 19.3307 19.9099 18.814 19.9558 18.2519C20 17.7107 20 17.0463 20 16.2414L20 8.8864C20.0003 8.25142 20.0006 7.77161 19.8895 7.30892C19.7915 6.90078 19.6299 6.5106 19.4106 6.15271C19.1619 5.74699 18.8225 5.40788 18.3733 4.95909L17.041 3.62678C16.5922 3.17756 16.2531 2.83813 15.8474 2.5895C15.4895 2.37019 15.0993 2.20857 14.6911 2.11058ZM13 4.00006H9.8C8.94342 4.00006 8.36113 4.00084 7.91104 4.03761C7.47262 4.07343 7.24842 4.13836 7.09202 4.21805C6.7157 4.4098 6.40973 4.71576 6.21799 5.09208C6.1383 5.24848 6.07337 5.47269 6.03755 5.9111C6.00078 6.36119 6 6.94348 6 7.80006V16.2001C6 17.0566 6.00078 17.6389 6.03755 18.089C6.07337 18.5274 6.1383 18.7516 6.21799 18.908C6.40973 19.2844 6.7157 19.5903 7.09202 19.7821C7.24842 19.8618 7.47262 19.9267 7.91104 19.9625C8.36113 19.9993 8.94342 20.0001 9.8 20.0001H14.2C15.0566 20.0001 15.6389 19.9993 16.089 19.9625C16.5274 19.9267 16.7516 19.8618 16.908 19.7821C17.2843 19.5903 17.5903 19.2844 17.782 18.908C17.8617 18.7516 17.9266 18.5274 17.9624 18.089C17.9992 17.6389 18 17.0566 18 16.2001V9H16C14.3431 9 13 7.65685 13 6V4.00006ZM17.5599 7C17.4397 6.8579 17.2478 6.66211 16.887 6.30128L15.6988 5.11306C15.3379 4.75218 15.1421 4.56026 15 4.44009V6C15 6.55228 15.4477 7 16 7H17.5599Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H13Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                        </div>
                        <div
                          className="text_14 weight_600"
                          onClick={() => navigate(item.route)}
                        >
                          {item.title}
                        </div>
                        <div className="menu_arrow w-embed">
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
                              d="M17.7071 8.29286C17.3166 7.90234 16.6834 7.90234 16.2929 8.29286L12 12.5858L7.70711 8.29286C7.31658 7.90234 6.68342 7.90234 6.29289 8.29286C5.90237 8.68339 5.90237 9.31655 6.29289 9.70708L12 15.4142L17.7071 9.70708C18.0976 9.31655 18.0976 8.68339 17.7071 8.29286Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <nav className="sidebar-dropdown-list-wrapper w-dropdown-list">
                        <div className="sidebar-dropdown-inner-wrapper">
                          {item.dropdown.map((dropdownItem) => {
                            return (
                              <NavLink
                                onClick={() => {
                                  dispatch(clearCustomerAndCoClientID());
                                }}
                                key={`sidebar-3-${dropdownItem.key}`}
                                end
                                className={({
                                  isActive,
                                  isPending,
                                  isTransitioning,
                                }) => {
                                  return `sidebar-dropdown-link w-dropdown-link ${
                                    isActive ? "is_active" : ""
                                  }`;
                                }}
                                to={dropdownItem.route}
                                // onClick={() => {
                                //   dispatch(setIsActive(dropdownItem.key));
                                //   navigate(dropdownItem.route);
                                // }}
                              >
                                {dropdownItem.title}
                              </NavLink>
                            );
                          })}
                        </div>
                      </nav>
                    </div>
                  </div>
                );
              })}
            </>
          }
          sideBarSectionSecond={
            <>
              {DASHBOARD_SECOND_SECTION.map((item, index) => {
                return (
                  <div className="sidebar_dropdown" key={`index-${index}`}>
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="dropdown-wrapper sidebar-dropdown w-dropdown"
                    >
                      <div
                        className="dropdown-toggle-2 sidebar-dropdown w-dropdown-toggle"
                        onClick={() => {}}
                      >
                        <div className="menu_icon w-embed">
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
                              d="M9 16C7.34315 16 6 17.3431 6 19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19C18 17.3431 16.6569 16 15 16H9ZM4 19C4 16.2386 6.23858 14 9 14H15C17.7614 14 20 16.2386 20 19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </div>
                        <div className="text_14 weight_600">{item.title}</div>
                        <div className="menu_arrow w-embed">
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
                              d="M17.7071 8.29286C17.3166 7.90234 16.6834 7.90234 16.2929 8.29286L12 12.5858L7.70711 8.29286C7.31658 7.90234 6.68342 7.90234 6.29289 8.29286C5.90237 8.68339 5.90237 9.31655 6.29289 9.70708L12 15.4142L17.7071 9.70708C18.0976 9.31655 18.0976 8.68339 17.7071 8.29286Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <nav className="sidebar-dropdown-list-wrapper w-dropdown-list">
                        <div className="sidebar-dropdown-inner-wrapper">
                          {item.dropdown.map((dropdownItem) => {
                            return (
                              <a
                                key={`sidebar4-${dropdownItem.key}`}
                                className={`sidebar-dropdown-link w-dropdown-link ${
                                  activeItem === dropdownItem.key
                                    ? "is_active"
                                    : ""
                                }`}
                                onClick={() => {
                                  dispatch(setIsActive(dropdownItem.key));
                                  navigate(dropdownItem.route);
                                }}
                              >
                                {dropdownItem.title}
                              </a>
                            );
                          })}
                        </div>
                      </nav>
                    </div>
                  </div>
                );
              })}
            </>
          }
          sideBarSectionLast={
            <>
              {DASHBOARD_LAST_SECTION.map((item, index) => {
                return (
                  <div className="sidebar_dropdown" key={`sidebar${index}`}>
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="dropdown-wrapper sidebar-dropdown w-dropdown"
                    >
                      <div
                        className="dropdown-toggle-2 sidebar-dropdown w-dropdown-toggle"
                        onClick={() => {}}
                      >
                        <div className="menu_icon w-embed">
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
                              d="M14.6911 2.11058C14.2284 1.9995 13.7487 1.99973 13.1137 2.00003L9.7587 2.00006C8.95373 2.00005 8.28937 2.00004 7.74818 2.04426C7.18608 2.09018 6.66937 2.18875 6.18404 2.43604C5.43139 2.81953 4.81947 3.43145 4.43598 4.1841C4.18868 4.66944 4.09012 5.18614 4.04419 5.74824C3.99998 6.28943 3.99999 6.95378 4 7.75875V16.2414C3.99999 17.0463 3.99998 17.7107 4.04419 18.2519C4.09012 18.814 4.18868 19.3307 4.43598 19.816C4.81947 20.5687 5.43139 21.1806 6.18404 21.5641C6.66937 21.8114 7.18608 21.9099 7.74818 21.9559C8.28937 22.0001 8.95372 22.0001 9.75868 22.0001H14.2413C15.0463 22.0001 15.7106 22.0001 16.2518 21.9559C16.8139 21.9099 17.3306 21.8114 17.816 21.5641C18.5686 21.1806 19.1805 20.5687 19.564 19.816C19.8113 19.3307 19.9099 18.814 19.9558 18.2519C20 17.7107 20 17.0463 20 16.2414L20 8.8864C20.0003 8.25142 20.0006 7.77161 19.8895 7.30892C19.7915 6.90078 19.6299 6.5106 19.4106 6.15271C19.1619 5.74699 18.8225 5.40788 18.3733 4.95909L17.041 3.62678C16.5922 3.17756 16.2531 2.83813 15.8474 2.5895C15.4895 2.37019 15.0993 2.20857 14.6911 2.11058ZM13 4.00006H9.8C8.94342 4.00006 8.36113 4.00084 7.91104 4.03761C7.47262 4.07343 7.24842 4.13836 7.09202 4.21805C6.7157 4.4098 6.40973 4.71576 6.21799 5.09208C6.1383 5.24848 6.07337 5.47269 6.03755 5.9111C6.00078 6.36119 6 6.94348 6 7.80006V16.2001C6 17.0566 6.00078 17.6389 6.03755 18.089C6.07337 18.5274 6.1383 18.7516 6.21799 18.908C6.40973 19.2844 6.7157 19.5903 7.09202 19.7821C7.24842 19.8618 7.47262 19.9267 7.91104 19.9625C8.36113 19.9993 8.94342 20.0001 9.8 20.0001H14.2C15.0566 20.0001 15.6389 19.9993 16.089 19.9625C16.5274 19.9267 16.7516 19.8618 16.908 19.7821C17.2843 19.5903 17.5903 19.2844 17.782 18.908C17.8617 18.7516 17.9266 18.5274 17.9624 18.089C17.9992 17.6389 18 17.0566 18 16.2001V9H16C14.3431 9 13 7.65685 13 6V4.00006ZM17.5599 7C17.4397 6.8579 17.2478 6.66211 16.887 6.30128L15.6988 5.11306C15.3379 4.75218 15.1421 4.56026 15 4.44009V6C15 6.55228 15.4477 7 16 7H17.5599Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H13Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                        </div>
                        <div className="text_14 weight_600">{item.title}</div>
                        <div className="menu_arrow w-embed">
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
                              d="M17.7071 8.29286C17.3166 7.90234 16.6834 7.90234 16.2929 8.29286L12 12.5858L7.70711 8.29286C7.31658 7.90234 6.68342 7.90234 6.29289 8.29286C5.90237 8.68339 5.90237 9.31655 6.29289 9.70708L12 15.4142L17.7071 9.70708C18.0976 9.31655 18.0976 8.68339 17.7071 8.29286Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <nav className="sidebar-dropdown-list-wrapper w-dropdown-list">
                        <div className="sidebar-dropdown-inner-wrapper">
                          {item.dropdown.map((dropdownItem) => {
                            return (
                              <a
                                key={`sidebar5-${dropdownItem.key}`}
                                className={`sidebar-dropdown-link w-dropdown-link ${
                                  activeItem === dropdownItem.key
                                    ? "is_active"
                                    : ""
                                }`}
                                onClick={() => {
                                  dispatch(setIsActive(dropdownItem.key));
                                  navigate(dropdownItem.route);
                                }}
                              >
                                {dropdownItem.title}
                              </a>
                            );
                          })}
                        </div>
                      </nav>
                    </div>
                  </div>
                );
              })}
            </>
          }
        />
      }
    />
  );
}

export default SuperAdminDashBoard;
