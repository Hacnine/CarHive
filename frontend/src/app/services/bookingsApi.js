import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Prefer VITE_API_URL from frontend env; fallback to backend default port 5000
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const bookingsApi = createApi({
  reducerPath: 'bookingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    // include credentials so cookies (Set-Cookie) are accepted in cross-origin requests when backend sets them
    credentials: 'include',
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
    holdBooking: builder.mutation({
      query: (body) => ({
        url: '/bookings/hold',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Bookings'],
    }),
    confirmBooking: builder.mutation({
      query: (body) => ({
        url: '/bookings/confirm',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Bookings'],
    }),
    modifyBooking: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/modify`, method: 'PUT', body }),
      invalidatesTags: ['Bookings'],
    }),
    // Create a booking (used by BookingWizard)
    createBooking: builder.mutation({
      query: (body) => ({ url: '/bookings', method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    getAvailableVehicles: builder.query({
      // params: { startDate, endDate, locationCode, category, transmission, maxPrice }
      query: (params) => ({ url: `/vehicles/available${params ? `?${new URLSearchParams(params).toString()}` : ''}` }),
      providesTags: (result) => result && result.data && result.data.results ? result.data.results.map(r => ({ type: 'Vehicles', id: r.vehicle.id })) : [{ type: 'Vehicles', id: 'LIST' }]
    }),
    pickupChecklist: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/pickup`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    returnChecklist: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/return`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    cancelBooking: builder.mutation({
      query: ({ id }) => ({
        url: `/bookings/${id}/cancel`,
        method: 'PUT',
      }),
      invalidatesTags: ['Bookings'],
    }),
    getUserBookings: builder.query({
      query: () => ({ url: '/bookings' }),
      providesTags: (result) =>
        result
          ? [...result.data.map(({ id }) => ({ type: 'Bookings', id })), { type: 'Bookings', id: 'LIST' }]
          : [{ type: 'Bookings', id: 'LIST' }],
    }),
    getAllBookings: builder.query({
      query: (params) => ({ url: `/bookings/admin/all${params ? `?${new URLSearchParams(params).toString()}` : ''}` }),
      providesTags: (result) =>
        result
          ? [...result.data.map(({ id }) => ({ type: 'Bookings', id })), { type: 'Bookings', id: 'LIST' }]
          : [{ type: 'Bookings', id: 'LIST' }],
    }),
    getBookingById: builder.query({
      query: (id) => ({ url: `/bookings/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Bookings', id }],
    }),
    prepareBooking: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/prepare`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    extendBooking: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/extend`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    onlineCheckin: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/checkin`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    contactlessPickup: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/contactless-pickup`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    reportIncident: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/incident`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    requestSOS: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/sos`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    updateBookingLocation: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/bookings/${id}/location`, method: 'POST', body }),
      invalidatesTags: ['Bookings'],
    }),
    // Vehicles
    getVehicles: builder.query({
      query: (params) => ({ url: `/vehicles${params ? `?${params}` : ''}` }),
      providesTags: (result) =>
        result ? result.data.vehicles.map(v => ({ type: 'Vehicles', id: v.id })) : [{ type: 'Vehicles', id: 'LIST' }]
    }),
    getVehicleById: builder.query({
      query: (id) => ({ url: `/vehicles/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Vehicles', id }]
    }),
    createVehicle: builder.mutation({
      query: (body) => ({ url: '/vehicles', method: 'POST', body }),
      invalidatesTags: [{ type: 'Vehicles', id: 'LIST' }]
    }),
    updateVehicle: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/vehicles/${id}`, method: 'PUT', body }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Vehicles', id }]
    }),
    deleteVehicle: builder.mutation({
      query: (id) => ({ url: `/vehicles/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Vehicles', id: 'LIST' }]
    }),

    // Locations
    getLocations: builder.query({ query: () => ({ url: '/locations' }), providesTags: (result) => result ? result.data.map(l => ({ type: 'Locations', id: l.id })) : [{ type: 'Locations', id: 'LIST' }] }),
    getLocationById: builder.query({ query: (id) => ({ url: `/locations/${id}` }), providesTags: (result, error, id) => [{ type: 'Locations', id }] }),
    createLocation: builder.mutation({ query: (body) => ({ url: '/locations', method: 'POST', body }), invalidatesTags: [{ type: 'Locations', id: 'LIST' }] }),
    updateLocation: builder.mutation({ query: ({ id, ...body }) => ({ url: `/locations/${id}`, method: 'PUT', body }), invalidatesTags: (res, err, { id }) => [{ type: 'Locations', id }] }),
    deleteLocation: builder.mutation({ query: (id) => ({ url: `/locations/${id}`, method: 'DELETE' }), invalidatesTags: [{ type: 'Locations', id: 'LIST' }] }),

    // Auth
    register: builder.mutation({ query: (body) => ({ url: '/auth/register', method: 'POST', body }) }),
    login: builder.mutation({ query: (body) => ({ url: '/auth/login', method: 'POST', body }) }),
    getProfile: builder.query({ query: () => ({ url: '/auth/me' }), providesTags: ['Auth'] }),
    updateProfile: builder.mutation({ query: (body) => ({ url: '/auth/profile', method: 'PUT', body }), invalidatesTags: ['Auth'] }),

  // Payments (Stripe checkout session)
  createCheckoutSession: builder.mutation({ query: (body) => ({ url: '/payments/create-checkout-session', method: 'POST', body }) }),

    // Reviews
    createReview: builder.mutation({ query: (body) => ({ url: '/reviews', method: 'POST', body }), invalidatesTags: ['Reviews'] }),
    getVehicleReviews: builder.query({ query: ({ vehicleId, page, limit }) => ({ url: `/reviews/vehicle/${vehicleId}${page ? `?page=${page}&limit=${limit||10}`:''}` }) }),
    getUserReviews: builder.query({ query: (params) => ({ url: `/reviews/user${params?`?${params}`:''}` }) , providesTags: (result) => result ? result.data.reviews.map(r=>({type:'Reviews', id:r.id})) : []}),
    updateReview: builder.mutation({ query: ({ id, ...body }) => ({ url: `/reviews/${id}`, method: 'PUT', body }), invalidatesTags: (res,err,{id}) => [{type:'Reviews', id}] }),
    deleteReview: builder.mutation({ query: (id) => ({ url: `/reviews/${id}`, method: 'DELETE' }), invalidatesTags: ['Reviews'] }),
    getAllReviews: builder.query({ query: (params) => ({ url: `/reviews/admin/all${params?`?${params}`:''}` }), providesTags: ['Reviews'] }),

    // Users (admin)
    getUsers: builder.query({ query: (params) => ({ url: `/users${params?`?${params}`:''}` }), providesTags: (result) => result ? result.data.map(u=>({type:'Users', id:u.id})) : [] }),
    getUserById: builder.query({ query: (id) => ({ url: `/users/${id}` }), providesTags: (res,err,id) => [{type:'Users', id}] }),
    updateUserRole: builder.mutation({ query: ({ id, role }) => ({ url: `/users/${id}/role`, method: 'PUT', body: { role } }), invalidatesTags: (res,err,{id})=>[{type:'Users', id}] }),
    deleteUser: builder.mutation({ query: (id) => ({ url: `/users/${id}`, method: 'DELETE' }), invalidatesTags: ['Users'] }),
  }),
});

export const {
  useHoldBookingMutation,
  useConfirmBookingMutation,
  useModifyBookingMutation,
  useCreateBookingMutation,
  usePickupChecklistMutation,
  useReturnChecklistMutation,
  useCancelBookingMutation,
  useGetUserBookingsQuery,
  useGetAllBookingsQuery,
  useGetBookingByIdQuery,
  usePrepareBookingMutation,
  useExtendBookingMutation,
  useOnlineCheckinMutation,
  useContactlessPickupMutation,
  useReportIncidentMutation,
  useRequestSOSMutation,
  useUpdateBookingLocationMutation,
  useGetAvailableVehiclesQuery,
  useLazyGetAvailableVehiclesQuery,
  useCreateCheckoutSessionMutation,
  // Vehicles
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
  // Locations
  useGetLocationsQuery,
  useGetLocationByIdQuery,
  useCreateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
  // Auth
  useRegisterMutation,
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  // Reviews
  useCreateReviewMutation,
  useGetVehicleReviewsQuery,
  useGetUserReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
  // Users
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = bookingsApi;
