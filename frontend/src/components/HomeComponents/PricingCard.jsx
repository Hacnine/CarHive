import carImg from "../../assets/pricing-card-car.svg";
import { TiTick } from "react-icons/ti";
import {
  essentialPlanOptions,
  proPlanOptions,
  recommendedPlanOptions,
} from "../../constants";
import PrimaryButton from "../PrimaryButton";

const PricingCard = ({ special, headText, plan }) => {
  const currentPlanOptions =
    plan === "recommended"
      ? recommendedPlanOptions
      : plan === "pro"
      ? proPlanOptions
      : essentialPlanOptions;

  return (
    <div
      className={`h-[557px] flex items-center flex-initial sm:flex-1 w-full max-h-[557px] sm:w-fit max-w-[312px] border border-secondary-gray py-8 px-5 rounded-[10px]  ${
        special ? "bg-white-green" : "bg-white hover:scale-110 transition-all duration-300 ease-in"
      } flex flex-col relative `}
    >
      {special ? (
        <h2 className="text-slate-blue font-bold text-4xl mb-2">{headText}</h2>
      ) : (
        <div className="mb-[30px]">
          <p
            className={`${
              plan === "recommended" ? "text-primary-green" : "text-slate-blue"
            } font-bold uppercase text-center mb-[6px]`}
          >
            {plan}
          </p>
          <h2 className="text-slate-blue  font-bold text-4xl">{headText}</h2>
        </div>
      )}

      {special ? (
        <p className="text-light-gray">Choose our best plan to save a lot.</p>
      ) : (
        <div className="flex flex-col gap-2 items-start">
          {currentPlanOptions.map((options, i) => (
            <div className="flex items-start " key={i}>
              <TiTick className="w-8" />

              <p className="text-light-gray w-52 text-left">{options}</p>
            </div>
          ))}
        </div>
      )}

      {plan ? (
        <PrimaryButton
          className={`${
            plan === "recommended"
              ? "bg-primary-green  shadow-green-800  text-white"
              : " bg-slate-blue  text-white shadow-slate-blue "
          } mx-auto absolute bottom-7 left-0 right-0 w-60 h-13  shadow-lg py-3`}
          buttonName={"CHOOSE A PLAN"}
          textColor={"text-primary-green"}
          scale
        />
      ) : (
        <img
          src={carImg}
          alt="car"
          width={200}
          className="absolute right-0 bottom-12"
        />
      )}
    </div>
  );
};

export default PricingCard;
