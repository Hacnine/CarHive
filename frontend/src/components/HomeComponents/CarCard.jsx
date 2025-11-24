import PrimaryButton from "../PrimaryButton";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const CarCard = ({ name, imgSrc, Icon, price, number, carSpecification, wideHeight }) => {
  
  return (
  
    <div className="p-2 border border-gray-300 rounded-lg w-fit shadow-md">
      <div className=" overflow-hidden ">

      {/* md:w-[238px] md:h-[134px] */}
      <img src={imgSrc} alt="car image" className={`${wideHeight? `${wideHeight}`: 'md:w-[320px] h-44 w-[700px]'}  object-cover rounded transition-transform transform scale-100 hover:scale-110 ease-in duration-500`} />
      </div>

      <div className="flex  justify-between mt-4 px-5">
        <h4 className=" text-slate-blue  font-semibold ">{name}</h4>
        <div className="text-gray-400  flex">
          <span>
            <Icon />
          </span>{" "}
          <span className="ml-1 text-xs">{number}</span>
        </div>
      </div>


        
          <div className="flex  pt-1 gap-4 border-b border-gray-300 pb-4 px-5">
          {carSpecification.slice(0,4).map((items, index) => (
            <div className="flex  items-center justify-center gap-1" key={index}>
              <span className=" text-primary-green">
                <items.Icon className="" />
              </span>
              <span className=" text-slate-blue font-semibold">{items.type}</span>
              
            </div>
          
        ))}
        </div>
        <div className="pt-4 pb-6 flex items-center justify-between px-5">
          <span className="text-xs text-gray-600 tracking-wider	"> Daily rate from
            <h1 className=" text-slate-blue text-2xl font-bold">{price}</h1>
          </span>
          <PrimaryButton className={'bg-primary-green'} buttonName={"Rent Now"} padding={'px-3 h-8 text-sm'}/>
        </div>
    </div>
    // </Slider>
    // </div>
  );
};

export default CarCard;
