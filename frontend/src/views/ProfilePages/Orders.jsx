import React from "react";
import { useEffect } from "react";
import { cancelledOrders, completedOrders, scheduledOrders } from "../../constants/index_four";
import OrderInfoCard from "../../components/ProfileComponents/OrderInfoCard";
import OrderContainer from "../../components/ProfileComponents/OrderContainer";
import ProfileLinks from "../../components/ProfileComponents/ProfileLinks";
import { AppContext, useGlobalContext } from "../../Context";
import Header from "../../components/Header";
import Footer from "../Footer";

const Orders = () => {
  const { activeLink, setActiveLink, title, setTitle } =
  useGlobalContext(AppContext);


  useEffect(() => {
    const dataToSend = "Orders";
    setTitle(dataToSend);
  }, []);


  return (
    <div>
      <Header title={'Orders'} />
      <div className="flex items-start justify-between flex-col md:flex-row gap-8 wrapper my-20">
      <div className=" bg-white-green rounded-md px-7 py-7 md:w-[30%] w-full ">
        <ProfileLinks />
      </div>

      <div className="flex items-center justify-center flex-col md:w-[70%] w-full gap-10 ">
      <div className="w-full">
        <OrderContainer title={"Scheduled Orders"} orders={scheduledOrders} />
      </div>

      <div className="w-full">
        <OrderContainer title={"Completed Orders"} orders={completedOrders} />
      </div>

      <div className="w-full">
        <OrderContainer title={"Cancelled Orders"} orders={cancelledOrders} />
      </div>
      </div>
    </div>
    </div>

  );
};

export default Orders;
