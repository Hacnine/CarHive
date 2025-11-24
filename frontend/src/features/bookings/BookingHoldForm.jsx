import React, { useState } from 'react';
import { useHoldBookingMutation } from '../../app/services/bookingsApi.js';
import PrimaryButton from '../../components/PrimaryButton';

export default function BookingHoldForm() {
  const [vehicleId, setVehicleId] = useState('');
  const [locationPickupId, setLocationPickupId] = useState('');
  const [locationDropoffId, setLocationDropoffId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [holdBooking, { isLoading, error, data }] = useHoldBookingMutation();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const body = { vehicleId, locationPickupId, locationDropoffId, startDate, endDate };
      const res = await holdBooking(body).unwrap();
      // Simple UX: show booking id or redirect to MyBookings
      alert(`Hold created: ${res.data.booking.id}`);
    } catch (err) {
      console.error(err);
      alert(err?.data?.message || 'Error creating hold');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md">
      <h3 className="text-lg font-semibold mb-3">Place a temporary hold</h3>
      <form onSubmit={submit} className="space-y-2">
        <input className="w-full p-2 border rounded" placeholder="Vehicle ID" value={vehicleId} onChange={e=>setVehicleId(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Pickup Location ID" value={locationPickupId} onChange={e=>setLocationPickupId(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Dropoff Location ID" value={locationDropoffId} onChange={e=>setLocationDropoffId(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Start (ISO)" value={startDate} onChange={e=>setStartDate(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="End (ISO)" value={endDate} onChange={e=>setEndDate(e.target.value)} />
        <PrimaryButton buttonName={isLoading ? 'Placing...' : 'Place Hold'} className="bg-blue-600 w-full" type="submit" />
      </form>
      {error && <div className="text-red-600 mt-2">{error?.data?.message || 'Failed'}</div>}
      {data && <div className="text-green-600 mt-2">Hold created: {data.data.booking.id}</div>}
    </div>
  );
}
