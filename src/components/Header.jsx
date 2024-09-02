import React from "react";

import Logo from "../assets/img/logo.svg";
import Background from "../assets/img/bg-header-desktop.png";
import NavBar from "./NavBar";

const handleNavBar = () => {
  console.log("teste");
};

const Header = () => {
  return (
    <>
      <header className="h-72 relative bg-slate-50 flex  overflow-x-hidden">
        <div
          className="w-full flex
        items-center justify-between self-start mt-5"
        >
          <img
            src={Logo}
            alt="logo do site"
            className="size-14 cursor-pointer ml-4 md:ml-10 md:mt-10 z-10"
            onClick={() => handleNavBar()}
          />
          <NavBar />
        </div>
        <img src={Background} alt="" className="absolute w-full h-full" />
      </header>
    </>
  );
};

export default Header;
