import { PrimaryButton } from "../../components";
import { news } from "../../constants/index_two";

const News = () => {
  return (
    <section>
      <div className="items-center justify-center flex flex-col  mb-9">
        <p className=" p-2 w-fit text-lg font-bold text-primary-green font-serif text-center bg-gray-200 rounded-md ">
          Latest From Us
        </p>
        <h1 className="head_text font-open text-slate-blue head_text  items-center ">
          News & Promo
        </h1>
        <p className="text-gray-600 font-medium my-5 text center pb-8">
          Breaking news, fresh perspectives, and in-depth coverage - stay ahead
          with our latest news, insights, and analysis.
        </p>

        <div className="lg:flex lg:justify-between lg:items-center lg:gap-6">
          {news.slice(0, 3).map((items, index) => (
            <div className="mx-auto max-w-[400px]" key={index}>
              <img
                src={items.img}
                alt="Travel Image"
                className="rounded-lg w-[400px] transition-transform transform  hover:scale-105 ease-in duration-1000"
              />

              <div className=" lg:-translate-y-64 -translate-y-52 translate-x-3 bg-primary-green px-2 h-fit flex flex-col items-center  rounded-md font-serif max-w-fit">
                {" "}
                <h2 className=" text-white font-bold font text-[36px] ">
                  {" "}
                  {items.day}
                </h2>
                <p className="text-white-green text-xs pb-1  ">{items.month}</p>
              </div>

              <div className="w-[90%] mx-auto -translate-y-32 h-fit p-4 bg-white-green rounded-lg">
                <h4 className="text-slate-blue font-bold text-start">
                  {items.title}
                </h4>

                <p className="text-gray-600 font-medium my-5 text center">
                  {items.description}
                </p>
                <PrimaryButton
                  className={"bg-primary-green"}
                  buttonName={"Read More"}
                  url={"src/views/NewsPage.jsx"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
