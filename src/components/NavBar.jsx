import { useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCopy } from "react-icons/fa";
import { BsImages } from "react-icons/bs";

import logo from "../Uploads/img/service/logo2.jpg";

import "./navbar.css";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="flex justify-between text-purple-500 md:text-white uppercase nb py-5 md:px-10 fixed w-full">
      <Link to="/" className="font-bold uppercase  px-10 text-4xl">
        <img src={logo} alt="" className="w-[55px] rounded-full" />
      </Link>

      <div
        className="text-white text-3xl m-5 hover:hover:text-purple-300 md:hidden cursor-pointer"
        onClick={() => showMenu()}
      >
        <GiHamburgerMenu />
      </div>

      <div className={active ? "slider actives" : "slider"}>
        <div
          className=" text-4xl md:hidden hover:hover:text-purple-500 cursor-pointer"
          onClick={() => showMenu()}
        >
          <AiOutlineCloseCircle />
        </div>

        <Link
          to="/"
          className="flex items-center bg-purple-400 p-2 rounded-sm md:hover:bg-purple-500"
          onClick={() => showMenu()}
        >
          <AiOutlineHome className="hidden md:inline text-2xl pb-1" /> Inicio
        </Link>
        <Link
          to="/about"
          className="flex items-center hover:hover:text-purple-500"
          onClick={() => showMenu()}
        >
          <AiOutlineUsergroupAdd className="py-1 hidden md:inline text-3xl" />{" "}
          Nosotros
        </Link>
        <Link
          to="/blog"
          className="flex items-center hover:hover:text-purple-500"
          onClick={() => showMenu()}
        >
          <FaRegCopy className=" py-1 hidden md:inline text-3xl" /> Blog
        </Link>
        <Link
          to="/galeria"
          className="flex items-center hover:hover:text-purple-500"
          onClick={() => showMenu()}
        >
          <BsImages className=" hidden md:inline py-1 text-3xl" /> Galería
        </Link>
      </div>
      <style>{`
        .nb{
          background: linear-gradient(to right, #090009,#511c50,#000000);
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
