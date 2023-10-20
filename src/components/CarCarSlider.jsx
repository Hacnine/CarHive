import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FcPrevious, FcNext} from "react-icons/fc";
import { carNames } from "../constants";
import CarCard from "./CarCard";

const CarCarSlider = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <div onClick={onClick} className=" absolute  top-44  -left-3  w-10 h-10  bg-white  border border-gray-300 shadow-lg rounded-full  text-center  cursor-pointer hover:scale-110 transform transition-transform p-2 flex items-center justify-center z-50">
      <FcPrevious />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute top-44 right-1  w-10 h-10 bg-white border border-gray-300 shadow-lg rounded-full  text-center  cursor-pointer hover:scale-110 transform transition-transform p-2 flex items-center justify-center" >
      <FcNext />

    </div>
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // sm:bg-green-600 md:bg-yellow-900 lg:bg-red-500
    <div className="pl-3 border gap-2 border-gray-700 ">
      <Slider {...settings}>
        {carNames.map((item, index) => (
          <div key={index} className=" p-2  ">
            <CarCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarCarSlider;
