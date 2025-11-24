import React from 'react'
import { Link } from 'react-router-dom'
import { carOne } from '../../assets'

const Homep = () => {
  return (
  <div className=" bg-white-green font-sans">
    
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
    
        <div className="flex items-center justify-between mb-8">
            <div class="text-2xl font-bold">Car Rental</div>
            <div class="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="text-sm">2 items</span>
            </div>
        </div>
    
        <div className="mb-8">
            <div className="flex items-center mb-4">
                <img src={carOne} alt="Car 1" className="w-16 h-16 object-cover rounded"/>
                <div className="ml-4">
                    <div className="text-lg font-semibold">Car Model 1</div>
                    <div className="text-gray-600">Daily Rental: $50</div>
                </div>
                <button className="ml-auto text-red-500">Remove</button>
            </div>
    
            <div className="flex items-center">
                <img src={carOne} alt="Car 2" className="w-16 h-16 object-cover rounded"/>
                <div className="ml-4">
                    <div className="text-lg font-semibold">Car Model 2</div>
                    <div className="text-gray-600">Daily Rental: $60</div>
                </div>
                <button className="ml-auto text-red-500">Remove</button>
            </div>
        </div>
    
        <div className="mb-8">
        </div>
    
        <div className="mb-8">
        </div>
    
        <div className="mb-8">
        </div>
    
        <div className="mb-8">
        </div>
    
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Proceed to Checkout</button>
    
        <div className="mt-4">
          
    
        <div className="mt-4 text-gray-500">
           
        </div>
    
    </div>
    </div>
    </div>

    
  )
}

export default Homep
