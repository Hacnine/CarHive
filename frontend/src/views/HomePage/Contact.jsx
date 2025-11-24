import { PrimaryButton } from "../../components";
import { contact_us } from "../../constants/index_three";

const Contact = () => {
  return <section className="bg-green-100/30 flex items-center flex-col md:flex-row md:justify-between wrapper py-20">
    <div className="md:w-1/2 w-[90%] "><h1 className=" text-5xl   font-bold  leading-[146%]   font-open text-start text-slate-blue">LET’S BEGIN WITH <span className="text-primary-green">CARHIVE</span></h1></div>

    <div className="md:w-1/2 w-[90%] space-y-4  ">
      <p className="text-gray-700">{contact_us}</p>
      <PrimaryButton className={"bg-primary-green font-serif text-bold text-[20px] h-14"} textColor={"text-white-green"} buttonName={"CONTACT US"}/>
    </div>

    
  </section>;
};

export default Contact;
