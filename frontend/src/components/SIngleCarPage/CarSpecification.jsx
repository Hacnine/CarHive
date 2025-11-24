import React from "react";
import Title from "../Title";

const CarSpecification = ({items}) => {
  return (
   <>
      <div className="flex items-center justify-center p-2 border border-primary-green rounded-md">
        <items.Icon className="text-deep-green w-10 h-10" />
      </div>
      <div className="text-start font-bold ml-3">
        <Title
          title={items.Feature}
          fontSize={"text-lg"}
          para={items.type}
          textColor={"text-gray-700"}
          paraTextColor={"text-gray-600 font-semibold font-roboto"}
        />
      </div>
    </>
  );
};

export default CarSpecification;
