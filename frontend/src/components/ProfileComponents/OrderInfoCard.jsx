import React from "react";

const OrderInfoCard = ({
  orderId,
  carName,
  pickUpLocation,
  dropOffLocation,
  pickUpDate,
  returnDate,
  status,
  index
}) => {
  
  return (
   
    <div>


   
<div >
        <div className=" hidden text-sm sm:flex items-center justify-between border-b border-green-100 h-16">
        <span className={`"text-gray-600 text-left w-20   ${index ===0? 'font-bold font-serif text-gray-700':'text-gray-600'}`}>{orderId}</span>
        <span className={`"text-gray-600 text-left w-20   ${index ===0? 'font-bold font-serif text-gray-700':'text-gray-600'}`}>{carName}</span>
        <span className={`"text-gray-600 text-left w-20   ${index ===0? 'font-bold font-serif text-gray-700':'text-gray-600'}`}>{pickUpLocation}</span>
        <span className={`"text-gray-600 text-left w-20   ${index ===0? 'font-bold font-serif text-gray-700':'text-gray-600'}`}>{dropOffLocation}</span>

        <span className={`"text-gray-600  text-left w-28 ${index ===0? 'font-bold font-serif text-gray-700':'text-gray-600'}`}>{pickUpDate}</span>
        <span className={`"text-gray-600 text-left w-28 ${index ===0? 'font-bold font-serif text-gray-700':'text-gray-600'}`}>{returnDate}</span>
        <p
              className={`${
                status === "scheduled"
                  ? "bg-orange-400 text-white"
                  : status === "completed"
                  ? "bg-deep-green text-white"
                  : status === "cancelled"
                  ? "bg-red-600 text-white"
                  : "text-gray-700"
              } w-20 rounded-xl  font-semibold font-open px-1 py-[2px] text-xs  text-center    -black`}
            >
              {status}
            </p>
        </div>

      <div className="sm:hidden text-sm  border-b border-green-100 ">
          

          <div className="leading-7 flex items-center justify-between    md:space-y-0  space-y-4 ">
            <div className="w-16 text-left">
              <p className="font-semibold text-gray-700">Order Id</p>
              <span className="text-gray-600">{orderId}</span>
            </div>
            <div className="w-[120px] md:w-[100px] text-left">
              <p className="font-semibold text-gray-700">Car Name</p>

              <span className="text-gray-600">{carName}</span>
            </div>
          </div>

          <div className="leading-7 flex items-center justify-between    md:space-y-0 md:gap-3 space-y-4">
            <div className="w-28 text-left">
              <p className="font-semibold text-gray-700">Pick Up Location</p>
              <span className="text-gray-600">{pickUpLocation}</span>
            </div>
            <div className="w-[120px] text-left">
              <p className="font-semibold text-gray-700">Drop Off Location</p>

              <span className="text-gray-600">{dropOffLocation}</span>
            </div>
          </div>

          <div className="flex items-center justify-between    md:space-y-0 md:gap-3 space-y-4 leading-7 ">
            <div className="w-28 text-left ">
              <p className="font-semibold text-gray-700 ">Pick Up Date</p>
              <span className="text-gray-600 leading-7">{pickUpDate}</span>
            </div>
            <div className="w-[120px] text-left ">
              <p className="font-semibold text-gray-700 ">Return Date</p>

              <span className="text-gray-600">{returnDate}</span>
            </div>
          </div>

          <div className=" flex items-center justify-center  flex-col  gap-  md:space-y-0 space-y-4 mb-1 border text-left ">
            <p className="font-semibold text-gray-700    -black">Status</p>

            <p
              className={`${
                status === "scheduled"
                  ? "bg-orange-400"
                  : status === "completed"
                  ? "bg-deep-green"
                  : status === "cancelled"
                  ? "bg-red-600"
                  : ""
              } w-20 rounded-xl  font-semibold font-open px-1 py-[2px] text-xs text-white-green text-center    -black`}
            >
              {status}
            </p>
          </div>

        </div> 
      </div>
    </div>
  );
};

export default OrderInfoCard;