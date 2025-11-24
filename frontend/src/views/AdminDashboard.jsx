import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../app/services/bookingsApi';
import { useGetAllBookingsQuery } from '../app/services/bookingsApi';
import { useGetVehiclesQuery } from '../app/services/bookingsApi';

const AdminDashboard = () => {
  const { data: usersData, isLoading: usersLoading } = useGetUsersQuery();
  const { data: bookingsData, isLoading: bookingsLoading } = useGetAllBookingsQuery();
  const { data: vehiclesData, isLoading: vehiclesLoading } = useGetVehiclesQuery();

  // Calculate stats
  const totalUsers = usersData?.data?.length || 0;
  const totalBookings = bookingsData?.data?.length || 0;
  const activeBookings = bookingsData?.data?.filter(booking => booking.status === 'active').length || 0;
  const totalVehicles = vehiclesData?.data?.vehicles?.length || 0;
  const totalRevenue = bookingsData?.data?.reduce((sum, booking) => sum + (booking.totalPrice || 0), 0) || 0;

  const adminLinks = [
    { to: '/admin/users', label: 'Manage Users', description: 'View and manage user accounts' },
    { to: '/admin/reviews', label: 'Manage Reviews', description: 'Moderate and manage reviews' },
    { to: '/vehicles', label: 'Manage Vehicles', description: 'Add, edit, and manage fleet' },
    { to: '/locations', label: 'Manage Locations', description: 'Manage pickup/dropoff locations' },
    { to: '/account/bookings', label: 'View All Bookings', description: 'See all bookings and manage them' },
    { to: '/admin/prepare-bookings', label: 'Prepare Bookings', description: 'Prepare vehicles for upcoming pickups' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{link.label}</h2>
              <p className="text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {usersLoading ? '...' : totalUsers}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Active Bookings</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {bookingsLoading ? '...' : activeBookings}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Total Revenue</h3>
              <p className="text-3xl font-bold text-purple-600 mt-2">
                ${bookingsLoading ? '...' : totalRevenue.toFixed(2)}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Fleet Size</h3>
              <p className="text-3xl font-bold text-orange-600 mt-2">
                {vehiclesLoading ? '...' : totalVehicles}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;