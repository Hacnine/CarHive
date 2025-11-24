import { FaCalendar } from "react-icons/fa";

import { AiTwotoneHeart } from "react-icons/ai";
import { GiCarDoor, GiAirZigzag, GiSteeringWheel } from "react-icons/gi";

import {
  BsBag,
  BsCarFront,
  BsFillCarFrontFill,
  BsFuelPumpDiesel,
  BsSpeedometer,
} from "react-icons/bs";
import { ImMakeGroup } from "react-icons/im";
import { SiAirbrakedotio } from "react-icons/si";
import { PiEngineFill } from "react-icons/pi";
import car16 from "../assets/car-16.jpg";
import carLexus from "../assets/car-16-lexus.jpg";
import Bugatti from "../assets/Bugatti.jpg";
import carAstonMartin from "../assets/car-14.jpg";
import carBentleyContinentalGT from "../assets/car-17.jpg";
import car2017BentleyContinentalGT from "../assets/car-6.jpg";

import { MdOutlineAccountBox } from "react-icons/md";
import { carOne, carThree, carTwo } from "../assets";

export const carNames = [
  {
    id: 1,
    name: "Aston Martin",
    imgSrc: carAstonMartin,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "230",
    quantity: 1,

    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: BsBag, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Type", type: "Sedan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },

  {
    id: 2,
    name: "Bentley Continental",
    imgSrc: car2017BentleyContinentalGT,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "230",
    quantity: 1,

    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: BsBag, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },

  {
    id: 3,
    name: "Bentley Continental",
    imgSrc: carBentleyContinentalGT,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "230",
    quantity: 1,

    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: BsBag, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },

  {
    id: 4,
    name: "BMW X3",
    imgSrc: carOne,
    Icon: AiTwotoneHeart,
    number: 74,
    price: "320",
    quantity: 1,
    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: BsBag, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },
  {
    id: 5,
    name: "BMW M2",
    imgSrc: carTwo,
    Icon: AiTwotoneHeart,
    number: 94,
    price: "367",
    quantity: 1,
    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: BsBag, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },
  {
    id: 6,
    name: "Ford Explorer",
    imgSrc: carThree,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "230",
    quantity: 1,

    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: BsBag, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },
  {
    id: 7,
    name: "Bugatti Chiron",
    imgSrc: Bugatti,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "230",
    quantity: 1,

    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: BsBag, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },

  {
    id: 8,
    name: "Jeep Grand Cherokee",
    imgSrc: car16,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "230",
    quantity: 1,

    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: GiCarDoor, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },

  {
    id: 9,
    name: "Lexus",
    imgSrc: carLexus, // Replace with actual image source
    Icon: AiTwotoneHeart,
    number: 64,
    price: "230",
    quantity: 1,

    carSpecification: [
      { Icon: MdOutlineAccountBox, Feature: "Seat", type: "4" },
      { Icon: GiCarDoor, Feature: "Doors", type: "4" },
      { Icon: GiCarDoor, Feature: "Luggage", type: "4" },
      { Icon: ImMakeGroup, Feature: "Brand", type: "Nissan" },

      { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
      { Icon: BsCarFront, Feature: "Body", type: "" },
      { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "Hybrid" },
      { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
      { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
      { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
      { Icon: FaCalendar, Feature: "Year", type: "2022" },
      { Icon: PiEngineFill, Feature: "Engine", type: "Hybrid" },
      { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
      { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
    ],
  },
];
