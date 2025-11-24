import React, { useState, useEffect } from 'react';
import { useGetTrackingDataQuery, useUpdateGPSLocationMutation, useToggleTrackingMutation } from '../../app/services/trackingApi';
import Header from '../../components/Header';
import { GoogleMap, Marker, Polyline, useLoadScript } from '@react-google-maps/api';

const ActiveRentalDashboard = ({ bookingId }) => {
  const { data: trackingData, isLoading, refetch } = useGetTrackingDataQuery(bookingId, {
    pollingInterval: 30000, // Refresh every 30 seconds
  });
  const [updateLocation] = useUpdateGPSLocationMutation();
  const [toggleTracking] = useToggleTrackingMutation();
  
  const [watchId, setWatchId] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  // Start GPS tracking
  useEffect(() => {
    if (trackingData?.data?.tracking?.enabled && 'geolocation' in navigator) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          updateLocation({
            bookingId,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            speed: position.coords.speed || 0,
            heading: position.coords.heading || 0,
            accuracy: position.coords.accuracy,
            timestamp: new Date(position.timestamp).toISOString(),
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000,
        }
      );
      setWatchId(id);

      return () => {
        if (id) navigator.geolocation.clearWatch(id);
      };
    }
  }, [trackingData?.data?.tracking?.enabled, bookingId, updateLocation]);

  const handleToggleTracking = async () => {
    const enabled = !trackingData?.data?.tracking?.enabled;
    await toggleTracking({ bookingId, enabled });
    refetch();
  };

  if (isLoading) {
    return (
      <div>
        <Header title="Active Rental" />
        <div className="wrapper my-20">
          <div className="animate-pulse bg-gray-200 h-64 rounded"></div>
        </div>
      </div>
    );
  }

  if (!trackingData) {
    return (
      <div>
        <Header title="Active Rental" />
        <div className="wrapper my-20">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Tracking data not available
          </div>
        </div>
      </div>
    );
  }

  const { booking, vehicle, tracking, stats, pickupLocation, dropoffLocation } = trackingData.data;

  const mapCenter = tracking.currentLocation
    ? { lat: tracking.currentLocation.lat, lng: tracking.currentLocation.lng }
    : { lat: 40.7128, lng: -74.006 }; // Default to NYC

  return (
    <div>
      <Header title="Active Rental" />

      <div className="wrapper my-20">
        {/* Vehicle Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {vehicle.make} {vehicle.model} ({vehicle.year})
              </h2>
              <p className="text-gray-600">License Plate: {vehicle.licensePlate}</p>
            </div>
            <button
              onClick={handleToggleTracking}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                tracking.enabled
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {tracking.enabled ? 'Disable' : 'Enable'} GPS Tracking
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              label="Elapsed Time"
              value={`${stats.elapsedHours}h`}
              color="blue"
            />
            <StatCard
              label="Remaining Time"
              value={`${stats.remainingHours}h`}
              color="green"
            />
            <StatCard
              label="Distance Traveled"
              value={`${stats.totalDistance} km`}
              color="purple"
            />
            <StatCard
              label="Estimated Cost"
              value={`$${stats.estimatedCost}`}
              color="orange"
            />
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Rental Progress</span>
              <span className="text-sm font-semibold text-gray-800">{stats.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-primary-green h-3 rounded-full transition-all"
                style={{ width: `${stats.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Map */}
        {isLoaded && tracking.enabled && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Live Location</h3>
            <div className="h-96 rounded-lg overflow-hidden">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={mapCenter}
                zoom={13}
              >
                {tracking.currentLocation && (
                  <Marker
                    position={{
                      lat: tracking.currentLocation.lat,
                      lng: tracking.currentLocation.lng,
                    }}
                    title="Current Location"
                  />
                )}
                {tracking.locations && tracking.locations.length > 1 && (
                  <Polyline
                    path={tracking.locations.map((loc) => ({ lat: loc.lat, lng: loc.lng }))}
                    options={{
                      strokeColor: '#1fc916',
                      strokeOpacity: 0.8,
                      strokeWeight: 3,
                    }}
                  />
                )}
              </GoogleMap>
            </div>
          </div>
        )}

        {/* Alerts */}
        {tracking.alerts && tracking.alerts.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">Alerts</h3>
            <div className="space-y-2">
              {tracking.alerts.slice(-5).reverse().map((alert, index) => (
                <div key={index} className="flex items-center gap-3 text-yellow-800">
                  <span className="font-semibold">{alert.type}:</span>
                  <span>{alert.message}</span>
                  <span className="text-sm text-gray-600 ml-auto">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rental Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Rental Details</h3>
            <div className="space-y-3">
              <DetailRow label="Booking ID" value={`#${booking.id.slice(-8)}`} />
              <DetailRow
                label="Start Date"
                value={new Date(booking.startDate).toLocaleString()}
              />
              <DetailRow label="End Date" value={new Date(booking.endDate).toLocaleString()} />
              <DetailRow label="Status" value={booking.status} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Locations</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Pickup Location</p>
                <p className="font-semibold text-gray-800">
                  {pickupLocation?.name}, {pickupLocation?.city}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Dropoff Location</p>
                <p className="font-semibold text-gray-800">
                  {dropoffLocation?.name}, {dropoffLocation?.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
  };

  return (
    <div className={`rounded-lg p-4 border-2 ${colorClasses[color]}`}>
      <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-600">{label}:</span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
);

export default ActiveRentalDashboard;
