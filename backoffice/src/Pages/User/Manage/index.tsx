import Topbar from "@components/Common/Topbar";
import React from "react";
import Icon from "@assets/home.svg";
import DefaultButton from "@components/Button/Default";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks/Redux";
import { setFormStatus } from "@redux/FormSlice";
import APP_ROUTES from "@src/Constants/route";
import AdminUsersManageTable from "@components/Tables/User/Manage";
export default function UsersManagePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <Topbar
        title={"Admin Users"}
        icon={Icon}
        ButtonWrapper={
          <DefaultButton
            onClick={() => {
              navigate(APP_ROUTES.ADD_USER);
              dispatch(setFormStatus("create"));
            }}
            buttonText={"Add user"}
            buttonColor={"black"}
            isIcon={true}
          />
        }
      />

      <div className="full_grid_wrapper">
        <AdminUsersManageTable />
      </div>
    </>
  );
}
