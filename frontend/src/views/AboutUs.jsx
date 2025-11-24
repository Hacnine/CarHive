import React from "react";
import Footer from "./Footer";
import Header from "../components/Header";
import { booking_intro, directors, numBerCard } from "../constants/index_three";
import NumberCard from "../components/AboutUs/NumberCard";
import { AppContext, useGlobalContext } from "../Context";
import ProfileCard from "../components/AboutUs/ProfileCard";
import { serviceCard } from "../constants";
import { ServiceCard } from "../components";
import feature from "../assets/feature.png";
import CallUs from "../components/AboutUs/CallUs";
import QualityForClients from "../components/AboutUs/QualityForClients";

const AboutUs = () => {
  const { isDark, setIsDark } = useGlobalContext(AppContext);

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-r from-[#0b1728ff] to-[#193d67ff]"
          : "bg-white mx-auto"
  }  w-full mx-auto px-4`}
    >
      <Header title={"About Us"} />

      <div className="w-full  lg:px-28 px-16 ">
        <div className="md:flex md:space-x-6 md:space-y-0 space-y-12 py-24">
          <h1
            className={` ${
              isDark ? " text-orange-900" : "text-slate-blue"
            } md:text-5xl text-4xl  md:w-1/2 font-bold    text-start font-serif `}
          >
            We offer customers a wide range of{" "}
            <span className="text-primary-green">
              commercial cars and luxury cars
            </span>{" "}
            for any occasion.
          </h1>
          <p className="text-gray-600 md:w-1/2">{booking_intro}</p>
        </div>
        <div className="flex justify-between  md:space-x-6 md:space-y-0  pb-10  ">
          {numBerCard.map((items, index) => (
            <div
              key={index}
              className="drop-shadow-lg w-[22%] h-[127px] backdrop-blur-sm bg-secondary-green/10 bg-slate-blue rounded-lg flex items-center justify-center flex-col  "
            >
              <NumberCard {...items} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-office bg-no-repeat bg-center py-7 wrapper">
        <h1 className="head_text py-10 text-white-green w-full   font-serif">
          Board of <span className="text-primary-green">Directors</span>
        </h1>

        <div className=" grid md:grid-cols-4 grid-cols-2  pb-10">
          {directors.map((items, index) => (
            <div className="mx-auto" key={index}>
              <ProfileCard {...items} />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:px-28 px-16 mx-auto w-full relative ">
        <h1 className=" py-10 text-slate-blue w-full  text-5xl   font-bold  font-serif ">
          Features Hilight
        </h1>

        <div className=" flex items-center justify-between sm:flex-row flex-col  ">
          <div className="w-full z-50 ">
            {serviceCard.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between "
              >
                <ServiceCard {...item} />
              </div>
            ))}
            {/* </div> */}
          </div>

          {/* <div className=""> */}
          <div className="w-full z-50">
            {serviceCard.slice(2, 4).map((item, index) => (
              <div key={index} className=" ">
                <ServiceCard
                  className={"justify-end items-end text-end"}
                  {...item}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-28 left-0 right-0 sm:flex items-center justify-center  hidden">
          <img src={feature} alt="" width={900} />
        </div>
      </div>
      <QualityForClients />

      {/* mt-[700px] */}
      <div className=" bg-deep-green  py-16 flex justify-between items-center lg:px-28 px-16">
        <CallUs />
      </div>
    </div>
  );
};

export default AboutUs;
