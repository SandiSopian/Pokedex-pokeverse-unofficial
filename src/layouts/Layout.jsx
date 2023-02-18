import React from "react";
import SideBar from "../components/SideBar";

const Header = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default Header;
