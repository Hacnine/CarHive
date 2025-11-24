import happyCustomer from "../../assets/happyCustomer2.jpg";
import { qualityCategory } from "../../constants/index_three";
import QualityCategoryTab from "../AboutUs/QualityCategoryTab";
const QualityForClients = () => {
  return (
    <div className="flex items-center md:justify-center md:flex-row flex-col bg-white-green sm:h-[448px] h-[790px]">
      <div className="md:w-1/2 w-full">
        <img src={happyCustomer} alt="" />
      </div>
      <div className="md:w-1/2 h-full w-full lg:px-28 px-16 ">
        <div className="flex items-center flex-col  justify-center ">
          <h1 className=" text-[44px] font-bold py-10 text-slate-blue w-full  border-black font-serif ">
            Only Quality For Clients
          </h1>
          <div className="flex items-start sm:justify-between justify-center w-full   ">
            {qualityCategory.map((items, index) => (
              <div className="w-full  border-black relative" key={index}>
                <QualityCategoryTab
                  buttonName={items.buttonName}
                  descripition={items.descripion}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityForClients;
