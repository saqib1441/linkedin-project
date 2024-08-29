"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useRef } from "react";

const Navbar = () => {
  const navbar = useRef(null);
  const navToggler = () => {
    navbar.current.classList.toggle("-translate-y-[100%]");
  };
  return (
    <nav className="shadow-md">
      <div className="flex items-center py-4 justify-between w-[80%] mx-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl">Logo</h1>
        </Link>
        <div
          className="fixed w-full h-full bg-primary left-0 top-0 flex items-center justify-center flex-col gap-4 md:gap-5 z-50 transition-all duration-500 md:-translate-y-0 md:static md:flex-row md:w-auto md:bg-transparent -translate-y-[100%]"
          ref={navbar}
        >
          <span
            className="absolute top-7 right-10 text-2xl text-primary-foreground cursor-pointer md:hidden"
            onClick={navToggler}
          >
            <FaXmark />
          </span>
          <Link
            href="/"
            className="text-primary-foreground md:text-black/80 font-[500] md:hover:text-primary transition-all duration-300 before:absolute before:bg-white md:before:bg-primary before:w-0 before:h-[2px] relative before:bottom-0 hover:before:w-full before:transition-all before:duration-300"
            onClick={navToggler}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-primary-foreground md:text-black/80 font-[500] md:hover:text-primary transition-all duration-300 before:absolute before:bg-white md:before:bg-primary before:w-0 before:h-[2px] relative before:bottom-0 hover:before:w-full before:transition-all before:duration-300"
            onClick={navToggler}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-primary-foreground md:text-black/80 font-[500] md:hover:text-primary transition-all duration-300 before:absolute before:bg-white md:before:bg-primary before:w-0 before:h-[2px] relative before:bottom-0 hover:before:w-full before:transition-all before:duration-300"
            onClick={navToggler}
          >
            Services
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span
            className="text-xl cursor-pointer md:hidden"
            onClick={navToggler}
          >
            <FaBars />
          </span>
          <Button>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
