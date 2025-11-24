import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const loyaltyApi = createApi({
  reducerPath: 'loyaltyApi',
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
  tagTypes: ['Loyalty'],
  endpoints: (builder) => ({
    getLoyaltyInfo: builder.query({
      query: () => '/loyalty/me',
      providesTags: ['Loyalty'],
    }),
    getTiers: builder.query({
      query: () => '/loyalty/tiers',
    }),
    getLoyaltyHistory: builder.query({
      query: () => '/loyalty/history',
      providesTags: ['Loyalty'],
    }),
    redeemPoints: builder.mutation({
      query: (points) => ({
        url: '/loyalty/redeem',
        method: 'POST',
        body: { points },
      }),
      invalidatesTags: ['Loyalty'],
    }),
  }),
});

export const {
  useGetLoyaltyInfoQuery,
  useGetTiersQuery,
  useGetLoyaltyHistoryQuery,
  useRedeemPointsMutation,
} = loyaltyApi;
