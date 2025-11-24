import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
import { carNames } from "../../constants";
import CarCard from "./CarCard";

const CarCarSlider = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className=" absolute  top-44  -left-3  w-10 h-10  bg-white -translate-y-4 border  border-green-100 shadow-lg rounded-full cursor-pointer hover:scale-110 transform transition-transform text-primary-green flex items-center justify-center z-50"
    >
      <MdNavigateBefore className="w-7 h-7" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-44 right-1  w-10 h-10 bg-white border -translate-y-4 border-green-100  shadow-lg rounded-full  text-center  cursor-pointer hover:scale-110 transform transition-transform text-primary-green flex items-center justify-center z-50"
    >
      <MdOutlineNavigateNext className="w-7 h-7" />
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
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // sm:bg-green-600 md:bg-yellow-900 lg:bg-red-500
    <div className="pl-3  gap-2 border-gray-700 ">
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
