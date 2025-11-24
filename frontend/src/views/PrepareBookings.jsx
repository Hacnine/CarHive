import React, { useState } from 'react';
import { useGetAllBookingsQuery, usePrepareBookingMutation } from '../app/services/bookingsApi';

const PrepareBookings = () => {
  const { data, error, isLoading, refetch } = useGetAllBookingsQuery({ status: 'confirmed,reserved' });
  const [prepareBooking] = usePrepareBookingMutation();

  const [preparationData, setPreparationData] = useState({});

  const handlePrepare = async (bookingId) => {
    const prep = preparationData[bookingId] || {};
    try {
      await prepareBooking({
        id: bookingId,
        cleaned: prep.cleaned || false,
        fueled: prep.fueled || false,
        inspected: prep.inspected || false,
        maintenanceDone: prep.maintenanceDone || false,
        conditionImages: prep.conditionImages || [],
        notes: prep.notes || ''
      }).unwrap();
      alert('Booking prepared successfully');
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error preparing booking');
    }
  };

  const updatePrep = (bookingId, field, value) => {
    setPreparationData(prev => ({
      ...prev,
      [bookingId]: { ...prev[bookingId], [field]: value }
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Failed to load bookings</div>;

  const bookings = data?.data?.bookings || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Prepare Bookings for Pickup</h1>
      {bookings.length === 0 && <div>No bookings need preparation</div>}
      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b.id} className="p-4 border rounded bg-white shadow">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Booking {b.id}</h3>
              <p>Vehicle: {b.vehicle?.make} {b.vehicle?.model}</p>
              <p>Pickup: {new Date(b.startDate).toLocaleString()}</p>
              <p>Status: {b.status}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preparationData[b.id]?.cleaned || false}
                  onChange={(e) => updatePrep(b.id, 'cleaned', e.target.checked)}
                />
                <span className="ml-2">Cleaned</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preparationData[b.id]?.fueled || false}
                  onChange={(e) => updatePrep(b.id, 'fueled', e.target.checked)}
                />
                <span className="ml-2">Fueled</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preparationData[b.id]?.inspected || false}
                  onChange={(e) => updatePrep(b.id, 'inspected', e.target.checked)}
                />
                <span className="ml-2">Inspected</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preparationData[b.id]?.maintenanceDone || false}
                  onChange={(e) => updatePrep(b.id, 'maintenanceDone', e.target.checked)}
                />
                <span className="ml-2">Maintenance Done</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Notes</label>
              <textarea
                className="w-full p-2 border rounded"
                value={preparationData[b.id]?.notes || ''}
                onChange={(e) => updatePrep(b.id, 'notes', e.target.value)}
                placeholder="Preparation notes..."
              />
            </div>
            <button
              onClick={() => handlePrepare(b.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Mark as Ready for Pickup
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepareBookings;