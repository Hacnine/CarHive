import React, { useState } from 'react';
import { useGetUserBookingsQuery, useConfirmBookingMutation, useCancelBookingMutation, useExtendBookingMutation, useReturnChecklistMutation, useOnlineCheckinMutation, useContactlessPickupMutation, useReportIncidentMutation, useCreateReviewMutation, useModifyBookingMutation, useRequestSOSMutation } from '../../app/services/bookingsApi.js';
import PrimaryButton from '../../components/PrimaryButton';

export default function MyBookings() {
  const { data, error, isLoading, refetch } = useGetUserBookingsQuery();
  const [confirmBooking, confirmState] = useConfirmBookingMutation();
  const [cancelBooking, cancelState] = useCancelBookingMutation();
  const [extendBooking, extendState] = useExtendBookingMutation();
  const [returnChecklist, returnState] = useReturnChecklistMutation();
  const [onlineCheckin, checkinState] = useOnlineCheckinMutation();
  const [contactlessPickup, pickupState] = useContactlessPickupMutation();
  const [reportIncident, incidentState] = useReportIncidentMutation();
  const [createReview, reviewState] = useCreateReviewMutation();
  const [modifyBooking, modifyState] = useModifyBookingMutation();
  const [requestSOS, sosState] = useRequestSOSMutation();

  const [returnForm, setReturnForm] = useState({ show: false, bookingId: null, photos: [], fuelLevel: '', odometer: '', damage: false, damageNotes: '', damageCost: 0 });
  const [incidentForm, setIncidentForm] = useState({ show: false, bookingId: null, type: 'breakdown', description: '', photos: [], location: '', severity: 'minor' });
  const [reviewForm, setReviewForm] = useState({ show: false, vehicleId: null, rating: 5, comment: '' });
  const [modifyForm, setModifyForm] = useState({ show: false, bookingId: null, startDate: '', endDate: '', locationPickupId: '', locationDropoffId: '' });
  const [sosForm, setSOSForm] = useState({ show: false, bookingId: null, note: '', location: '' });

  const handleConfirm = async (bookingId) => {
    try {
      await confirmBooking({ bookingId }).unwrap();
      alert('Booking confirmed');
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error confirming');
    }
  };

  const handleCancel = async (bookingId) => {
    try {
      await cancelBooking({ id: bookingId }).unwrap();
      alert('Booking cancelled');
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error cancelling');
    }
  };

  const handleExtend = async (bookingId) => {
    const additionalDays = prompt('How many additional days?');
    if (!additionalDays || isNaN(additionalDays)) return;
    
    try {
      await extendBooking({ id: bookingId, additionalDays: parseInt(additionalDays) }).unwrap();
      alert('Booking extended successfully');
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error extending booking');
    }
  };

  const handleReturn = async () => {
    try {
      await returnChecklist({
        id: returnForm.bookingId,
        photos: returnForm.photos,
        fuelLevel: parseFloat(returnForm.fuelLevel),
        odometer: parseInt(returnForm.odometer),
        damage: returnForm.damage,
        damageNotes: returnForm.damageNotes,
        damageCost: parseFloat(returnForm.damageCost)
      }).unwrap();
      alert('Return completed successfully');
      const booking = items.find(b => b.id === returnForm.bookingId);
      setReturnForm({ show: false, bookingId: null, photos: [], fuelLevel: '', odometer: '', damage: false, damageNotes: '', damageCost: 0 });
      setReviewForm({ show: true, vehicleId: booking.vehicleId, rating: 5, comment: '' });
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error processing return');
    }
  };

  const handleCheckin = async (bookingId) => {
    // Simulate document upload
    const documents = ['license.jpg', 'id.jpg']; // In real app, file upload
    try {
      await onlineCheckin({ id: bookingId, documents, agreementSigned: true }).unwrap();
      alert('Check-in completed');
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error checking in');
    }
  };

  const handleContactlessPickup = async (bookingId, qrCode) => {
    // Simulate photo upload
    const photos = ['condition1.jpg', 'odometer.jpg'];
    const fuelLevel = 0.8;
    const odometer = 15000;
    try {
      await contactlessPickup({ id: bookingId, qrCode, photos, fuelLevel, odometer }).unwrap();
      alert('Pickup completed');
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error picking up');
    }
  };

  const handleReportIncident = async () => {
    try {
      await reportIncident({
        id: incidentForm.bookingId,
        type: incidentForm.type,
        description: incidentForm.description,
        photos: incidentForm.photos,
        location: incidentForm.location,
        severity: incidentForm.severity
      }).unwrap();
      alert('Incident reported successfully');
      setIncidentForm({ show: false, bookingId: null, type: 'breakdown', description: '', photos: [], location: '', severity: 'minor' });
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error reporting incident');
    }
  };

  const handleSubmitReview = async () => {
    try {
      await createReview({
        vehicleId: reviewForm.vehicleId,
        rating: reviewForm.rating,
        comment: reviewForm.comment
      }).unwrap();
      alert('Review submitted successfully');
      setReviewForm({ show: false, vehicleId: null, rating: 5, comment: '' });
    } catch (e) {
      console.error(e);
      alert('Error submitting review');
    }
  };

  const handleModifyBooking = async () => {
    try {
      const payload = { id: modifyForm.bookingId };
      if (modifyForm.startDate) payload.startDate = modifyForm.startDate;
      if (modifyForm.endDate) payload.endDate = modifyForm.endDate;
      if (modifyForm.locationPickupId) payload.locationPickupId = modifyForm.locationPickupId;
      if (modifyForm.locationDropoffId) payload.locationDropoffId = modifyForm.locationDropoffId;
      await modifyBooking(payload).unwrap();
      alert('Booking modified successfully');
      setModifyForm({ show: false, bookingId: null, startDate: '', endDate: '', locationPickupId: '', locationDropoffId: '' });
      refetch();
    } catch (e) {
      console.error(e);
      alert('Error modifying booking');
    }
  };

  const handleRequestSOS = async () => {
    try {
      await requestSOS({
        id: sosForm.bookingId,
        note: sosForm.note,
        location: sosForm.location
      }).unwrap();
      alert('SOS request sent. Help is on the way!');
      setSOSForm({ show: false, bookingId: null, note: '', location: '' });
    } catch (e) {
      console.error(e);
      alert('Error sending SOS');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Failed to load bookings</div>;

  const items = data?.data || [];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">My Bookings</h2>
      {items.length === 0 && <div>No bookings yet</div>}
      <div className="grid gap-4">
        {items.map((b) => (
          <div key={b.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{b.vehicle?.make} {b.vehicle?.model} ({b.vehicle?.year})</div>
              <div className="text-sm text-gray-600">{b.status} - {new Date(b.startDate).toLocaleString()} → {new Date(b.endDate).toLocaleString()}</div>
              <div className="text-sm">Pickup: {b.pickupLocation?.name}, Drop-off: {b.dropoffLocation?.name}</div>
              {b.status === 'checked_in' && b.addons?.checkin?.qrCode && (
                <div className="text-sm text-green-600">QR Code: {b.addons.checkin.qrCode}</div>
              )}
            </div>
            <div className="space-x-2">
              {b.status === 'pending_hold' && (
                <PrimaryButton buttonName="Confirm" className="bg-green-600" onClick={() => handleConfirm(b.id)} />
              )}
              {b.status === 'ready_for_pickup' && (
                <PrimaryButton buttonName="Check-in" className="bg-blue-600" onClick={() => handleCheckin(b.id)} />
              )}
              {b.status === 'checked_in' && (
                <PrimaryButton buttonName="Pickup" className="bg-orange-600" onClick={() => handleContactlessPickup(b.id, b.addons?.checkin?.qrCode)} />
              )}
              {b.status === 'active' && (
                <>
                  <PrimaryButton buttonName="Extend" className="bg-purple-600" onClick={() => handleExtend(b.id)} />
                  <PrimaryButton buttonName="Return" className="bg-yellow-600" onClick={() => setReturnForm({ ...returnForm, show: true, bookingId: b.id })} />
                  <PrimaryButton buttonName="Report Incident" className="bg-red-500" onClick={() => setIncidentForm({ ...incidentForm, show: true, bookingId: b.id })} />
                  <PrimaryButton buttonName="SOS" className="bg-red-700" onClick={() => setSOSForm({ ...sosForm, show: true, bookingId: b.id })} />
                </>
              )}
              {['pending','confirmed','pending_hold'].includes(b.status) && (
                <PrimaryButton buttonName="Modify" className="bg-indigo-600" onClick={() => setModifyForm({ show: true, bookingId: b.id, startDate: b.startDate?.split('T')[0] || '', endDate: b.endDate?.split('T')[0] || '', locationPickupId: b.locationPickupId, locationDropoffId: b.locationDropoffId })} />
              )}
              <PrimaryButton buttonName="Cancel" className="bg-red-600" onClick={() => handleCancel(b.id)} />
            </div>
          </div>
        ))}
      </div>

      {returnForm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h3 className="text-lg mb-4">Return Checklist</h3>
            <div className="space-y-4">
              <input type="number" step="0.1" placeholder="Fuel Level (0-1)" value={returnForm.fuelLevel} onChange={(e) => setReturnForm({ ...returnForm, fuelLevel: e.target.value })} className="w-full p-2 border rounded" />
              <input type="number" placeholder="Odometer" value={returnForm.odometer} onChange={(e) => setReturnForm({ ...returnForm, odometer: e.target.value })} className="w-full p-2 border rounded" />
              <label className="flex items-center">
                <input type="checkbox" checked={returnForm.damage} onChange={(e) => setReturnForm({ ...returnForm, damage: e.target.checked })} />
                <span className="ml-2">Damage</span>
              </label>
              {returnForm.damage && (
                <>
                  <textarea placeholder="Damage Notes" value={returnForm.damageNotes} onChange={(e) => setReturnForm({ ...returnForm, damageNotes: e.target.value })} className="w-full p-2 border rounded" />
                  <input type="number" placeholder="Damage Cost" value={returnForm.damageCost} onChange={(e) => setReturnForm({ ...returnForm, damageCost: e.target.value })} className="w-full p-2 border rounded" />
                </>
              )}
            </div>
            <div className="flex space-x-2 mt-4">
              <PrimaryButton buttonName="Submit Return" onClick={handleReturn} />
              <PrimaryButton buttonName="Cancel" onClick={() => setReturnForm({ show: false, bookingId: null, photos: [], fuelLevel: '', odometer: '', damage: false, damageNotes: '', damageCost: 0 })} />
            </div>
          </div>
        </div>
      )}

      {incidentForm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h3 className="text-lg mb-4">Report Incident</h3>
            <div className="space-y-4">
              <select value={incidentForm.type} onChange={(e) => setIncidentForm({ ...incidentForm, type: e.target.value })} className="w-full p-2 border rounded">
                <option value="breakdown">Breakdown</option>
                <option value="accident">Accident</option>
                <option value="theft">Theft</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Description" value={incidentForm.description} onChange={(e) => setIncidentForm({ ...incidentForm, description: e.target.value })} className="w-full p-2 border rounded" />
              <input type="text" placeholder="Location" value={incidentForm.location} onChange={(e) => setIncidentForm({ ...incidentForm, location: e.target.value })} className="w-full p-2 border rounded" />
              <select value={incidentForm.severity} onChange={(e) => setIncidentForm({ ...incidentForm, severity: e.target.value })} className="w-full p-2 border rounded">
                <option value="minor">Minor</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
            <div className="flex space-x-2 mt-4">
              <PrimaryButton buttonName="Report" onClick={handleReportIncident} />
              <PrimaryButton buttonName="Cancel" onClick={() => setIncidentForm({ show: false, bookingId: null, type: 'breakdown', description: '', photos: [], location: '', severity: 'minor' })} />
            </div>
          </div>
        </div>
      )}

      {reviewForm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h3 className="text-lg mb-4">Leave a Review</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Rating</label>
                <select value={reviewForm.rating} onChange={(e) => setReviewForm({ ...reviewForm, rating: parseInt(e.target.value) })} className="w-full p-2 border rounded">
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>
              <textarea placeholder="Your comment" value={reviewForm.comment} onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })} className="w-full p-2 border rounded" />
            </div>
            <div className="flex space-x-2 mt-4">
              <PrimaryButton buttonName="Submit Review" onClick={handleSubmitReview} />
              <PrimaryButton buttonName="Skip" onClick={() => setReviewForm({ show: false, vehicleId: null, rating: 5, comment: '' })} />
            </div>
          </div>
        </div>
      )}

      {modifyForm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h3 className="text-lg mb-4">Modify Booking</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input type="date" value={modifyForm.startDate} onChange={(e) => setModifyForm({ ...modifyForm, startDate: e.target.value })} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">End Date</label>
                <input type="date" value={modifyForm.endDate} onChange={(e) => setModifyForm({ ...modifyForm, endDate: e.target.value })} className="w-full p-2 border rounded" />
              </div>
              <p className="text-sm text-gray-600">Note: Location changes can be requested by contacting support</p>
            </div>
            <div className="flex space-x-2 mt-4">
              <PrimaryButton buttonName="Save Changes" onClick={handleModifyBooking} />
              <PrimaryButton buttonName="Cancel" onClick={() => setModifyForm({ show: false, bookingId: null, startDate: '', endDate: '', locationPickupId: '', locationDropoffId: '' })} />
            </div>
          </div>
        </div>
      )}

      {sosForm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h3 className="text-lg mb-4 text-red-600 font-bold">Emergency SOS</h3>
            <div className="space-y-4">
              <textarea placeholder="Describe your emergency" value={sosForm.note} onChange={(e) => setSOSForm({ ...sosForm, note: e.target.value })} className="w-full p-2 border rounded" rows={4} />
              <input type="text" placeholder="Current location (optional)" value={sosForm.location} onChange={(e) => setSOSForm({ ...sosForm, location: e.target.value })} className="w-full p-2 border rounded" />
            </div>
            <div className="flex space-x-2 mt-4">
              <PrimaryButton buttonName="Send SOS" className="bg-red-700" onClick={handleRequestSOS} />
              <PrimaryButton buttonName="Cancel" onClick={() => setSOSForm({ show: false, bookingId: null, note: '', location: '' })} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
