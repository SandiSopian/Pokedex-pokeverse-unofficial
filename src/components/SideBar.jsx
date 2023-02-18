import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbPokeball } from "react-icons/tb";
import { FaCompactDisc } from "react-icons/fa";
import { BsScrewdriver } from "react-icons/bs";
import { SiCrystal } from "react-icons/si";
import { FaMask } from "react-icons/fa";
import { TfiMore } from "react-icons/tfi";
import { GiDividedSquare } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import dropdown from "../utils/dropdown";
import toggleMenuBar from "../utils/toggleMenuBar";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [parent] = useAutoAnimate();
  return (
    <>
      <span className="absolute text-4xl top-5 left-4 cursor-pointer" onClick={toggleMenuBar}>
        <GiHamburgerMenu />
      </span>

      <navbar ref={parent}>
        <div className="sidebar fixed top-0 bottom-0 -ml-8 lg:ml-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ">
          <div className="text-gray-100 text-xl">
            <div className="p-2 mt-1 flex items-center justify-between">
              <h1 className="font-bold text-gray-50 text-xl ml-3">
                <span className="text-red-600">POKÉV</span>
                Dex
              </h1>
              <RxCross1 className="cursor-pointer lg:hidden" onClick={toggleMenuBar} />
            </div>
            <hr className="my-2 text-gray-600" />
          </div>

          {/* Components Tab */}
          <div className="sideBarSearchTab">
            <BiSearchAlt2 />
            <input type="text" className="text-sm ml-4 w-full bg-transparent focus:outline-none" placeholder="Search" />
          </div>

          <NavLink className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")} to="/">
            <TbPokeball />
            <span className="text-sm ml-4 text-gray-200">Pokemon</span>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sideBarTabs " : "sideBarTabs font-normal")} to="/">
            <FaCompactDisc />
            <span className="text-sm ml-4 text-gray-200">TM</span>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sideBarTabs " : "sideBarTabs font-normal")} to="/">
            <BsScrewdriver />
            <span className="text-sm ml-4 text-gray-200">Held Items</span>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sideBarTabs " : "sideBarTabs font-normal")} to="/">
            <SiCrystal />
            <span className="text-sm ml-4 text-gray-200">Z-Crystal</span>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sideBarTabs " : "sideBarTabs font-normal")} to="/">
            <FaMask />
            <span className="text-sm ml-4 text-gray-200">Nature</span>
          </NavLink>

          {/* More */}
          <div className="sideBarTabs" onClick={dropdown}>
            <span className="mr-4"></span>
            <div className="flex justify-between w-full items-center">
              <span className="text-sm ml-4 text-gray-200">More</span>
              <TfiMore className="bg-inherit" />
            </div>
          </div>

          <div className="text-left text-sm mt-2 w-4/5 mx-auto text-white hidden" id="submenu">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 ml-3">
              <div className="flex gap-2 items-center">
                <GiDividedSquare />
                <span>Plate</span>
              </div>
            </h1>
          </div>

          <hr className="my-2 text-gray-600" />

          {/* Personal Tabs */}
          <NavLink to="/about" className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")}>
            <BsInfoCircle />
            <span className="text-sm ml-4 text-gray-200">About</span>
          </NavLink>
          <NavLink to="/support" className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")}>
            <GiPayMoney />
            <span className="text-sm ml-4 text-gray-200">Support Us</span>
          </NavLink>
        </div>
      </navbar>
    </>
  );
};

export default SideBar;
