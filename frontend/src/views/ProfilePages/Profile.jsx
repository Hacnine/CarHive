import React, { useState } from "react";
import { useEffect } from "react";
import { newsForm, signUpForm } from "../../constants/index_two";
import CommentForm from "../../components/News/CommentForm";
import EditProfileForm from "../../components/ProfileComponents/EditProfileForm";
import Notifications from "./Notifications";
import ProfileLinks from "../../components/ProfileComponents/ProfileLinks";
import LoyaltyWidget from "../../components/ProfileComponents/LoyaltyWidget";
import { AppContext, useGlobalContext } from "../../Context";
import Footer from "../Footer";
import Header from "../../components/Header";

const Profile = () => {
  const { activeLink, setActiveLink, title, setTitle } =
    useGlobalContext(AppContext);
  useEffect(() => {
    const dataToSend = "Profile";

    setTitle(dataToSend);
  }, []);
  const [visible, setVisible] = useState("Profile");

  const handleClick = ({}) => {
    setVisible(true);
  };

  return (
    <div>
      <Header title="Profile" />

      <div className="flex items-start justify-between flex-col md:flex-row gap-8 wrapper my-20">
        <div className=" bg-white-green rounded-md px-7 py-7 md:w-[30%] w-full ">
          <ProfileLinks />
          <div className="mt-6">
            <LoyaltyWidget />
          </div>
        </div>

        <div className="md:w-[70%] w-full  ">
          <div className="flex items-center justify-center  w-full  ">
            <div className="px-7 py-7 bg-white-green rounded-md w-full">
              <div className="flex items-center gap-14 w-full   ">
                {/* {visible?  */}
                <div>
                  <p
                    className={`${
                      visible === "Profile"
                        ? "border-b-2 border-primary-green text-gray-900"
                        : "text-gray-600 border-b-2 border-transparent"
                    } font-lato font-bold text-[17px] transition-all duration-300 ease-in-out cursor-pointer font-open`}
                    onClick={() => setVisible("Profile")}
                  >
                    Profile
                  </p>
                </div>

                <div>
                  <p
                    className={`${
                      visible === "Notifications"
                        ? "border-b-2 border-primary-green text-gray-900"
                        : "text-gray-600 border-b-2 border-transparent"
                    } font-lato font-bold text-[17px] transition-all duration-700  ease-in-out cursor-pointer font-open`}
                    onClick={() => setVisible("Notifications")}
                  >
                    Notifications
                  </p>
                </div>
              </div>

              <EditProfileForm visible={visible} />
              <Notifications visible={visible} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
