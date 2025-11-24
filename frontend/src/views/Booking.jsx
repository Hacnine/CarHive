import { Navigation } from "../components";
import BookingFormCard from "../components/Booking/BookingFormCard";
import Header from "../components/Header";
import NumberCard from "../components/AboutUs/NumberCard";
import { booking_intro, numBerCard } from "../constants/index_three";
import Footer from "./Footer";
import Hero from "./HomePage/Hero";
import RentingProcess from "./HomePage/RentingProcess";

const Booking = () => {
  return (
  <section className="w-full mx-auto px-4">
      <Header title={"Booking"} />
      {/* <Hero /> */}

      <div className=" -translate-y-10 mx-auto flex items-center justify-center wrapper">
        <BookingFormCard />
      </div>
      <RentingProcess />
      <div className=" bg-about-bg bg-cover bg-center bg-no-repeat">
      <div className="w-full bg-black/40 lg:px-16 px-16 ">
        <div className="md:flex md:space-x-6 md:space-y-0 space-y-12 py-24">
        <h1 className="md:text-5xl text-4xl  md:w-1/2 font-bold  text-white-green  text-start font-serif">
          We offer customers a wide range of{" "}
          <span className="text-primary-green">
            commercial cars and luxury cars
          </span>{" "}
          for any occasion.
        </h1>
        <p className="text-white-green md:w-1/2">{booking_intro}</p>
        </div>
        <div className="flex justify-between  md:space-x-6 md:space-y-0  pb-10  ">
        {numBerCard.map((items, index) =>(
          <div key={index} className="drop-shadow-lg w-[22%] h-[127px] backdrop-blur-sm bg-white/10 rounded-lg flex items-center justify-center flex-col border border-white/20 ">
          <NumberCard {...items}/>
        </div>
        ))}
        </div>
       
        
      </div>
      </div>
    </section>
  );
};

export default Booking;
