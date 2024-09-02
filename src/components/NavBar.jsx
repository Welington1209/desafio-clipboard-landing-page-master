import Home from "../routes/Home";
import About from "../routes/About";
import { Link } from "react-router-dom";

import React from "react";

const NavBar = () => {
  return (
    <nav className="text-md uppercase flex mr-4 md:mr-10 md:mt-10 z-10">
      <ul className="flex gap-8">
        <li>
          <Link className="p-2 rounded-full hover:bg-blue-200 transition bg-blue-300" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="p-2 rounded-full hover:bg-blue-200 transition bg-blue-300" to={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
