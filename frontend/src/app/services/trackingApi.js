import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const trackingApi = createApi({
  reducerPath: 'trackingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token || localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Tracking'],
  endpoints: (builder) => ({
    updateGPSLocation: builder.mutation({
      query: ({ bookingId, ...body }) => ({
        url: `/tracking/${bookingId}/location`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tracking'],
    }),
    getTrackingData: builder.query({
      query: (bookingId) => `/tracking/${bookingId}`,
      providesTags: ['Tracking'],
    }),
    getRouteSuggestion: builder.query({
      query: (bookingId) => `/tracking/${bookingId}/route`,
    }),
    toggleTracking: builder.mutation({
      query: ({ bookingId, enabled }) => ({
        url: `/tracking/${bookingId}/toggle`,
        method: 'POST',
        body: { enabled },
      }),
      invalidatesTags: ['Tracking'],
    }),
  }),
});

export const {
  useUpdateGPSLocationMutation,
  useGetTrackingDataQuery,
  useGetRouteSuggestionQuery,
  useToggleTrackingMutation,
} = trackingApi;
