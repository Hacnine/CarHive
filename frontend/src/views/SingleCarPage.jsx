import React, { useState } from "react";
import Header from "../components/Header";
import { carOne } from "../assets";
import carPrevOne from "../assets/carPrevOne (1).svg";
import { carSpecification, previewCarCard } from "../constants/index_three";
import PreviewCarCard from "../components/SIngleCarPage/PreviewCarCard";
import BookingFormCard from "../components/Booking/BookingFormCard";
import Footer from "./Footer";
import Title from "../components/Title";
import { PrimaryButton } from "../components";
import SocialNetwork from "../components/News/SocialIcons";
import { newsIcons } from "../constants/index_two";
import CarSpecification from "../components/SIngleCarPage/CarSpecification";
      // w-[315px] h-[225px] md:w-[651px] md:h-[440px]  w-[90%] h-[70%]
const SingleCarPage = () => {
  const [bigCarImage, setBigCarImage] = useState(carPrevOne);

  return (
    <div className="w-full h-full ">
      <Header
        title={"Vahicle Fleet"}
        bg={"bg-singlecar"}
      />
      <div className=" pt-8 mx-auto lg:px-28 px-6 grid md:grid-cols-3 grid-cols-2  sm:gap-10  border-red-800 w-full sm:ml-0 ml-1 h-full">
        <div id="div1"
          className="sm:mt-14 col-span-2  border-orange-800 w-full h-full ">
          {/* image */}
          <div className=" ">
          <div className="w-full h-full">
            <img
              src={bigCarImage}
              alt="truck image"
              className=" object-cover w-full h-full"
            />
          </div>
          </div>


          <div className="-translate-y-6  border border-green-700 flex items-center justify-center gap-3">
            {previewCarCard.map((images, index) => (
              <div key={index}>
                <PreviewCarCard 
                images={images} 
                changeBigCarImage={(images) =>(setBigCarImage(images))}
                bigCarImage={bigCarImage}
                 />
              </div>
            ))}
          </div>

          <div className="pt-10" >
            <Title title={"Vehicle Overview"} fontSize={'text-3xl'} customBorder={'w-1/4'}/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto gap-8 pt-7">
              {carSpecification.map((items, index)=>(
                <div className="flex items-center justify-start " key={index}>
                 

                <CarSpecification items={items}/>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div
          className="h-full w-full  md:pt-0  pt-5 md:col-span-1  col-span-2  border-black sm:mt-14 flex flex-col flex-1 items-center space-y-20 ">
            
           <div className="text-center w-full bg-white-green py-3">
            <p className="text-xl text-gray-600  py-2">Daily Rate</p>
            <h1 className="text-slate-blue text-6xl font-bold">$280</h1>
          </div>
          <div className=" border border-gray-400 w-full p-8 rounded-md">
          <BookingFormCard grid={'grid-cols-1'}/>
          <div className="flex justify-center  pt-8 border w-full ">
        <PrimaryButton
          className={" flex w-72    bg-primary-green "}
          buttonName={"Book Now"}
        />
      </div>
          </div>

          <div className="flex items-start flex-col justify-start border border-gray-400 rounded-md w-full gap-5 p-8 ">
              <Title title={'Share With Freinds'}></Title>
            <SocialNetwork newsIcons={newsIcons}/>
            </div>
         
        </div>
      </div>
      <div className="pt-52">

      </div>

    </div>
  );
};

export default SingleCarPage;
