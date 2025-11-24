import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetLocationByIdQuery } from '../../app/services/locationsApi';

const LocationDetail: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetLocationByIdQuery(id || '');

  const location = data?.data?.location || data?.location;

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError || !location) return <p className="p-6 text-red-600">Location not found</p>;

  return (
    <div className="p-6">
      <Link to="/locations" className="text-blue-600">← Back to locations</Link>
      <h1 className="text-2xl font-bold mt-4">{location.name}</h1>
      <p className="text-sm text-gray-600">{location.address}, {location.city} ({location.code})</p>
      <div className="mt-4">
        <h3 className="font-semibold">Available vehicles</h3>
        <div className="mt-2 grid grid-cols-1 gap-3">
          {location.vehicles?.map((v: any) => (
            <div key={v.id} className="p-3 border rounded">
              <div className="font-medium">{v.make} {v.model} ({v.year})</div>
              <div className="text-sm text-gray-600">${v.dailyRate?.toFixed(2)}/day</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
