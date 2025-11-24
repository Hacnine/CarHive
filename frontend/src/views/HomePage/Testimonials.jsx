import { Carousel } from "@material-tailwind/react";
import { testiOne } from "../../assets";
import { testimonials } from "../../constants/index_three";
import Title from "../../components/Title";
import TestimonialCard from "../../components/HomeComponents/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="flex flex-wrap flex-row justify-center   items-center md:space-y-0  md:space-x-3 gap-2 mx-auto ">

      {testimonials.map((items, index) => (
        <div className="" key={index}>
         
          <TestimonialCard items={items}/>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
