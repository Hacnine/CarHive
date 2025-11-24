import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import { useGetVehiclesQuery } from '../../app/services/vehiclesApi';

const VehicleList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, refetch } = useGetVehiclesQuery({ page, limit: 10, search });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vehicles</h2>
      <div className="mb-4 flex gap-2">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search make or model" className="border p-2 rounded flex-1" />
        <button onClick={() => { setPage(1); refetch(); }} className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-600">Failed to load vehicles</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.data.vehicles.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-4 py-2 border rounded">Prev</button>
        <div>Page {data?.data.pagination.currentPage || page} of {data?.data.pagination.totalPages || '?'}</div>
        <button disabled={!data?.data.pagination.hasNextPage} onClick={() => setPage((p) => p + 1)} className="px-4 py-2 border rounded">Next</button>
      </div>
    </div>
  );
};

export default VehicleList;
