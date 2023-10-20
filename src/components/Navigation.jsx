import { useState } from "react";

import logo from "../assets/logo.svg";

// import {FaPaintBrush, FaTrophy,FaRoad, FaMicrochip, } from "react-icons/fa";

import { AiFillAliwangwang } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

import { Tb123, TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Button, Drawer, Navbar } from "@material-tailwind/react";

// import { Drawer } from "@material-tailwind/react";

import React from "react";
import { navLinks, navLinks2 } from "../constants";
import { heroImage } from "../assets";
import PrimaryButton from "./PrimaryButton";
import { RiLoginCircleFill } from "react-icons/ri";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    // open ? setOpen(flase): setOpen(true);
    // setOpen(!open);
    setOpen(true);
  };
  const logInIcon = <RiLoginCircleFill className="text-white mr-2"/>

  const closeDrawer = () => {
    setOpen(false);
  };

  const navItems = () => {
    return (
      <div>
        {navLinks.map((links) => (
          <li
            className="link overflow-clip font-semibold py-6 first:pt-0 border-b border-green-300 w-56"
            key={links.label}
          >
            <a className="divide-y divide-slate-200" href={links.href}>
              {links.label}
            </a>
            {/* <div className=" bg-gray-300 w-96 h-[1px]"></div> */}
          </li>
        ))}
      </div>
    );
  };

  return (
    <nav className="w-full top-6 absolute  z-10">
      {/* <div className=" flex justify-center"> */}
      {/* <Navbar> */}
      <div className=" ">
        <div className="wrapper flex  items-center  justify-between  ">
          <img src={logo} alt="site logo" height={1} width={100} />

          {/* Nav Items */}
          <div className="hidden lg:block  ">
            <div className="flex items-center space-x-8 font-bold text-white">
              {navLinks2.map((section, key) => (
                <button
                  className=" relative flex justify-center items-center gap-1  focus:outline-none shadow  rounded focus:ring ring-green-100 group"
                  key={key}
                >
                  <p className="p-2">{section.title}</p>
                  {section.title != "Home" && section.title != "Booking" ? (
                    <>
                      <IoMdArrowDropdown />
                      <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white-green shadow-md mt-1 rounded">
                        <ul className="text-left border rounded">
                          {section.links.map((item) => (
                            <li
                              className="px-4 py-1 text-sm text-gray-600 font-medium  hover:bg-green-600 hover:text-white-green border-b"
                              key={item.name}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    console.log("Allahukabr")
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Nav Items End */}

          <div className="flex items-center justify-end">
          <TbMenuDeep
            className="lg:hidden block hover:cursor-pointer text-white-green h-6 w-6 absolute right-[65px]  "
            onClick={openDrawer}
          />
          </div>
          {/* Drawer Start */}

          <Drawer
            open={open}
            onClose={closeDrawer}
            className="pt-5 pb-10 bg-white-green "
          >
            <div className="flex items-center justify-between px-4 py-3 bg-white-green border-b border-gray-200 pb-6 mb-8 z-50">
              <div className="flex items-center">
                <img src={logo} alt="site logo" height={1} width={100} />
              </div>
              <div className="flex items-center">
                <Button
                  color="white"
                  size="sm"
                  onClick={closeDrawer}
                  className=" bg-red-600"
                >
                  <IoClose className="text-white" />
                </Button>
              </div>
            </div>
            {/* Nav Items */}

            {/* <ul className="flex flex-col items-start mt-5 mx-3 ">
              {navItems()}
            </ul> */}

            <div className="lg:hidden block  ">
              <div className=" flex px-5 flex-col items-start justify-start  space-y-8  font-bold text-gray-600 ">
                {navLinks2.map((section) => (
                  <button
                    className=" relative flex justify-start items-start   focus:outline-none  hover:text-slate-blue  rounded  group w-full  "
                    key={section.title}
                  >
                    <div className="flex items-center gap-3">
                      <section.icon className="w-5 text-slate-blue h-5" />
                      <span className=" inline-block  ">{section.title}</span>
                      {section.title != "Home" && section.title != "Booking" ? (
                        <span>
                          <IoMdArrowDropdown className="  hover:bg-gray-200 ml-3 mt-[4px] " />
                        </span>
                      ) : (
                        console.log("Allahukabr")
                      )}
                    </div>

                    <div className="absolute ml-36 hidden group-focus:block ">
                      <ul className="text-left border rounded">
                        {section.links.map((item) => (
                          <li
                            className=" px-4 py-1 text-sm font-medium hover:bg-green-900 hover:text-white-green border-b odd:bg-white even:bg-gray-100"
                            key={item.name}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className=" flex items-center  justify-center pt-24 gap-16 font-semibold">
            <PrimaryButton
            className={"flex lg:hidden bg-primary-green"}
            buttonName={" Sign in "}
            
          />

              {/* <button className="btn_base text-primary-green block lg:hidden items-center  p-1 px-3 rounded-lg  border-primary-green border-2 ">
                Sign Up
              </button> */}

              <PrimaryButton
            className={"flex lg:hidden"}
            textColor ={"text-primary-green"}
            buttonName={" Sign Up "}
            
          />
            </div>
            {/* Nav Items end */}
          </Drawer>

          {/* Drawr End */}

          {/* <button className="btn_base text-white font-semibold text-sm hidden lg:block items-center  p-1 px-6 py-1.5 rounded-lg glow-green ">
            Sign in
          </button> */}
          <PrimaryButton
            className={"lg:flex hidden   glow-green"}
            buttonName={" Sign in "}
            icon={logInIcon}
          />
        </div>
      </div>

      {/* </div> */}
      {/* </Navbar> */}
    </nav>
  );
};

export default Navigation;
