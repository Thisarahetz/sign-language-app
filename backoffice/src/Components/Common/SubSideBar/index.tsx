import React from "react";

interface SubSideBarProps {
  sideBarContent: React.ReactNode;
}

function SubSideBar({ sideBarContent }: SubSideBarProps) {
  return (
    <div
      id="w-node-_88c9996b-98eb-e4da-3f94-61b1b664ca51-4b6f2c5c"
      className="secondary_menu_wrapper is_spue_admin"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 64, 255, .07), #fff)",
      }}
    >
      <div className="secondary_menu_tree_wrapper">{sideBarContent}</div>
    </div>
  );
}

export default SubSideBar;
