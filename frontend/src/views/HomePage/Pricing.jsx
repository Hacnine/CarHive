import { useState } from "react";
import { PricingCard } from "../../components";
import { Switch } from "@mui/material";

const Pricing = () => {
  const [switchVal, setSwitchVal] = useState(false);
  return (
    <div>
      <h1 className="head_text font-open text-slate-blue items-center ">
        <span className="text-primary-green ml-2 "> See Our </span>Pricing Plan
      </h1>

      <div className="py-9 flex items-center justify-center gap-7">
        <p
          className={`font-bold ${
            switchVal ? "text-slate-blue" : "text-primary-green"
          } transition-all duration-300 ease-in`}
        >
          Monthly
        </p>

        {/* <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" 
          value={switchVal} onChange={() => setSwitchVal((prev) => !prev) }/>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label> */}
        <Switch
          value={switchVal}
          onChange={() => setSwitchVal((prev) => !prev)}
          id="custom-switch-component"
          // ripple={false}
          className="h-full w-full checked:bg-primary-green/30"
          containerProps={{
            className: "w-11 h-6",
          }}
          circleProps={{
            className: "before:hidden left-0.5 border-none",
          }}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: "#179510",
              '&:hover': {
                backgroundColor: "bg-primary-green/30",
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: "#179510",
            },}}
         
        />

        <p
          className={`font-bold ${
            switchVal ? "text-primary-green " : "text-slate-blue"
          } transition-all duration-300 ease-in`}
        >
          Annually
        </p>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-5">
        <div className="flex flex-col sm:flex-row gap-5 flex-initial xl:flex-1 w-full justify-start items-center sm:items-start">
          <PricingCard special headText={"Save by choosing our best plan"} />
          <PricingCard
            plan="essential"
            headText={`$${switchVal ? "349.99" : "29.50"}`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-5 flex-initial xl:flex-1 w-full justify-start items-center sm:items-start">
          <PricingCard
            plan="recommended"
            headText={`$${switchVal ? "529.99" : "44.50"}`}
          />
          <PricingCard
            plan="pro"
            headText={`$${switchVal ? "835" : "70.50"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
