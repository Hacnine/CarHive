import React from "react";

const CheckBoxInput = ({ filledName, title }) => {
  return (
    <div>
      <h4 className="text-slate-blue font-open text-lg pb-2">
        {title}
      </h4>
      <div className="">
        {filledName.map((items, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name="checkbox"
              className="text-deep-green rounded focus:ring-0 cursor-pointer border-2 border-primary-green"
              id={`${index}`}
            />
            <label className="text-gray-600 ml-2  text-sm  tracking-wider font-medium">
              {items.item}
            </label>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default CheckBoxInput;
