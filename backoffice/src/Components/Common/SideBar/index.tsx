import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import { useNavigate } from "react-router-dom";
import {
  DASHBOARD_CONTENTS,
  DASHBOARD_CONTENTS_KEYS,
} from "@constants/dashboard";
import APP_ROUTES from "@src/Constants/route";
import { setIsActive } from "@redux/DrawerSlice";
import { signout } from "@redux/store";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Popover } from "@mui/material";
import NotficationView from "../NotificationBadge";
import { useState } from "react";
interface SideBarProps {
  sideBarSectionFirst?: JSX.Element;
  sideBarSectionSecond?: JSX.Element;
  sideBarSectionLast?: JSX.Element;
  isAdmin?: boolean;
}

function SideBar({
  sideBarSectionFirst,
  sideBarSectionSecond,
  sideBarSectionLast,
  isAdmin = false,
}: SideBarProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeItem = useAppSelector((state) => state.drawer.isActive);
  const user = useAppSelector((state) => state.auth.data.user);
  const [open, setOpen] = useState(false);
  const [anchorE, setAnchorE] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (e: any) => {
    setOpen(true);
    setAnchorE(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorE(null);
  };
  return (
    <div
      id="w-node-a3178ecb-0eb9-963f-dd11-a7380927c72b-8f40f756"
      className="side_components_wrapper"
    >
      <div
        className="sidebar_header"
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h6 className="text_20 weight_500">
          {DASHBOARD_CONTENTS.SIDE_BAR_TITLE}
        </h6>
        <NotficationView />
      </div>
      <div className="sidebar_menu_section">
        <a
          className={`sidebar_link w-inline-block ${
            activeItem === DASHBOARD_CONTENTS_KEYS.DASHBOARD_KEY
              ? "is_active"
              : ""
          }`}
          onClick={() => {
            dispatch(setIsActive(DASHBOARD_CONTENTS_KEYS.DASHBOARD_KEY));
            navigate(APP_ROUTES.DASHBOARD);
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
                d="M6 6C6.55229 6 7 6.44772 7 7V15.2C7 16.0566 7.00078 16.6389 7.03755 17.089C7.07337 17.5274 7.1383 17.7516 7.21799 17.908C7.40973 18.2843 7.7157 18.5903 8.09202 18.782C8.24842 18.8617 8.47262 18.9266 8.91104 18.9624C9.36113 18.9992 9.94342 19 10.8 19H13.2C14.0566 19 14.6389 18.9992 15.089 18.9624C15.5274 18.9266 15.7516 18.8617 15.908 18.782C16.2843 18.5903 16.5903 18.2843 16.782 17.908C16.8617 17.7516 16.9266 17.5274 16.9624 17.089C16.9992 16.6389 17 16.0566 17 15.2V7C17 6.44772 17.4477 6 18 6C18.5523 6 19 6.44772 19 7V15.2413C19 16.0463 19 16.7106 18.9558 17.2518C18.9099 17.8139 18.8113 18.3306 18.564 18.816C18.1805 19.5686 17.5686 20.1805 16.816 20.564C16.3306 20.8113 15.8139 20.9099 15.2518 20.9558C14.7106 21 14.0463 21 13.2413 21H10.7587C9.95374 21 9.28938 21 8.74817 20.9558C8.18608 20.9099 7.66937 20.8113 7.18404 20.564C6.43139 20.1805 5.81947 19.5686 5.43597 18.816C5.18868 18.3306 5.09012 17.8139 5.04419 17.2518C4.99998 16.7106 4.99999 16.0463 5 15.2413L5 7C5 6.44772 5.44772 6 6 6Z"
                fill="currentcolor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 15C11.4477 15 11 15.4477 11 16V19H9V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V19H13V16C13 15.4477 12.5523 15 12 15Z"
                fill="currentcolor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.10555 8.44724C3.35254 8.94122 3.95321 9.14144 4.44719 8.89445L12 5.11806L19.5528 8.89445C20.0467 9.14144 20.6474 8.94122 20.8944 8.44724C21.1414 7.95326 20.9412 7.35259 20.4472 7.1056L12.4472 3.1056C12.1657 2.96484 11.8343 2.96484 11.5528 3.1056L3.55276 7.1056C3.05878 7.35259 2.85856 7.95326 3.10555 8.44724Z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
          <div className="text_14 weight_600">
            {DASHBOARD_CONTENTS.DASHBOARD}
          </div>
        </a>
      </div>

      <div
        className="sidebar_menu_section"
        style={{
          borderBottom: isAdmin ? "none" : "1px solid var(--border_1)",
        }}
      >
        <div className="subtitle_wrapper">
          <div className="text_13 weight_500 color_gray_1 text_upper">
            {DASHBOARD_CONTENTS.MANAGEMENT}
          </div>
        </div>
        {sideBarSectionFirst}
      </div>
      {!isAdmin && (
        <div className="sidebar_menu_section">
          <div className="subtitle_wrapper">
            <div className="text_13 weight_500 color_gray_1 text_upper">
              {DASHBOARD_CONTENTS.CONFIGURATIONS}
            </div>
          </div>
          {sideBarSectionSecond}
        </div>
      )}
      {!isAdmin && (
        <div className="sidebar_menu_section is_last">{sideBarSectionLast}</div>
      )}

      <div className="sidebar_menu_section is_user">
        <div
          data-hover="false"
          data-delay="0"
          className="dropdown-wrapper sidebar-dropdown w-dropdown"
        >
          <div className="dropdown-toggle-2 sidebar-dropdown w-dropdown-toggle">
            <div className="userwrap">
              <div className="avartar w-embed">
                {/* <img
                  src={import.meta.env.VITE_API_AWS_S3_URL + user?.userImage}
                  loading="lazy"
                  alt=""
                /> */}
              </div>
              <div className="sidebar-user-text-container">
                <div className="text_14 weight_600 color_black">
                  {user?.first_name + " " + user?.last_name}
                </div>
                <div className="text_12 weight_500 color_gray_2 is_email">
                  {user?.email}
                </div>
              </div>
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
          <nav className="sidebar-dropdown-list-wrapper sidebar-account-settings-list w-dropdown-list">
            <div className="sidebar-dropdown-inner-wrapper">
              <a
                href="#"
                className={`sidebar-dropdown-link w-dropdown-link ${
                  activeItem === DASHBOARD_CONTENTS_KEYS.MY_ACCOUNT_KEY
                    ? "is_active"
                    : ""
                }`}
                onClick={() => {
                  dispatch(setIsActive(DASHBOARD_CONTENTS_KEYS.MY_ACCOUNT_KEY));
                  navigate(APP_ROUTES.MY_ACCOUNT);
                }}
              >
                {DASHBOARD_CONTENTS.MY_ACCOUNT}
              </a>
              <a
                href="#"
                className="sidebar-dropdown-link w-dropdown-link"
                onClick={() => {
                  signout();
                  navigate("/");
                }}
              >
                Logout
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
