import { BiHeart } from "react-icons/bi";
import { carOne } from "../../assets";
import { MdDeleteOutline } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Scrollbars from "react-custom-scrollbars-2";
import { useContext } from "react";
import { CartContext } from "../../views/RentalPage/Rental";

const BookingList = ({ id, name, description, price, imgSrc,quantity }) => {
const {removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);
  return (
    <div className=" "> 
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="checkbox"
          className="text-deep-green rounded focus:ring-0 cursor-pointer border-2 border-primary-green mr-2"
          id={`${id}`}/>
        <img src={imgSrc} alt="Booking Car" className="w-20 h-16 object-cover rounded" />
        <div className="ml-4">
          <div className="text-md font-extralight font-open text-slate-blue">
            {name}
          </div>
          <div className="text-gray-600 font-open text-sm">
            Daily Rental: <span className=" text-slate-blue">${price*quantity}</span>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ml-auto ">
          <BiHeart className="text-orange-900 w-5 h-5 cursor-pointer" />
          <MdDeleteOutline className="text-orange-900 w-5 h-5 cursor-pointer" onClick={()=>(removeItem(id))}/>
        </div>
        <div className="ml-2  flex items-center justify-center font-serif">
          <FiPlus className="w-7 h-7 text-deep-green rounded bg-blue-gray-100/40 p-1 hover:cursor-pointer " onClick={()=>(incrementQuantity(id))} />
          <input
            type="text"
            className="w-9 h-9 border border-transparent bg-white-green hover:cursor-pointer hover:border-gray-400 focus:border-gray-300 font-semibold text-sm"
            placeholder={quantity}
          />
          <FiMinus className="w-7 h-7 text-deep-green rounded bg-blue-gray-100/40 p-1 hover:cursor-pointer"  onClick={()=>(decrementQuantity(id,quantity))}/>
        </div>
        {/* <button className="ml-auto text-red-500">Remove</button> */}
      </div>

   
    </div>
  );
};

export default BookingList;
