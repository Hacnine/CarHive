import { useNavigate } from "react-router-dom";
import BookingCars from "../../components/RentalList/RentalCars";
import { MdDelete } from "react-icons/md";
import Scrollbars from "react-custom-scrollbars-2";
import { useContext } from "react";
import { CartContext } from "./Rental";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import BookingSummary from "../../components/RentalList/RentalSummary";
import Header from "../../components/Header";
import Footer from "../Footer";
import ProfileLinks from "../../components/ProfileComponents/ProfileLinks";


const BookingContext = () => {
  const { data, totalAmount, totalItem } = useContext(CartContext);
  const goBack = useNavigate();
  const items = 4;
  const {clearCart} = useContext(CartContext);
  
  let page = null;
  if(data.length === 0){

    page = <>
    <p className="text-sm">You don't have any booking car in your rental.</p>
    </>
  }
  else{
    page= <>
      <div className="ml-4 flex items-center gap-3">
          <input
            type="checkbox"
            name="checkbox"
            className="text-deep-green rounded focus:ring-0 cursor-pointer border-2 border-primary-green"
            id={``}
          />
          <p className=" text-sm ">
            SELECT All{" "}
            <span className="font-bold font-open">({totalItem} ITEM(S))</span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 justify-end cursor-pointer text-red-600 " onClick={clearCart} >
          <MdDelete className=" w-6 h-6 " />
          <p className="text-sm">DELETE</p>
        </div>
    </>

  }

  return (
  <div className="w-full mx-auto px-4">
    <Header title={'Cart'} bg={' bg-sevices'} pb/>
  
  <div className="flex items-start justify-between flex-col md:flex-row gap-8 wrapper my-20">
   <div className=" md:w-[30%] w-full">
   <div className=" bg-white-green rounded-md px-7 py-7 w-full ">
      <ProfileLinks />
      
    </div>

    <div className=" bg-white-green p-8 py-10 rounded space-y-3 mt-8">
      <BookingSummary/> 
      <SecondaryButton className={'bg-primary-green w-full'} buttonName={'Proceed to Checkout'}/>

      </div>
   </div>
      <div className=" flex items-start justify-center flex-col gap-4 w-full">
      <div className="  w-full ">

      <div className=" flex justify-between bg-white-green py-5 px-4 w-full ">
        {page}
      </div>

      <div className="font-sans container mx-auto my-8 pl-8 py-8 pr-2  bg-white-green rounded-md shadow-lg w-full">
        <Scrollbars style={{ height: 400 }}>
          {data.map((itm, index)  => (
            <div className="pr-5 divide-y divide-primary-green border-b border-gray-300 mb-2" key={index}>
              <BookingCars {...itm} />
            </div>
          ))}
        </Scrollbars>
      </div>
      
      </div>
     
    </div>
    </div>
    </div>

   
  );
};

export default BookingContext;
