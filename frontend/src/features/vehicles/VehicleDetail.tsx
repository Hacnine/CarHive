import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetVehicleByIdQuery } from '../../app/services/vehiclesApi';

const VehicleDetail: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetVehicleByIdQuery(id || '');

  // `getVehicleById` now normalizes responses to `{ vehicle }`
  const vehicle = data?.vehicle ?? null;

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError || !vehicle) return <p className="p-6 text-red-600">Vehicle not found</p>;

  return (
    <div className="p-6">
      <Link to="/vehicles" className="text-blue-600">← Back to vehicles</Link>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={vehicle.image || '/placeholder-car.jpg'} alt="vehicle" className="w-full h-72 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{vehicle.make} {vehicle.model} ({vehicle.year})</h1>
          <p className="mt-2">{vehicle.description}</p>
          <p className="mt-4 font-semibold">${vehicle.dailyRate?.toFixed(2) || '—'}/day</p>
          <div className="mt-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Start Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
