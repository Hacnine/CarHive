import { signUpForm } from "../../constants/index_two";
import CommentForm from "../News/CommentForm";
import React, { useState } from "react";
import DropDownForm from "./DropDownForm";
import PrimaryButton from "../PrimaryButton";

const EditProfileForm = ({ visible }) => {
  return (
    <div className="w-full ">
      <div className="grid sm:grid-cols-2 gap-3 text-sm mt-5">
        {visible === "Profile"
          ? signUpForm.map((items, index) => (
              <div key={index}>
                <CommentForm
                  visibleLable
                  className={"placeholder:text-transparent"}
                  type={items.type}
                  label={items.label}
                />
              </div>
            ))
          : null}

        {visible === "Profile" ? (
          <>
            {/* <DropDownForm
              label={"Language"}
              menuItemDes={"Select your prefered language"}
              menuItemOne={"English"}
              menuItemTwo={"Bangla"}
            />

            <DropDownForm
              label={"Time Format"}
              menuItemDes={"Select your prefered time fomat"}
              menuItemOne={"24 Hour"}
              menuItemTwo={"12 Hour"}
            /> */}
            <PrimaryButton className={'bg-primary-green mt-5'} buttonName={'Update Profile'} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default EditProfileForm;
