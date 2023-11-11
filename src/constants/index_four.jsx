import { FaCalendar, FaCar, FaHome, FaSignOutAlt } from "react-icons/fa";
import {MdAccountCircle} from "react-icons/md"
import profileOne from "../assets/profileOne.svg";
import {MdLocalOffer} from 'react-icons/md'
import {BsFillCalendar2XFill,BsFillCalendar2MinusFill, BsFillCalendar2CheckFill} from 'react-icons/bs'



export const orders = [

  {
    orderId: 'Order Id',
    carName: 'Car Name',
    pickUpLocation: 'Pick Up Location',
    dropOffLocation: 'Drop Off Location',
    pickUpDate: 'Pick Up Date',
    returnDate: 'Return Date',
    status: 'Status',
  },
  {
    orderId: '#01236',
    carName: 'Jeep Renegade',
    pickUpLocation: 'New York',
    dropOffLocation: 'Los Angeles',
    pickUpDate: 'March 2, 2023',
    returnDate: 'March 10, 2023',
    status: 'completed',
  },
  {
    orderId: '#01263',
    carName: 'Mini Cooper',
    pickUpLocation: 'San Francisco',
    dropOffLocation: 'Chicago',
    pickUpDate: 'March 8, 2023',
    returnDate: 'March 10, 2023',
    status: 'cancelled',
  },
  {
    orderId: '#01245',
    carName: 'Ferrari Enzo',
    pickUpLocation: 'Philadelphia',
    dropOffLocation: 'Washington',
    pickUpDate: 'March 6, 2023',
    returnDate: 'March 10, 2023',
    status: 'scheduled',
  },
  {
    orderId: '#01287',
    carName: 'Hyundai Staria',
    pickUpLocation: 'Kansas City',
    dropOffLocation: 'Houston',
    pickUpDate: 'March 13, 2023',
    returnDate: 'March 10, 2023',
    status: 'completed',
  },
  {
    orderId: '#01216',
    carName: 'Toyota Rav 4',
    pickUpLocation: 'Baltimore',
    dropOffLocation: 'Sacramento',
    pickUpDate: 'March 7, 2023',
    returnDate: 'March 10, 2023',
    status: 'scheduled',
  },
];


export const summary =[
  {Icon:BsFillCalendar2CheckFill , number:'03', title:'Upcoming Orders'},
  {Icon:MdLocalOffer , number:'07', title:'Coupons'},
  {Icon:BsFillCalendar2MinusFill , number:'58', title:'Total Orders'},
  {Icon:BsFillCalendar2XFill , number:'24', title:'Cancel Orders'},

]

export const profile = [
  { img: profileOne, name: "Jubayer Omar", email: "jubayer@carhive.com" },
];

export const profileLinks =[
  {linkName:'Dashbord', Icon:FaHome, link:'/dashboard' },
  {linkName:'Profile', Icon:MdAccountCircle, link:'/profile'},
  {linkName:'Orders', Icon:FaCalendar, link:'/orders' },
  {linkName:'Favorite Cars', Icon:FaCar, link:'/favorite-cars' },
  {linkName:'Sign Out', Icon:FaSignOutAlt, link:'/sign-out' },
]
