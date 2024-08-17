import { Route, Routes } from "react-router-dom";
import APP_ROUTES from "@src/Constants/route";
import { DashboardWrapper, PrivateWrapper } from "./Private";
import SignIn from "@pages/SignIn";
import ForgotPassword from "@pages/ForgotPassword";
import NewPassword from "@pages/NewPassword";
import Dashboard from "@pages/Dashboard";
import UsersManagePage from "@pages/User/Manage";
import UsersAddPage from "@pages/User/Add";
import UsersEditPage from "@pages/User/Edit";
import MyAccount from "@pages/MyAccount";
import OTPValidation from "@pages/OtpValidation";
import ModuleTable from "@components/Tables/Module";
import ModuleManagePage from "@pages/Module/Manage";

function App() {
  return (
    <Routes>
      <Route path={APP_ROUTES.SIGNIN} element={<SignIn />} />
      <Route path={APP_ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={APP_ROUTES.NEW_PASSWORD} element={<NewPassword />} />
      <Route path={APP_ROUTES.OTP_VERIFICATION} element={<OTPValidation />} />
      <Route element={<PrivateWrapper />}>
        <Route element={<DashboardWrapper />}>
          <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />

          <Route path={APP_ROUTES.USERS} element={<UsersManagePage />} />
          <Route path={APP_ROUTES.ADD_USER} element={<UsersAddPage />} />
          <Route path={APP_ROUTES.EDIT_USER} element={<UsersEditPage />} />

          <Route path={APP_ROUTES.MODULE} element={<ModuleManagePage />} />
      

          {/* My Account */}
          <Route path={APP_ROUTES.MY_ACCOUNT} element={<MyAccount />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
