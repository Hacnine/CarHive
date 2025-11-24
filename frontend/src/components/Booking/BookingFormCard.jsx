import { useState, useEffect } from "react";
import { LabelInput } from "..";
import { formItems } from "../../constants";
import { useGlobalContext } from '../../Context';


const BookingFormCard = ({ grid }) => {
  const { bookingForm, setBookingForm } = useGlobalContext();


  return (
    <div className="   border-green-400 mx-auto relative">
      <div className=" border-black">
        <h4 className=" text-lg font-bold text-slate-blue font-open  ">
          <span className=" text-primary-green">Select</span> Date and Time
        </h4>
        <div
          className={`grid ${
            grid ? `${grid}` : "grid-rows-2 lg:grid-flow-col"
          }  lg:gap-3 `}
        >
          {formItems.map((item, index) => {
            // decide which bookingForm field to bind based on index
            if (item.tag === 'Location') {
              const isPickup = index === 0;
              return (
                <div key={index}>
                  <LabelInput
                    {...item}
                    inputValue={isPickup ? bookingForm.pickupLocation : bookingForm.dropoffLocation}
                    onInputChange={(e) => setBookingForm(prev => (isPickup ? { ...prev, pickupLocation: e.target.value } : { ...prev, dropoffLocation: e.target.value }))}
                  />
                </div>
              );
            }

            // DateTime fields
            const isPickupDT = index === 2;
            return (
              <div key={index}>
                <LabelInput
                  {...item}
                  selectedDate={isPickupDT ? bookingForm.pickupDate : bookingForm.dropoffDate}
                  onDateChange={(date) => setBookingForm(prev => (isPickupDT ? { ...prev, pickupDate: date } : { ...prev, dropoffDate: date }))}
                  displayText={isPickupDT ? bookingForm.pickupTime : bookingForm.dropoffTime}
                  setDisplayText={(time) => setBookingForm(prev => (isPickupDT ? { ...prev, pickupTime: time } : { ...prev, dropoffTime: time }))}
                />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default BookingFormCard;
