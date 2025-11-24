import React from "react";
import PrimaryButton from "../PrimaryButton";
import { AppContext, useGlobalContext } from "../../Context";

const QualityCategoryTab = ({ buttonName, descripition }) => {
  const { qualityDescription, comfort, prestige } =
    useGlobalContext(AppContext);

  return (
    <div className="">
      <div >
        <PrimaryButton
          className={" font-medium h-7 border-b-2 border-primary-green "}
          shadow
          buttonName={buttonName}
          rounded={" no-rounded"}
          textColor={"text-primary-green"}
          scale
        />
      </div>

      {/* <div className="">
        <PrimaryButton
          className={"font-medium h-7  border-b-2 border-primary-green "}
          shadow
          buttonName={"COMFORT"}
          rounded={" no-rounded"}
          scale
          textColor={"text-primary-green"}
        />
      </div>

      <div className="">
        <PrimaryButton
          className={" font-medium h-7  border-b-2 border-primary-green "}
          shadow
          buttonName={"PRESTIGE"}
          rounded={" no-rounded"}
          scale
          textColor={"text-primary-green"}
        />
      </div> */}
      
      
{qualityDescription && buttonName === 'LUXURY'? <p className="text-gray-600 pt-4  left-0 w-[300px] md:w-[500px] absolute text-sm">{descripition} </p> 
:comfort  && buttonName === 'COMFORT' ? 
<p className="text-gray-600 pt-4   w-[300px] md:w-[500px] absolute sm:-left-[150px] -left-[100px] text-sm">{descripition}</p>

:prestige  && buttonName === 'PRESTIGE'
? <p className="text-gray-600 pt-4  sm:-left-[305px] -left-[210px] w-[300px] md:w-[475px] absolute text-sm"> {descripition}</p>:null}
          
      

     

      

      
        
      
    </div>
  );
};

export default QualityCategoryTab;
