import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserByIdQuery, useUpdateUserRoleMutation, useDeleteUserMutation } from '../../app/services/usersApi';

const UserDetail: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserByIdQuery(id || '');
  const [updateRole] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-600">Failed to load user</div>;

  const user = data?.data?.user || data?.user;
  if (!user) return <div className="p-4">User not found</div>;

  const handleRoleChange = async (role: string) => {
    try {
      await updateRole({ id: user.id, role }).unwrap();
      alert('Role updated');
    } catch (err) {
      console.error(err);
      alert('Update failed');
    }
  };

  const handleDelete = async () => {
    if (!confirm('Delete user?')) return;
    try {
      await deleteUser(user.id).unwrap();
      alert('Deleted');
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <div className="mt-2 text-sm text-gray-600">{user.email}</div>
      <div className="mt-4">
        <div>Role: {user.role}</div>
        <div className="mt-2 space-x-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={() => handleRoleChange('admin')}>Make Admin</button>
          <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => handleRoleChange('customer')}>Make Customer</button>
          <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={handleDelete}>Delete User</button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Recent Bookings</h3>
        <div>
          {user.bookings?.map((b: any) => (
            <div key={b.id} className="p-2 border rounded mt-2">
              <div className="font-medium">{b.vehicle?.make} {b.vehicle?.model}</div>
              <div className="text-sm text-gray-600">{new Date(b.startDate).toLocaleString()} → {new Date(b.endDate).toLocaleString()}</div>
              <div className="text-sm">Status: {b.status} • ${b.totalPrice}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
