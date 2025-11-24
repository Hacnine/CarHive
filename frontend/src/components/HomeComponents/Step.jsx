import Title from "../Title";

const Step = ({title, description, Icon}) => {
  return <section className="lg:mt-4 lg:-translate-y-10  flex flex-col gap-2.5  h-[200px]  border-b-2 border-slate-blue mb-4  mx-auto ">

    <div className="w-12 h-12  rounded bg-primary-green flex items-center justify-center"><Icon className="text-white-green w-6 h-6 hover:scale-110 duration-300"/></div>
    
    <Title title={title} textColor={'text-slate-blue'}/>
    <p className=" text-blue-gray-700 text-sm  tracking-wider	">{description}</p>
  </section>;
};

export default Step;
