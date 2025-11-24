import React from 'react';
import { Link } from 'react-router-dom';
import type { Vehicle } from '../../types/vehicle';

const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  return (
    <div className="border rounded p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <img src={vehicle.imageUrl || '/placeholder-car.jpg'} alt={`${vehicle.make} ${vehicle.model}`} className="w-28 h-20 object-cover rounded" />
        <div>
          <h3 className="text-lg font-semibold">{vehicle.make} {vehicle.model}</h3>
          <p className="text-sm text-gray-600">{vehicle.location?.name || vehicle.location?.city}</p>
          <p className="mt-2 font-medium">${vehicle.dailyRate?.toFixed(2) || '—'}/day</p>
          <Link to={`/vehicles/${vehicle.id}`} className="inline-block mt-2 text-blue-600">View</Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
