import { useState } from "react";
import logo from "../../assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSolidSun } from "react-icons/bi";
import { BsMoonFill, BsMoonStarsFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { TbBrandBooking, TbMenuDeep } from "react-icons/tb";
import { navLinks2 } from "../../constants";
import PrimaryButton from "../PrimaryButton";
import { RiLoginCircleFill } from "react-icons/ri";
import Headroom from "react-headroom";
import NavDrawer from "./NavDrawer";
import { AppContext, useGlobalContext } from "../../Context";

import modeDark from "../../assets/modeDark.svg";
import modeLight from "../../assets/modeLight.svg";
import NavLinks from "./NavLinks";
import ProfileCard from "../ProfileComponents/ProfileCard";
import { profile } from "../../constants/index_four";
import { Badge } from "@mui/material";

const Navigation = ({ paddingB, background }) => {
  // const booking = <TbBrandBooking className='text-primary-green w-8 h-8'/>
  const [open, setOpen] = useState(false);
  const { isDark, setIsDark, totalItem, rentalLink } =
    useGlobalContext(AppContext);
  const navigateLink = useNavigate();
  const openDrawer = () => {
    setOpen(true);
  };
  const logInIcon = <RiLoginCircleFill className="text-white" />;

  const closeDrawer = () => {
    setOpen(false);
  };

  const [color, setColor] = useState("bg-transparent text-white");
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(
        "backdrop-blur-sm bg-slate-blue/30 backdrop-brightness-50	 text-white-green wrapper"
      );
    } else {
      setColor("bg-transparent text-white-green");
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <Headroom className=" w-full ">
        <nav
          id="navbar"
          className={` ${paddingB} wrapper  z-30 ${color} ${background} w-full mx-auto px-4 border-black`}
        >
          <div className="w-full">
            <div className=" flex  items-center  justify-between gap-6">
              <Link to="/">
                <img
                  src={logo}
                  alt="site logo"
                  className="oject-cover  sm:w-[150px] w-[120px] hover:cursor-pointer "
                />
              </Link>

              <NavLinks />

              <div className="flex items-center gap-6 justify-end w-48 md:mr:0 ">
                {/* <PrimaryButton
              className={"lg:flex hidden glow-green "}
              buttonName={"Sign In"}
            /> */}
                <div className=" flex justify-between items-center gap-3 w-full">
                  {isDark ? (
                    <BsMoonFill
                      className="w-10 h-10 p-3 transition-colors ease-in duration-700 text-blue-600 hover:text-blue-400 bg-blue-600/30 rounded-full hover:cursor-pointer mr-5 "
                      // src={modeDark}
                      onClick={() => {
                        setIsDark(false);
                      }}
                    />
                  ) : (
                    <BiSolidSun
                      className="w-10 h-10 p-2 transition-colors ease-in duration-700 text-primary-green hover:text-green-200 bg-primary-green/10 rounded-full hover:cursor-pointer mr-5"
                      // src={modeLight}
                      onClick={() => setIsDark(true)}
                    />
                  )}
                  <Badge
                    badgeContent={0}
                    color="primary"
                    onClick={() => navigateLink(rentalLink)}
                  >
                    <TbBrandBooking className=" text-white w-8 h-8 cursor-pointer" />
                  </Badge>
                  {profile.slice(0).map((items, index) => (
                    <div key={index} className="cursor-pointer">
                      <ProfileCard img={items.img} justImg />
                    </div>
                  ))}

                  <TbMenuDeep
                    className="lg:hidden block hover:cursor-pointer text-white-green h-6 w-6  right-[65px]  "
                    onClick={openDrawer}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Headroom>
      <NavDrawer open={open} closeDrawer={closeDrawer} />
    </>
  );
};

export default Navigation;
