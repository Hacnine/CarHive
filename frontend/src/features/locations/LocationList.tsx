import React, { useState } from 'react';
import { useGetLocationsQuery } from '../../app/services/locationsApi';
import { Link } from 'react-router-dom';

const LocationList: React.FC = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading, isError, refetch } = useGetLocationsQuery({ search });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Locations</h2>
      <div className="mb-4 flex gap-2">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search locations" className="border p-2 rounded flex-1" />
        <button onClick={() => refetch()} className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-600">Failed to load locations</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.data.locations.map((loc) => (
          <div key={loc.id} className="border rounded p-4">
            <h3 className="font-semibold">{loc.name}</h3>
            <p className="text-sm text-gray-600">{loc.city} • {loc.code}</p>
            <Link to={`/locations/${loc.id}`} className="text-blue-600 mt-2 inline-block">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationList;
