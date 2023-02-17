import React from "react";
import SideBar from "../components/SideBar";

function toggleMenuBar() {
  document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}

export default toggleMenuBar;
