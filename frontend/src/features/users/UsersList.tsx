import React from 'react';
import { useGetUsersQuery } from '../../app/services/usersApi';
import { Link } from 'react-router-dom';

const UsersList: React.FC = () => {
  const { data, isLoading, isError } = useGetUsersQuery({ page: 1, limit: 20 });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-600">Failed to load users</div>;

  const users = data?.data.users || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Users</h2>
      <div className="grid gap-3">
        {users.map(u => (
          <div key={u.id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{u.name} ({u.email})</div>
              <div className="text-sm text-gray-600">Role: {u.role}</div>
            </div>
            <div>
              <Link to={`/admin/users/${u.id}`} className="text-blue-600">View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
