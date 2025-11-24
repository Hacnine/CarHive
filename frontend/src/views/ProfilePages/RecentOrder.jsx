import React, { useState } from "react";
import OrderInfoCard from "../../components/ProfileComponents/OrderInfoCard";
import BookingWizard from "../BookingWizard";

const formatDate = (iso) => {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return String(iso);
  }
};

const RecentOrder = ({ orders }) => {
  const [showBookingDemo, setShowBookingDemo] = useState(false);
  // orders === null -> loading
  // orders === [] -> no recent orders
  // orders is array -> render

  return (
    <div className="bg-white-green px-7 py-7 rounded-md">
      <h4 className=" text-slate-blue text-2xl font-open font-bold">
        Recent Orders
      </h4>

      {orders === null ? (
        <p className="mt-4 text-gray-600">Loading recent orders...</p>
      ) : Array.isArray(orders) && orders.length === 0 ? (
        <div className="mt-4">
          <p className="text-gray-600 mb-3">You have no recent orders.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded mr-2" onClick={() => setShowBookingDemo(s => !s)}>{showBookingDemo ? 'Hide' : 'Try booking demo'}</button>
        </div>
      ) : (
        orders.map((raw, index) => {
          // Normalize backend shape to the props expected by OrderInfoCard
          const item = {
            orderId: raw.orderId || raw.id || raw._id || '',
            carName: raw.carName || (raw.vehicle ? `${raw.vehicle.make} ${raw.vehicle.model}` : 'Unknown vehicle'),
            pickUpLocation: raw.pickUpLocation || (raw.pickupLocation ? (raw.pickupLocation.city || raw.pickupLocation.name) : ''),
            dropOffLocation: raw.dropOffLocation || (raw.dropoffLocation ? (raw.dropoffLocation.city || raw.dropoffLocation.name) : ''),
            pickUpDate: formatDate(raw.pickUpDate || raw.pickUpDate || raw.startDate || raw.pickUpDate),
            returnDate: formatDate(raw.returnDate || raw.endDate),
            status: raw.status || ''
          };

          return (
            <div className="mt-3" key={index}>
              <OrderInfoCard index={index} {...item} />
            </div>
          );
        })
      )}

      {showBookingDemo && (
        <div className="mt-6">
          <BookingWizard />
        </div>
      )}
    </div>
  );
};

export default RecentOrder;
