import Topbar from "@components/Common/Topbar";
import Icon from "@assets/home.svg";
import DefaultButton from "@components/Button/Default";
import { useLocation, useNavigate } from "react-router-dom";
import APP_ROUTES from "@src/Constants/route";
import ResourceTable from "@components/Tables/Resource";
export default function ResourceManagePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const moduleId = location.state;

  return (
    <>
      <Topbar
        title={"Manage Resources"}
        icon={Icon}
        ButtonWrapper={
          <DefaultButton
            onClick={() => {
              navigate(APP_ROUTES.ADD_RESOURCE, { state: moduleId });
            }}
            buttonText={"Add Resource"}
            buttonColor={"black"}
            isIcon={true}
          />
        }
      />

      <div className="full_grid_wrapper">
        <ResourceTable moduleId={moduleId} />
      </div>
    </>
  );
}
