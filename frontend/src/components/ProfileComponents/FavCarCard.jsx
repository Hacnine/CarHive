import React from "react";
import PrimaryButton from "../PrimaryButton.jsx"

const FavCarCard = ({
  name,
  imgSrc,
  Icon,
  price,
  number,
  carSpecification,
  wideHeight,
}) => {
  return (
    <div>
      <div className="p-4 border border-gray-300 rounded-lg w-fit shadow-md sm:flex items-center gap-8 justify-center">
        <div className=" overflow-hidden ">
          <img
            src={imgSrc}
            alt="car image"
            className={`${
              wideHeight ? `${wideHeight}` : "md:w-[320px] h-44 w-[700px]"
            }  object-cover rounded transition-transform transform scale-100 hover:scale-110 ease-in duration-500`}
          />
        </div>

        <div className="">
          <h4 className="font-open text-slate-blue md:my-0 md:mb-3 my-6">{name}</h4>
        <div className="grid grid-cols-2 text-sm leading-7  text-gray-800">
          {carSpecification.slice(0,8).map((items, index) => (
            <div className="" key={index}>
              <span className="font-open">{items.Feature}:</span>
              <span className="px-2">{items.type}</span>
            </div>
          ))}
        </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-2">
          <p>Daily rate from</p>
          <h1 className="text-gray-900 text-2xl font-open">{price}</h1>
          <PrimaryButton className={'bg-primary-green w-32'} buttonName={'Rent Now'}/>
          
        </div>
      </div>
    </div>
  );
};

export default FavCarCard;
