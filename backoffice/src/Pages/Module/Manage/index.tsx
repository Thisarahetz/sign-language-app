import Topbar from "@components/Common/Topbar";
import React from "react";
import Icon from "@assets/home.svg";
import DefaultButton from "@components/Button/Default";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks/Redux";
import { setFormStatus } from "@redux/FormSlice";
import APP_ROUTES from "@src/Constants/route";
import AdminUsersManageTable from "@components/Tables/User/Manage";
import ModuleTable from "@components/Tables/Module";
export default function ModuleManagePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <Topbar
        title={"Manage Module"}
        icon={Icon}
        ButtonWrapper={
          <DefaultButton
            onClick={() => {
              navigate(APP_ROUTES.ADD_MODULE);
              dispatch(setFormStatus("create"));
            }}
            buttonText={"Add Module"}
            buttonColor={"black"}
            isIcon={true}
          />
        }
      />

      <div className="full_grid_wrapper">
        <ModuleTable />
      </div>
    </>
  );
}
