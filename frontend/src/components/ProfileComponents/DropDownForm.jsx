import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Typography } from "@material-tailwind/react";
const DropDownForm = ({label='Language',menuItemDes,menuItemOne,menuItemTwo,menuItemThree}) => {
  const [selectedOption, setSelectedOption] = useState("English");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <Typography
          variant="subtitle1"
          gutterBotttom
          style={{ margin: "8px 0", fontSize: "14px" }}
          className=" font-open text-blue-gray-900 font-bold"
        >
          {label}
        </Typography>
        <Select
          value={selectedOption}
          onChange={handleChange}
          style={{ border: "", height: "40px", outline: "none" }}
          className="border  bg-white-green text-gray-600 font-medium text-sm  placeholder:text-gray-500 focus:border-transparent focus:ring-4  transition-all ease-in duration-300  gap-3 px-2 w-full h-10 rounded-md focus:ring-green-100  placeholder:font-bold font-open hover:border-transparent outline-none"
        >
          <MenuItem value="">{menuItemDes}</MenuItem>
          <MenuItem value="option1">{menuItemOne}</MenuItem>
          <MenuItem value="option2">{menuItemTwo}</MenuItem>
          <MenuItem value="option3">{menuItemThree}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownForm;
