import { CarCard, CarCarSlider } from "../../components";
import { MdCarRental } from "react-icons/md";
import { carNames } from "../../constants";

const CarsForRental = () => {
  return (
    <section>
      <div className="">
        <div className="items-center justify-center flex flex-col  mb-9 ">
          <p className=" p-2 w-fit text-sm font-bold text-primary-green text-center bg-gray-200 rounded-md">
            Enjoy Your Ride
          </p>
          <h1 className="head_text font-open text-slate-blue items-center ">
            <span className="inline-block">
              
            </span>{" "}
            <span className="text-primary-green ml-2 "> Car</span> For Rental
          </h1>
          
          <p className="text-center text-gray-600 text-md tracking-wider	mt-3">Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
        </div>

       
      </div>
      <CarCarSlider />

    </section>
  );
};

export default CarsForRental;
