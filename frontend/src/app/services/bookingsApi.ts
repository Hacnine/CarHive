import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Booking, PaginatedBookings } from '../../types/booking';


const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';


export const bookingsApi = createApi({
  reducerPath: 'bookingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers) => {
      try {
        const token = localStorage.getItem('token');
        if (token) headers.set('Authorization', `Bearer ${token}`);
      } catch (e) {
        // ignore in non-browser environments
      }
      return headers;
    },
  }),
  tagTypes: ['Bookings','Vehicles','Locations','Auth','Reviews','Users'],
  endpoints: (builder) => ({
    holdBooking: builder.mutation<{ booking: Booking; price?: any }, Partial<any>>({
      query: (body) => ({ url: '/bookings/hold', method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    confirmBooking: builder.mutation<{ booking: Booking; payment?: any }, { bookingId: string; providerId?: string; paymentMethod?: string }>({
      query: (body) => ({ url: '/bookings/confirm', method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    createBooking: builder.mutation<{ booking: Booking }, Partial<any>>({
      query: (body) => ({ url: '/bookings', method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    cancelBooking: builder.mutation<{ booking: Booking }, { id: string }>({
      query: ({ id }) => ({ url: `/bookings/${id}/cancel`, method: 'PUT' }),
      invalidatesTags: ['Bookings'],
    }),
    getUserBookings: builder.query<PaginatedBookings, { page?: number; limit?: number; status?: string } | void>({
      query: (params) => ({ url: `/bookings${params ? `?${new URLSearchParams(Object.entries(params).reduce((acc, [k, v]) => (v != null ? { ...acc, [k]: String(v) } : acc), {} as Record<string,string>)).toString()}` : ''}` }),
      providesTags: (result) =>
        result ? [...result.data.bookings.map((b) => ({ type: 'Bookings' as const, id: b.id })), { type: 'Bookings', id: 'LIST' }] : [{ type: 'Bookings', id: 'LIST' }],
    }),
    getBookingById: builder.query<{ booking: Booking }, string>({
      query: (id) => ({ url: `/bookings/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Bookings', id }],
    }),
    getAllBookings: builder.query<PaginatedBookings, Record<string, any>>({
      query: (params = {}) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(([k, v]) => {
          if (v !== undefined && v !== null) qs.set(k, String(v));
        });
        return { url: `/bookings/admin/all?${qs.toString()}` };
      },
      providesTags: (result) => result ? [{ type: 'Bookings', id: 'LIST' }] : [{ type: 'Bookings', id: 'LIST' }],
    }),
    updateBookingStatus: builder.mutation<{ booking: Booking }, { id: string; status: string }>({
      query: ({ id, status }) => ({ url: `/bookings/${id}/status`, method: 'PUT', body: { status } }),
      invalidatesTags: (res, err, { id }) => [{ type: 'Bookings', id }, { type: 'Bookings', id: 'LIST' }],
    }),

    // Reuse or proxy existing vehicles/location/auth endpoints can be added here or you can keep a separate vehiclesApi file
  }),
});

export const {
  useHoldBookingMutation,
  useConfirmBookingMutation,
  useCreateBookingMutation,
  useCancelBookingMutation,
  useGetUserBookingsQuery,
  useGetBookingByIdQuery,
  useGetAllBookingsQuery,
  useUpdateBookingStatusMutation,
} = bookingsApi;

