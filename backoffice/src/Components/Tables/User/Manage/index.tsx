import TableNoData from "@components/Common/NoData/TableNoData";
import TableLoader from "@components/Loaders/Table";
import { GetAllUsers } from "@src/Api/Services/User";
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

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => GetAllUsers(),
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isError) {
    toast.error("Error fetching data");
  }

  return (
    <div
      id="w-node-b8bc2dd9-b488-cce1-0a04-200a55d49336-a9e1b5bd"
      className="table_wrapper is_ful_height"
    >
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
              <div className="th_value">role</div>
            </th>

            <th className="table_header">
              <div
                className="th_value"
                style={{
                  textAlign: "center",
                }}
              >
                Actions
              </div>
            </th>
          </tr>
        </thead>
        {data &&
          data?.data?.map((item: any, index: number) => (
            <tbody className="table_body" key={item.id}>
              <tr className="table_row">
                <td className="table_cell">
                  <div className="td_value">{item?.id}</div>
                </td>
                <td className="table_cell">
                  <div className="td_value">{item?.username}</div>
                </td>
                <td className="table_cell">
                  <div className="td_value">{item?.email}</div>
                </td>
                <td className="table_cell">
                  <div className="td_value">{item?.role}</div>
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
        {!isLoading && data?.data.length === 0 && (
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
    </div>
  );
}

export default AdminUsersManageTable;
