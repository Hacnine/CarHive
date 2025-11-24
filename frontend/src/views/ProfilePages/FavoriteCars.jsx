import React from "react";
import FavCarCard from "../../components/ProfileComponents/FavCarCard";
import { carNames, favCars } from "../../constants";

const FavoriteCars = () => {
  return (
    <div className="bg-white-green py-6 px-4">
      <h2 className="text-2xl font-open text-slate-blue pb-5">My Favorite Cars</h2>
      <div className="flex items-center justify-center flex-col">
        {favCars.map((item, index) => (
        <div key={index} className=" p-2  ">
          <FavCarCard {...item} wideHeight={" sm:w-[250px] sm:h-[150px]"} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default FavoriteCars;
