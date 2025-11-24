import { Navigation } from "../../components";
import BookingCard from "../../components/Booking/BookingCard";



const Hero = () => {
  

  return (
  <section className="bg-hero-img bg-cover bg-center bg-no-repeat flex items-center justify-center md:pb-52 w-full min-h-screen">
      {/* <img
        src={heroImage}
        alt="cover-image"
        className=" min-w-full min-h-screen flex-1 object-cover"
      /> */}
  <div className="w-full flex items-center flex-col">
      <Navigation/>

        <div className=" wrapper mt-10  pb-10 ">
          <h1 className="head_text  text-white-green font-serif text-center">
          Looking for a <span className="text-primary-green"> vehicle</span>? You're at the right place. 
          </h1>
          
        </div>

       <BookingCard/>

        </div>
    </section>
  );
};

export default Hero;

{
  /*  */
}
