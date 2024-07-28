import TableLoader from "@components/Loaders/Table";
import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import { setCoClientID } from "@redux/OrderSlice";
import { GetAllCOClientApiCall } from "@src/Api/Services/Coclient";
import * as changeCase from "change-case";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function OrderCoclientideBarContent() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [search_key, setSearchKey] = useState("");
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["order-coclinet-side-bar-content", search_key],
    queryFn: () => GetAllCOClientApiCall(1, 10, search_key),
  });

  const { co_client } = useAppSelector((state) => state.order);

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 1000);
  }, [search_key]);
  console.log("tbale id", id);

  return (
    <>
      <div className="search_wrapper">
        <div className="search_content w-embed">
          <div className="form_group">
            <input
              className="form_item"
              type="text"
              placeholder="Phone no or Business name"
              value={search_key}
              onChange={(e) => setSearchKey(e.target.value)} // Handle input change
            />
            <button className="search_btn">
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
                  d="M13.7929 13.7929C14.1834 13.4024 14.8166 13.4024 15.2071 13.7929L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L13.7929 15.2071C13.4024 14.8166 13.4024 14.1834 13.7929 13.7929Z"
                  fill="#9A9EB3"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z"
                  fill="#9A9EB3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="spacer-custom"></div>
      <div className="sidebar-dropdown-inner-wrapper">
        {isLoading ? (
          <TableLoader />
        ) : (
          data?.data?.data.map((item) => {
            return (
              <div className="sidebar_dropdown">
                <div
                  data-hover="false"
                  data-delay="0"
                  className="dropdown-wrapper sidebar-dropdown w-dropdown"
                >
                  <NavLink
                    onClick={() => {
                      dispatch(
                        setCoClientID({
                          business_name: item.business_name,
                          id: item.id,
                        })
                      );
                    }}
                    to={`/order/corporate-clients` + `/${item.id}`}
                    className={({ isActive }) =>
                      `dropdown-toggle-2 sidebar-dropdown-link w-dropdown-link ${
                        co_client?.id === item.id ? "is_active" : ""
                      }`
                    }
                    end
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
                    <div className="text_14 weight_600" onClick={() => {}}>
                      {changeCase.capitalCase(item.business_name)}
                    </div>
                  </NavLink>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default OrderCoclientideBarContent;
