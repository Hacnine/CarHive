import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Review, PaginatedReviews } from '../../types/review';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers) => {
      try {
        const token = localStorage.getItem('token');
        if (token) headers.set('Authorization', `Bearer ${token}`);
      } catch (e) {}
      return headers;
    },
  }),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    createReview: builder.mutation<{ review: Review }, { vehicleId: string; rating: number; comment?: string }>({
      query: (body) => ({ url: '/reviews', method: 'POST', body }),
      invalidatesTags: ['Reviews'],
    }),
    getVehicleReviews: builder.query<PaginatedReviews, { vehicleId: string; page?: number; limit?: number }>({
      query: ({ vehicleId, page = 1, limit = 10 }) => `/reviews/vehicle/${vehicleId}?page=${page}&limit=${limit}`,
      providesTags: (result) => result ? result.data.reviews.map(r => ({ type: 'Reviews' as const, id: r.id })) : [{ type: 'Reviews', id: 'LIST' }],
    }),
    getUserReviews: builder.query<PaginatedReviews, { page?: number; limit?: number } | void>({
      query: (params) => {
        const qs = new URLSearchParams();
        if (params) {
          Object.entries(params).forEach(([k, v]) => { if (v != null) qs.set(k, String(v)); });
        }
        return `/reviews/user${qs.toString() ? `?${qs.toString()}` : ''}`;
      },
      providesTags: (result) => result ? result.data.reviews.map(r => ({ type: 'Reviews' as const, id: r.id })) : [{ type: 'Reviews', id: 'LIST' }],
    }),
    updateReview: builder.mutation<{ review: Review }, { id: string; rating?: number; comment?: string }>({
      query: ({ id, ...body }) => ({ url: `/reviews/${id}`, method: 'PUT', body }),
      invalidatesTags: (res, err, { id }) => [{ type: 'Reviews', id }],
    }),
    deleteReview: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({ url: `/reviews/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Reviews'],
    }),
    getAllReviews: builder.query<PaginatedReviews, { vehicleId?: string; userId?: string; rating?: number; page?: number; limit?: number } | void>({
      query: (params) => {
        const qs = new URLSearchParams();
        if (params) Object.entries(params).forEach(([k, v]) => { if (v != null) qs.set(k, String(v)); });
        return `/reviews/admin/all${qs.toString() ? `?${qs.toString()}` : ''}`;
      },
      providesTags: (result) => [{ type: 'Reviews', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetVehicleReviewsQuery,
  useGetUserReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
} = reviewsApi;

export default reviewsApi;
