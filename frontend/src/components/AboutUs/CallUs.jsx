import React from "react";
import { IoCall } from "react-icons/io5";
import PrimaryButton from "../PrimaryButton";

const CallUs = () => {
  return (
    <div className=" flex items-center justify-between sm:flex-row flex-col gap-10">
      <h1 className="text-white-green md:text-[38px] text-[30px] text-start md:w-[70%] w-full md:leading-[50px] leading-[40px]  ">
        Call us for further information. Rentaly customer care is here to help you anytime. 
      </h1>

      <div className=" md:items-center items-end md:justify-center justify-end  flex flex-col md:w-[30%] w-full">
        <IoCall className="w-10 h-10 text-white-green mb-2"/>
        <p className=" tracking-[5px] text-white-green ">CALL US NOW</p>
        <p className="text-white-green font-open text-[30px] md:text-[38px] mb-2">1 200 333 800</p>
        <PrimaryButton className={'bg-primary-green'} buttonName={'Contact Us'}/>
      </div>
    </div>
  );
};

export default CallUs;
