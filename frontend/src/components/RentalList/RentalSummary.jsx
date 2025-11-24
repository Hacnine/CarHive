import React from 'react'
import SecondaryButton from '../Buttons/SecondaryButton'
import { useContext } from "react";
import { CartContext } from '../../views/RentalPage/Rental';

const BookingSummary = () => {
  const { totalAmount} = useContext(CartContext);

  return (
    <div className='space-y-3 '>
        <p className=' font-semibold font-open text-slate-blue'>Booking Summary</p>
        <p className='text-gray-600 text-sm'>Subtotal (2 items)</p>
        
        <p className='text-gray-600 text-sm'>Shipping Fee Discount</p>
        <div className="flex items-start justify-start flex-col gap-2">
          <input type="text" placeholder="Enter Voucher Code" className="border border-gray-300 rounded md:w-60 w-full "/>
          <SecondaryButton buttonName={'APPLY'}/>
          </div>
          <div className="flex items-center justify-between gap-5">
            <p className=' font-open '>Total</p>
            <p className='font-open text-slate-blue'>${totalAmount}</p>
          </div>
        
    </div>
  )
}

export default BookingSummary
