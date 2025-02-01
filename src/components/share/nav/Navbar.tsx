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
    <nav className="sticky top-0 w-full h-20 shadow-xl bg-white left-0 z-50">
      <div className="flex justify-between items-center h-full w-full px-3 gap-4 ml-auto">
        <Logo />
        <div className="hidden md:flex">
          <NavItem />
        </div>
        <div className="flex items-center">
          <ButtonIcon icon={IoMdLogIn} />
        </div>
        <div className="sm:hidden cursor-pointer">
          <ButtonIcon onClick={handleNav} icon={AiOutlineMenu} />
        </div>
        <div
          className={`fixed left-0 top-0 w-4/5 max-w-xs sm:hidden h-screen bg-gray-300 p-10 ease-in duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-2.5 right-4 cursor-pointer z-50">
            <ButtonIcon onClick={handleNav} icon={AiOutlineClose} />
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
