import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import {
  carBodyType,
  carSeats,
  engineCapacity,
  vehicleType,
} from "../constants/index_three";
import CheckBoxInput from "../components/CarsForRental/CheckBoxInput";
import Header from "../components/Header";
import { carNames } from "../constants";
import { CarCard } from "../components";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import theme from "../Theme";
import Footer from "./Footer";

const CustomSlider = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-track": {
    backgroundColor: theme.palette.customSliderTrack.main,
  },
  "& .MuiSlider-thumb": {
    backgroundColor: theme.palette.customSliderThumb.main,
  },
}));

const CarsForRentalPage = () => {
  const [value, setValue] = useState([500, 1500]); // Set initial range values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <div className="w-full mx-auto px-4">
      <Header title={"Cars"} bg={"bg-singlecar"} />

      <div className="flex items-start justify-center md:flex-row flex-col gap-5   wrapper md:space-y-0 space-y-10 mb-10 ">
        <div className=" pt-2 space-y-9 md:w-[261px] w-full">
          <div className=" rounded-md  border boder-gray-500 shadow px-4 py-6 ">
            <CheckBoxInput filledName={vehicleType} title={"Vahicle Type"} />
          </div>

          <div className=" rounded-md  border border-gray-400/60  shadow px-4 py-6 ">
            <CheckBoxInput
              filledName={engineCapacity}
              title={"Engine Capacity"}
            />
          </div>
          <div className=" rounded-md  border border-gray-400/60  shadow px-4 py-6 ">
            <CheckBoxInput filledName={carBodyType} title={"Car Body Type"} />
          </div>

          <div className="rounded-md border border-gray-400/60  shadow px-4 py-6">
            <CheckBoxInput filledName={carSeats} title={"Car Seats"} />
          </div>

          <div className="md:w-[261px] w-full py-6 px-4 border border-gray-400/60  shadow space-y-1 rounded-md">
            <h4 className="text-slate-blue font-open text-lg line ">
              Price ($)
            </h4>
            <h5
              className=" text-gray-900 font-bold font-open text-sm"
              id="slider-label">
              Max {value[0]} - {value[1]}
            </h5>
            <ThemeProvider theme={theme}>
              <div className="" style={{ width: "full", padding: 4 }}>
                <Slider
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="slider-label"
                  valueLabelDisplay="auto"
                  step={1}
                  min={0}
                  max={2000}
                  color="customSliderTrack"
                  valueLabelFormat={(value) => `${value}`}
                />
              </div>
            </ThemeProvider>
          </div>
        </div>

        <div className=" w-full   border-black  h-full  ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {carNames.map((item, index) => (
              <div key={index} className=" p-2  ">
                <CarCard {...item} wideHeight={" md:w-[238px] md:h-[134px]"} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CarsForRentalPage;
