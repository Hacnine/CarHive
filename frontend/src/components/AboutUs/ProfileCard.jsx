import React from "react";

import { newsIcons } from "../../constants/index_two";

const ProfileCard = ({ img, name, title  }) => {
  return (
    <div className="p-1">
      <div className=" w-fit">
       <div className="rounded-md relative overflow-hidden">
       <img src={img} alt="profile image" className="hover:cursor-pointer rounded-md transition-all hover:scale-105 ease-in duration-300 border-black" />

       <div className="absolute left-0 right-0 bottom-3 flex items-center mx-auto justify-center gap-1">
          {newsIcons.slice(0, 4).map((icons, index) => (
            <div
              className={`w-8 h-8 flex items-center justify-center rounded bg-primary-green hover:bg-primary-green/90 hover:transition-colors ease-in hover:duration-200`}
              key={index}
            >
              <icons.Icon className="text-white-green px-[2px]" />
            </div>
          ))}
        </div>

       </div>
        
       <div className=" flex items-center justify-center flex-col ">
        <h4 className="text-slate- blue text-lg mt-5 mb-1 font-bold font-open">{name}
       </h4>
       <p className="text-gray-700 text-sm font-open">{title}</p>
        </div>
      

      
      </div>
    </div>
  );
};

export default ProfileCard;
