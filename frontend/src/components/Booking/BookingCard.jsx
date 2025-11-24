import { PrimaryButton } from "..";

import { FaSearch } from "react-icons/fa";
import BookingCarCard from "./BookingCarCard";
import BookingFormCard from "./BookingFormCard";
import { useGlobalContext } from '../../Context';
import { useLazyGetAvailableVehiclesQuery } from '../../app/services/bookingsApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BookingCard = () => {
  const buttonIcon = <FaSearch className=" text-white-green mr-2" />;
  const { bookingForm, selectedVehicleType, setSearchResults, setLatestSearchPayload } = useGlobalContext();
  const navigate = useNavigate();

  const [triggerAvailability, { isFetching }] = useLazyGetAvailableVehiclesQuery();
  const [error, setError] = useState(null);

  function combineDateTime(dateObj, timeStr) {
    if (!dateObj) return null;
    const d = new Date(dateObj);
    if (timeStr && typeof timeStr === 'string') {
      const [hh, mm] = timeStr.split(':').map(Number);
      if (!isNaN(hh)) d.setHours(hh);
      if (!isNaN(mm)) d.setMinutes(mm);
      d.setSeconds(0);
      d.setMilliseconds(0);
    }
    return d;
  }

  const handleFind = async () => {
    setError(null);
    // basic validation
    if (!bookingForm.pickupLocation || bookingForm.pickupLocation.trim() === '') {
      setError('Please enter a pickup location.');
      return;
    }
    if (!bookingForm.pickupDate || !bookingForm.dropoffDate) {
      setError('Please select pickup and dropoff dates.');
      return;
    }

    const pickupDT = combineDateTime(bookingForm.pickupDate, bookingForm.pickupTime);
    const dropoffDT = combineDateTime(bookingForm.dropoffDate, bookingForm.dropoffTime);
    if (pickupDT && dropoffDT && dropoffDT < pickupDT) {
      setError('Drop-off must be the same or after pick-up.');
      return;
    }

    // Build query params: include dates (YYYY-MM-DD) for backward compatibility and ISO datetimes
    const startDate = bookingForm.pickupDate ? bookingForm.pickupDate.toISOString().slice(0,10) : undefined;
    const endDate = bookingForm.dropoffDate ? bookingForm.dropoffDate.toISOString().slice(0,10) : undefined;
    const startDateTime = pickupDT ? pickupDT.toISOString() : undefined;
    const endDateTime = dropoffDT ? dropoffDT.toISOString() : undefined;
    const locationCode = bookingForm.pickupLocation || '';

    const params = { startDate, endDate, startDateTime, endDateTime, locationCode };
    if (selectedVehicleType) params.category = selectedVehicleType;

    try {
      const res = await triggerAvailability(params);
      if (res && res.data && res.data.success) {
        setSearchResults(res.data);
        setLatestSearchPayload({ params, bookingForm, category: selectedVehicleType });
        navigate('/search');
      } else if (res && res.error) {
        setError(res.error?.data?.message || 'Search failed.');
      } else {
        setError('No results returned from availability.');
      }
    } catch (err) {
      console.error('Availability search failed', err);
      setError('Availability search failed. Please try again.');
    }
  };
  return (
    // absolute md:top-56 top-60
    <div className="    bg-white-green   md:w-[90%] w-[90%] lg:h-[350px] md:h-[170%]  shadow-lg  rounded-lg px-6   border-black pb-8 font-open">
      <div className="flex md:flex-col items-center justify-center lg:flex-row flex-col   border-blue-500  rounded-md  lg:px-6 sm:px-32 ">
        {/* <div className=" mt-14"> */}

          <BookingCarCard />
        <div className="lg:w-1/2 w-full mt-10 pl-6">
          <BookingFormCard />
        </div>
      </div>
      <div className="flex justify-center  lg:justify-end  w-full lg:mt-3 mt-7 s">
        <PrimaryButton
          className={"lg:w-full flex w-64    bg-primary-green "}
          buttonName={"Find A Vehicle"}
          icon={buttonIcon}
          onClick={handleFind}
          disabled={isFetching}
          loading={isFetching}
        />
      </div>
      {error ? <div className="text-red-600 text-sm mt-2 text-center">{error}</div> : null}
    </div>
  );
};

export default BookingCard;
