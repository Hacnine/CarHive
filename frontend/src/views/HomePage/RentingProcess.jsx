
import { Step } from "../../components";
import {steps} from "../../constants";
import { SiProcesswire } from "react-icons/si";




const RentingProcess = () => {
  return <section >
    <div className="wrapper bg-white">
      <h1 className="head_text mb-9 font-open text-slate-blue items-center ">
       <span className="inline-block"><SiProcesswire className="text-primary-green mr-1"/></span> Our Renting <span className="text-primary-green ml-2 ">   Process</span>
      </h1>

      {/* <div className="lg:flex-none flex lg:flex-col lg:gap-0  gap-5"> */}
      {/* <div className="md:flex flex-col md:justify-center justify-start gap-8">
        <img src={rentingProcessDiagram} alt="renting Process Diagram" className="hidden md:block min-w-full" />
        <img src={rentingProcessDiagramMobile} alt="renting Process Diagram" className=" block md:hidden min-w-fit" />
      </div> */}

      <div className=" gap-5 lg:border-t-2 grid lg:grid-cols-4 sm:grid-cols-2 border-primary-green bg-white">
      {steps.map((step, index) => (
        <Step key={index} {...step} />
      ))}
      </div>
      </div>
    {/* </div> */}
  </section>;
};

export default RentingProcess;
