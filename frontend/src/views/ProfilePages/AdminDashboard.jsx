import React from 'react';
import { useGetOverviewMetricsQuery, useBulkBookingActionMutation } from '../../app/services/adminApi';
import Header from '../../components/Header';

const AdminDashboard = () => {
  const { data: overview, isLoading, error } = useGetOverviewMetricsQuery();
  const [bulkAction] = useBulkBookingActionMutation();

  if (isLoading) {
    return (
      <div>
        <Header title="Admin Dashboard" />
        <div className="wrapper my-20">
          <div className="animate-pulse space-y-6">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !overview) {
    return (
      <div>
        <Header title="Admin Dashboard" />
        <div className="wrapper my-20">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Access denied or error loading dashboard data.
          </div>
        </div>
      </div>
    );
  }

  const { metrics, recentBookings, topVehicles, topLocations } = overview.data;

  return (
    <div>
      <Header title="Admin Dashboard" />

      <div className="wrapper my-20">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Vehicles"
            value={metrics.totalVehicles}
            subtitle={`${metrics.availableVehicles} available`}
            color="blue"
          />
          <MetricCard
            title="Active Bookings"
            value={metrics.activeBookings}
            subtitle={`${metrics.pendingVerifications} pending`}
            color="green"
          />
          <MetricCard
            title="Monthly Bookings"
            value={metrics.monthlyBookings}
            subtitle={`${metrics.bookingGrowth > 0 ? '+' : ''}${metrics.bookingGrowth}% vs last month`}
            color="purple"
          />
          <MetricCard
            title="Monthly Revenue"
            value={`$${metrics.monthlyRevenue.toLocaleString()}`}
            subtitle={`${metrics.revenueGrowth > 0 ? '+' : ''}${metrics.revenueGrowth}% vs last month`}
            color="orange"
          />
        </div>

        {/* Fleet Utilization */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Fleet Utilization</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-green-600 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                  style={{ width: `${metrics.utilizationRate}%` }}
                >
                  {metrics.utilizationRate}%
                </div>
              </div>
            </div>
            <span className="text-gray-600">
              {metrics.totalVehicles - metrics.availableVehicles} of {metrics.totalVehicles} in use
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Vehicles */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Top Performing Vehicles</h3>
            <div className="space-y-3">
              {topVehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {vehicle.make} {vehicle.model} ({vehicle.year})
                    </p>
                    <p className="text-sm text-gray-600">{vehicle.bookingCount} bookings</p>
                  </div>
                  <p className="text-green-600 font-semibold">${vehicle.revenue.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Locations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Top Locations</h3>
            <div className="space-y-3">
              {topLocations.map((location) => (
                <div key={location.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{location.name}</p>
                    <p className="text-sm text-gray-600">{location.city}</p>
                  </div>
                  <p className="text-blue-600 font-semibold">{location.bookingCount} pickups</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Bookings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{booking.user.name}</p>
                        <p className="text-sm text-gray-500">{booking.user.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{booking.vehicle}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{booking.location}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ${booking.totalPrice.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, subtitle, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
  };

  return (
    <div className={`rounded-lg shadow-md p-6 border-2 ${colorClasses[color]}`}>
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

const getStatusBadgeClass = (status) => {
  const classes = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    active: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  return classes[status] || classes.pending;
};

export default AdminDashboard;
