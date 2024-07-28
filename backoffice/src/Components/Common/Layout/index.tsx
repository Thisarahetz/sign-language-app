import { useAppSelector } from "@hooks/Redux";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

interface DashboardProps {
  sidebar: React.ReactNode;
}

function Layout({ sidebar }: DashboardProps) {
  const drawerStatus = useAppSelector((state) => state.drawer.isClosed);

  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  }, []);

  return (
    <>
      <div className="page_wrapper">
        <div className="page_component_wrapper">
          <div
            className={`grid_component_wrapper ${
              drawerStatus ? "is_closed" : ""
            } `}
          >
            {sidebar}
            <div
              id="w-node-_99f62143-9eff-5a19-ee87-65e0fb52edc0-8f40f756"
              className="main_components_wrapper"
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
