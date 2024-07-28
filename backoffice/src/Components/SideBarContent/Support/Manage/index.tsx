import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import { setIsActive } from "@redux/DrawerSlice";
import APP_ROUTES from "@src/Constants/route";
import { useNavigate, useSearchParams } from "react-router-dom";

function SupportManageSideBarContent() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const module = searchParams.get("module");
  const activeItem = useAppSelector((state) => state.drawer.isActive);

  const ROUTES = [
    {
      key: 1,
      title: "Pending",
      route: `${APP_ROUTES.SUPPORT_MANAGE}/type?status=pending&module=support`,
    },
    {
      key: 2,
      title: "Resolved",
      route: `${APP_ROUTES.SUPPORT_MANAGE}/type?status=resolved&module=support`,
    },
    {
      key: 3,
      title: "Rejected",
      route: `${APP_ROUTES.SUPPORT_MANAGE}/type?status=rejected&module=support`,
    },
  ];

  return (
    <div className="sidebar-dropdown-inner-wrapper">
      {ROUTES.map((route, index) => (
        <a
          key={`sidebar6-${index}`}
          className={`sidebar-dropdown-link w-dropdown-link ${
            activeItem === route.key ? "is_active" : ""
          }`}
          onClick={() => {
            dispatch(setIsActive(route.key));
            navigate(route.route);
          }}
        >
          {route.title}
        </a>
      ))}
    </div>
  );
}

export default SupportManageSideBarContent;
