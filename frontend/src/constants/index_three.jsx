import { GiAirZigzag, GiCarDoor, GiSteeringWheel } from "react-icons/gi";
import { testiOne, testiThree, testiTwo } from "../assets";
import carPrevOne from "../assets/carPrevOne (1).svg";
import carPrevTwo from "../assets/carPrevOne (2).svg";
import carPrevThree from "../assets/carPrevOne (3).svg";
import carPrevFour from "../assets/carPrevOne (4).svg";
import carPrevFive from "../assets/carPrevOne (5).svg";
import {
  BsCarFront,
  BsFillCarFrontFill,
  BsFuelPumpDiesel,
  BsSpeedometer,
} from "react-icons/bs";
import { ImMakeGroup } from "react-icons/im";
import { SiAirbrakedotio } from "react-icons/si";
import { FaCalendar } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";

import Director5 from "../assets/Director5.svg"
import Director1 from "../assets/Director1.svg"
import Director2 from "../assets/Director2.svg"
import Director3 from "../assets/Director3.svg"

export const qualityCategory = [
  {buttonName:'LUXURY', descripion:'We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.'},
  {buttonName:'COMFORT', descripion:"We prioritize your comfort and convenience throughout your journey. We understand that a comfortable ride can make a world of difference, whether you're embarking on a business trip or enjoying a leisurely vacation. That's why we offer a wide range of well-maintained, comfortable cars that cater to your specific needs."},
  {buttonName:'PRESTIGE', descripion:" We understand that prestige goes beyond luxury. It's about making a statement, embracing sophistication, and indulging in the finer things in life. That's why we offer an exclusive selection of prestigious cars that exude elegance, style, and status."},
]


export const directors = [
  {img: Director5,name:'Fynley Wilkinson', title:'Chef Director Officer'},
  {img:Director1 ,name:'Peter Welsh', title:'Chief Technology Officer',},
  {img:Director2 ,name:'John Shepard', title:'Chief Executive Officer',},
  {img:Director3 ,name:'Robyn Peel', title:'Director of Finance'},
]

export const vehicleType = [
    {item: "Car"},
    {item: "Van"},
    {item: "Minibus"},
    {item: "Prestige"},
];

export const carBodyType =[
    {item:"Convertible"},
    {item:"Coupe"},
    {item:"Exotic Cars"},
    {item:"Hatchback"},
    {item:"Minivan"},
    {item:"Truck"},
    {item:"Sedan"},
    {item:"Sports Car"},
    {item:"Station Wagon"},
    {item:"SUV"},

]

export const  carSeats=[
    {item:"2 seats"},
    {item:"4 seats"},
    {item:"6 seats"},
    {item:"6+ seats"},

]

export const  engineCapacity=[
    {item:"1000 - 2000" },
    {item:"2000 - 4000" },
    {item:"4000 - 6000" },
    {item:"6000+"},
]




export const carSpecification = [
  { Icon: GiAirZigzag, Feature: "AC", type: "Air Condition" },
  { Icon: BsCarFront, Feature: "Body", type: "Hatchback " },
  { Icon: BsFuelPumpDiesel, Feature: "Fuel Type", type: "BMW x3" },
  { Icon: BsSpeedometer, Feature: "Mileage", type: "16km" },
  { Icon: GiCarDoor, Feature: "Door", type: "4 Doors" },
  { Icon: ImMakeGroup, Feature: "Make", type: "Nissan" },
  { Icon: GiSteeringWheel, Feature: "Drivetrian", type: "Front Wheel" },
  { Icon: SiAirbrakedotio, Feature: "Brake", type: "Front Wheel" },
  { Icon: FaCalendar, Feature: "Year", type: "2022" },
  { Icon: PiEngineFill, Feature: "Engine", type: "Hybride" },
  { Icon: BsFillCarFrontFill, Feature: "Gear Box", type: "Automatic" },
  { Icon: BsFillCarFrontFill, Feature: "VIN", type: "45456444" },
];

export const previewCarCard = [
  { img: carPrevOne },
  { img: carPrevTwo },
  { img: carPrevThree },
  { img: carPrevFour },
  { img: carPrevFive },
];

export const numBerCard = [
  { num: "15425", title: "Completed Orders" },
  { num: "8745", title: "Happy Customers" },
  { num: "235", title: "Vehicles Fleet" },
  { num: "15", title: "Years Experience" },
];

export const testimonials = [
  {
    img: "bg-testimonial-1",
    title: "Smooth and Cost-Effective Travel with CarHive",
    comment:
      "CarHive has made my travels a breeze. I highly recommend them for your next adventure!",
    commentor: "Sabbir Ahmed",
  },
  {
    img: "bg-testimonial-2",
    title: " A Reliable Choice for Family Vacations",
    comment:
      "I rented a car from CarHive for a family vacation, and it was a fantastic experience.  I wouldn't choose anyone else for my future trips.",
    commentor: "Sayed F.",
  },
  {
    img: "bg-testimonial-3",
    title: "Trustworthy and Transparent, Highly Recommended",
    comment:
      "CarHive has been my go-to choice.No hidden fees, no surprises - just smooth journeys. I trust CarHive for all my travel needs.",
    commentor: "Hasan Jabir",
  },
];

export const contact_us =
  "LET’S Let's Begin with CarHive: Your Passport to Adventure CarHive is your key to unlocking new horizons and embarking on unforgettable journeys. We're more than just a car rental service; we're your trusted travel partner. With a wide range of vehicles to choose from, competitive prices, and a dedication to customer satisfaction, CarHive makes your travel dreams a reality. Let's start your next adventure together!";

export const booking_intro =
  "At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.";
