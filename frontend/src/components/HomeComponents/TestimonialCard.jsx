import React from "react";
import Title from "../Title";

const TestimonialCard = ({items}) => {
  return (
    <div className={`${items.img} bg-top bg-cover bg-no-repeat rounded-lg`}>
    <div
   className={` bg-black/40 lg:w-[350px]  w-[275px] h-[445px] lg:h-[570px]  px-4 rounded-lg text-gray-400/95`}
 >
   <div className="pt-10">
     <Title title={items.title} textColor={"text-gray-300"} />
   </div>

   <p className="text-gray-400 font-medium md:text-sm py-5 text center  ">
     {items.comment}
   </p>

   <p className="font-bold font-serif text-gray-300/90">
     ___ {items.commentor}
   </p>
 </div>
 </div>
  );
};

export default TestimonialCard;





// <>
// <div className="object-cover w-[350px] lg:w-[350px] md:w-[275px] md:h-[445px] lg:h-[570px] h-[570px]  overflow-clip rounded-lg">
//   <img src={items.img} alt="travel photo" className="  w-full h-full" />
// </div>

// <div className="absolute  -bottom-0 bg-black/40 lg:w-[350px] w-[350px] md:w-[275px] md:h-[445px] lg:h-[570px] h-[570px]  px-4 rounded-lg text-gray-400/95">
//   <div className="pt-10">
//     <Title title={items.title} textColor={"text-gray-300"} />
//   </div>

//   <p className="text-gray-400 font-medium md:text-sm py-5 text center  ">
//     {items.comment}
//   </p>

//   <p className="font-bold font-serif text-gray-300/90">___ {items.commentor}</p>
// </div>
// </>
