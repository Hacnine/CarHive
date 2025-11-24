import React from "react";
import { useEffect } from "react";
import { cancelledOrders, completedOrders, scheduledOrders } from "../../constants/index_four";
import OrderInfoCard from "../../components/ProfileComponents/OrderInfoCard";

const OrderContainer = ({title,orders}) => {
  return (
    <div className="bg-white-green px-7 py-7 rounded-md">
          <h4 className=" text-slate-blue text-2xl font-open font-bold">
            {title}
          </h4>
    
          {orders.map((items, index) => (
            <div className="mt-3"key={index}>
                <OrderInfoCard index={index} {...items} />
            </div>
          ))}
        </div>
  )
}

export default OrderContainer
