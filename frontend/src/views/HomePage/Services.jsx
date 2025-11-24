
import { ServiceCard } from "../../components";
import { serviceCard } from "../../constants";
import { services_description, services_title } from "../../constants/index_two";

const  Services = () => {
  return (
    <div className="bg-sevices bg-no-repeat bg-center min-w-full ">
      <div className=" bg-black/40  wrapper md:pb-20">
        <div className="flex flex-col lg:flex-row items-center w-full lg:items-start lg:justify-between text-start pt-20 gap-9 pb-6">
          <h1 className="head_text font-open text-white-green items-center lg:w-1/2    ">
          {services_title}
          </h1>
          <p className="lg:w-1/2 text-white-green pt-4">
            {services_description}
          </p>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full  ">
          {serviceCard.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between "
            >
              <ServiceCard titleColor=" text-white-green" {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
