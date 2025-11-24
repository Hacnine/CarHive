import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token || localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['AdminOverview', 'AdminBookings'],
  endpoints: (builder) => ({
    getOverviewMetrics: builder.query({
      query: () => '/admin/overview',
      providesTags: ['AdminOverview'],
    }),
    getBookingCalendar: builder.query({
      query: ({ startDate, endDate }) => 
        `/admin/calendar?startDate=${startDate}&endDate=${endDate}`,
      providesTags: ['AdminBookings'],
    }),
    bulkBookingAction: builder.mutation({
      query: ({ bookingIds, action }) => ({
        url: '/admin/bookings/bulk-action',
        method: 'POST',
        body: { bookingIds, action },
      }),
      invalidatesTags: ['AdminOverview', 'AdminBookings'],
    }),
    exportBookings: builder.query({
      query: ({ startDate, endDate, status }) => {
        const params = new URLSearchParams();
        if (startDate) params.append('startDate', startDate);
        if (endDate) params.append('endDate', endDate);
        if (status) params.append('status', status);
        return `/admin/export/bookings?${params.toString()}`;
      },
    }),
  }),
});

export const {
  useGetOverviewMetricsQuery,
  useGetBookingCalendarQuery,
  useBulkBookingActionMutation,
  useLazyExportBookingsQuery,
} = adminApi;
