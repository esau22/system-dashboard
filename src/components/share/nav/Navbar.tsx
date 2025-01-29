"use client";
import Logo from "@/components/ui/logo";
import NavItem from "./NavItem";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import ButtonIcon from "@/components/ui/buttonIcon";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed w-full h-20 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Logo />
        <div className="flex space-y-2 md:flex-col">
          <NavItem />
        </div>
        <ButtonIcon icon={IoMdLogIn} />
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={`fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gray-300 p-10 ease-in duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="absolute top-4 right-4 cursor-pointer z-50"
            onClick={handleNav}
          >
            <AiOutlineClose size={25} />
          </div>
          <div className="flex flex-col mt-10">
            <NavItem isMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
