import TableNoData from "@components/Common/NoData/TableNoData";
import TableLoader from "@components/Loaders/Table";
import { GetAllAdminUsers } from "@src/Api/Services/User";
import APP_ROUTES from "@src/Constants/route";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export type data = {
  id: number;
  email: string;
  name: string;
  phone_number: string;
  user_type: string;
  is_verified: boolean;
  profile: null;
  modules?: string[];
};

function AdminUsersManageTable() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 15;

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["users", page],
    queryFn: () => GetAllAdminUsers(page, limit, searchQuery),
  });

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data?.data.meta?.lastPage);
    }
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, data]);

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (page <= 4) {
        for (let i = 1; i <= 6; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        // Display the last page number
        pageNumbers.push(totalPages);
      } else if (page >= totalPages - 3) {
        // Display the first page number
        pageNumbers.push(1);
        // pageNumbers.push("...");
        for (let i = totalPages - 5; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Display the first page number
        pageNumbers.push(1);
        // pageNumbers.push("...");
        pageNumbers.push(page - 1);
        pageNumbers.push(page);
        pageNumbers.push(page + 1);
        pageNumbers.push("...");
        // Display the last page number
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const handlePageClick = (pageNumber: any) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 1000);
  }, [searchQuery]);

  return (
    <div
      id="w-node-b8bc2dd9-b488-cce1-0a04-200a55d49336-a9e1b5bd"
      className="table_wrapper is_ful_height"
    >
      <div className="table_search_wrapper">
        <div className="search_wrapper">
          <div className="w-embed">
            <div className="form_group">
              <input
                className="form_item"
                type="text"
                placeholder="Search by username"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
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
      </div>
      <table className="table_component">
        <thead className="table_head">
          <tr className="table_row">
            <th className="table_header">
              <div className="th_value">User ID </div>
            </th>
            <th className="table_header">
              <div className="th_value">Username</div>
            </th>
            <th className="table_header">
              <div className="th_value">Email</div>
            </th>
            <th className="table_header">
              <div className="th_value">Phone No</div>
            </th>
            <th className="table_header">
              <div className="th_value">Modules</div>
            </th>
            <th className="table_header"><div
                className="th_value"
                style={{
                  textAlign: "center",
                }}
              >
                Actions
              </div></th>
          </tr>
        </thead>
        {data &&
          data?.data?.data?.map((item, index: number) => (
            <tbody className="table_body" key={item.user_id}>
              <tr className="table_row">
                <td className="table_cell">
                  <div className="td_value">{item?.user_id}</div>
                </td>
                <td className="table_cell">
                  <div className="td_value">
                    {item?.first_name + item?.last_name}
                  </div>
                </td>
                <td className="table_cell">
                  <div className="td_value">{item?.email}</div>
                </td>
                <td className="table_cell">
                  <div className="td_value">
                    {item?.country_code + item?.phone_number}
                  </div>
                </td>
                <td className="table_cell">
                  {item?.permission?.module.map((module, index: number) => (
                    <div key={index} className="td_value">
                      {module?.module_name}
                    </div>
                  ))}
                </td>

                <td>
                  <div className="table_td is_last">
                    <a
                      id="w-node-_36c87bdb-82bc-2721-2e66-6e958fbcfc25-cfb0ca4f"
                      href="#"
                      className="view_link w-inline-block"
                      onClick={() => {
                        navigate(APP_ROUTES.EDIT_USER, {
                          state: item?.user_id,
                        });
                      }}
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
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
          {!isLoading && data?.data?.data.length === 0 && (
            <tr>
              <td colSpan={6}>
                <TableNoData />
              </td>
            </tr>
          )}
          {isLoading && (
            <tr>
              <td colSpan={6}>
                <TableLoader />
              </td>
            </tr>
          )}
      </table>
      {totalPages > 0 && (
        <div className="table_pagination_wrapper">
          <a
            href="#"
            className={`pagination_link ${
              page > 1 ? "" : "is_disabled"
            } w-inline-block`}
            onClick={() => {
              if (page > 1) handlePageClick(page - 1);
            }}
          >
            <div className="pagination_nav">
              <div className="pagination_arrow w-embed">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.70701 0.292893C8.09754 0.683417 8.09754 1.31658 7.70701 1.70711L3.41412 6L7.70701 10.2929C8.09754 10.6834 8.09754 11.3166 7.70701 11.7071C7.31649 12.0976 6.68332 12.0976 6.2928 11.7071L0.585693 6L6.2928 0.292893C6.68332 -0.0976311 7.31649 -0.0976311 7.70701 0.292893Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </div>
              <div className="tetx_14 weight_600">Previous</div>
            </div>
          </a>
          <div className="page_numbers_wrapper">
            {getPageNumbers().map((pageNumber, index) => (
              <a
                key={index}
                href="#"
                onClick={() => {
                  if (pageNumber !== "...") {
                    handlePageClick(pageNumber);
                  }
                }}
                className={`page_num_wrapper ${
                  pageNumber === page ? "is_active" : ""
                } w-inline-block`}
              >
                <div className="page_number">{pageNumber}</div>
              </a>
            ))}
          </div>
          <a
            href="#"
            className={`pagination_link ${
              page < totalPages ? "" : "is_disabled"
            } w-inline-block`}
            onClick={() => {
              if (page < totalPages) {
                handlePageClick(page + 1);
              }
            }}
          >
            <div className="pagination_nav">
              <div className="tetx_14 weight_600">Next</div>
              <div className="pagination_arrow w-embed">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.292986 0.292893C-0.097538 0.683417 -0.097538 1.31658 0.292986 1.70711L4.58588 6L0.292986 10.2929C-0.097538 10.6834 -0.097538 11.3166 0.292986 11.7071C0.68351 12.0976 1.31668 12.0976 1.7072 11.7071L7.41431 6L1.7072 0.292893C1.31668 -0.0976311 0.68351 -0.0976311 0.292986 0.292893Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default AdminUsersManageTable;
