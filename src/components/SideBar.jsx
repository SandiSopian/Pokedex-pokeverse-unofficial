import React, { useState } from "react";
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
import logoImg from "../assets/svg/pokeball-logo.svg";
import { IconContext } from "react-icons";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [parent] = useAutoAnimate();
  function ReactIconStyle({ children }) {
    return (
      <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
        <div>{children}</div>
      </IconContext.Provider>
    );
  }

  function toggleMenuBar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <span className="absolute z-10 text-4xl top-5 left-4 cursor-pointer" onClick={toggleMenuBar}>
        <GiHamburgerMenu />
      </span>

      <span className="absolute z-10 top-6 right-8 flex items-center md:hidden">
        <h1 className="font-bold text-xl">
          <span className="text-costumeRed">POKÉV</span>
          Dex
        </h1>
      </span>

      <nav className="absolute z-20">
        <div
          className={`sidebar fixed top-0 bottom-0 lg:left-0 ${
            sidebarOpen ? "left-0" : "-left-full"
          } p-2 w-[300px] overflow-y-auto text-center bg-[url(/src/assets/images/bg-img/bg-navbar.png)] bg-cover bg-center bg-[rgba(255, 255, 255, 0.5)] transition-all duration-300`}
        >
          <div className="flex flex-col gap-12">
            <div className="text-gray-100 text-xl">
              <div className="p-2 mt-1 flex items-center justify-between">
                <h1 className="font-bold text-gray-50 text-xl ml-16 mt-2 lg:mt-0 flex items-center justify-center">
                  <span>POKÉV</span>
                  Dex
                  <span className="ml-2">
                    <img src={logoImg} alt="logo pokedex" />
                  </span>
                </h1>
                <RxCross1 className="cursor-pointer lg:hidden" onClick={toggleMenuBar} />
              </div>
              <hr className="my-2 text-gray-600" />
            </div>

            {/* Components Tab */}
            <div className="backdrop-blur-sm rounded-md">
              <NavLink className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")} to="/">
                <ReactIconStyle>
                  <TbPokeball />
                </ReactIconStyle>
                <span className="text-sm ml-4 text-black font-semibold">Pokemon</span>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")} to="/tms">
                <ReactIconStyle>
                  <FaCompactDisc />
                </ReactIconStyle>
                <span className="text-sm ml-4 text-black font-semibold">TM</span>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")} to="/held items">
                <ReactIconStyle>
                  <BsScrewdriver />
                </ReactIconStyle>
                <span className="text-sm ml-4 text-black font-semibold">Held Items</span>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")} to="/z-crystal">
                <ReactIconStyle>
                  <SiCrystal />
                </ReactIconStyle>
                <span className="text-sm ml-4 text-black font-semibold">Z-Crystal</span>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")} to="/nature">
                <ReactIconStyle>
                  <FaMask />
                </ReactIconStyle>
                <span className="text-sm ml-4 text-black font-semibold">Nature</span>
              </NavLink>

              {/* More */}
              <div className="sideBarTabs" onClick={dropdown}>
                <span className="mr-4"></span>
                <div className="flex justify-between w-full items-center">
                  <span className="text-sm ml-4 text-black font-semibold">More</span>
                  <ReactIconStyle>
                    <TfiMore />
                  </ReactIconStyle>
                </div>
              </div>

              <div className="text-left text-sm mt-2 w-4/5 mx-auto hidden" id="submenu">
                <h1 className="cursor-pointer rounded-md mt-1 ml-3">
                  <NavLink className={({ isActive }) => (isActive ? "sideBarTabs flex gap-2 items-center bg-gray-400" : "sideBarTabs font-normal flex gap-2 items-center")} to="/plate">
                    <ReactIconStyle>
                      <GiDividedSquare />
                    </ReactIconStyle>
                    <span className="text-black">Plate</span>
                  </NavLink>
                </h1>
              </div>

              <hr className="my-2 text-gray-600" />

              {/* Personal Tabs */}
              <NavLink to="/about" className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")}>
                <ReactIconStyle>
                  <BsInfoCircle />
                </ReactIconStyle>
                <span className="text-sm ml-4 text-black font-semibold">About</span>
              </NavLink>
              <NavLink to="/support" className={({ isActive }) => (isActive ? "sideBarTabs bg-gray-400" : "sideBarTabs font-normal")}>
                <ReactIconStyle>
                  <GiPayMoney />
                </ReactIconStyle>
                <span className="text-sm ml-4 text-black font-semibold">Support Us</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
