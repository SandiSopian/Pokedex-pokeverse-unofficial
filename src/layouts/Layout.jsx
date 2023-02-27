import React from "react";
import SideBar from "../components/SideBar";

const Header = ({ children }) => {
  return (
    <div>
      <SideBar className="bgNav" />
      {children}
    </div>
  );
};

export default Header;
