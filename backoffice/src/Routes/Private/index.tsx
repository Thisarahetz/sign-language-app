import AdminDashBoard from "@components/Dashboard/Admin";
import SuperAdminDashBoard from "@components/Dashboard/SuperAdmin";
import { useAppSelector } from "@hooks/Redux";
import { APP_USER_TYPES } from "@src/Constants/user";
import { Outlet, Navigate } from "react-router";

export const PrivateWrapper = () => {
  const token = useAppSelector((state) => state.auth.data.token);
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export const DashboardWrapper = () => {
  const user_type = useAppSelector((state) => state.auth.data?.user.role);
  return user_type === APP_USER_TYPES.ADMIN ? (
    <AdminDashBoard />
  ) : (
    <SuperAdminDashBoard />
  );
};
