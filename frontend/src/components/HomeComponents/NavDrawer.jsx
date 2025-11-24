import { navLinks, navLinks2 } from "../../constants";
import logo from "../../assets/logo.svg";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import PrimaryButton from "../PrimaryButton";
import { Drawer } from "@mui/material";

const NavDrawer = ({ open, closeDrawer }) => {
  return (
    <div>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={closeDrawer}
        className="pt-5 pb-10  "
        sx={{
          "& .MuiDrawer-paper": {
            width: 370,
          },
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-white-green border-b border-gray-200 pb-6 mb-8 z-50">
          <div className="flex items-center">
            <img src={logo} alt="site logo" height={1} width={100} />
          </div>
          <div className="flex items-center">
            <button
              color="white"
              size="sm"
              onClick={closeDrawer}
              className=" bg-red-600"
            >
              <IoClose className="text-white" />
            </button>
          </div>
        </div>
        {/* Nav Items */}

        {/* <ul className="flex flex-col items-start mt-5 mx-3 ">
              {navItems()}
            </ul> */}

        <div className="lg:hidden block  ">
          <div className=" flex px-5 flex-col items-start justify-start  space-y-8  font-bold text-gray-600 ">
            {navLinks2.map((section, index) => (
              <button
                className=" relative flex justify-start items-start   focus:outline-none  hover:text-slate-blue  rounded  group w-full  "
                key={index}
              >
                <div className="flex items-center gap-3">
                  <section.icon className="w-5 text-slate-blue h-5" />
                  <span className=" inline-block  ">{section.title}</span>
                  {section.title != "Home" && section.title != "Booking" ? (
                    <span>
                      <IoMdArrowDropdown className="  hover:bg-gray-200 ml-3 mt-[4px] " />
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="absolute ml-36 hidden group-focus:block ">
                  <ul className="text-left border rounded">
                    {section.links.map((item, key) => (
                      <li
                        className=" px-4 py-1 text-sm font-medium hover:bg-green-900 hover:text-white-green border-b odd:bg-white even:bg-gray-100"
                        key={key}
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
            textColor={"text-primary-green"}
            buttonName={" Sign Up "}
          />
        </div>
        {/* Nav Items end */}
      </Drawer>
    </div>
  );
};

export default NavDrawer;
