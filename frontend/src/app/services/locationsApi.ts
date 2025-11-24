import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Location, PaginatedLocations } from '../../types/location';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers) => {
      try {
        const token = localStorage.getItem('token');
        if (token) headers.set('Authorization', `Bearer ${token}`);
      } catch (e) {
        // ignore
      }
      return headers;
    },
  }),
  tagTypes: ['Locations'],
  endpoints: (builder) => ({
    getLocations: builder.query<PaginatedLocations, Record<string, any>>({
      query: (params: Record<string, any> = {}) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(([k, v]) => {
          if (v !== undefined && v !== null) qs.set(k, String(v));
        });
        return `/locations${qs.toString() ? `?${qs.toString()}` : ''}`;
      },
      providesTags: (result) =>
        result ? result.data.locations.map((l) => ({ type: 'Locations' as const, id: l.id })) : [{ type: 'Locations', id: 'LIST' }],
    }),
    getLocationById: builder.query<{ location: Location }, string>({
      query: (id) => `/locations/${id}`,
      providesTags: (result, error, id) => [{ type: 'Locations', id }],
    }),
    createLocation: builder.mutation<{ location: Location }, Partial<Location>>({
      query: (body) => ({ url: '/locations', method: 'POST', body }),
      invalidatesTags: [{ type: 'Locations', id: 'LIST' }],
    }),
    updateLocation: builder.mutation<{ location: Location }, { id: string; data: Partial<Location> }>({
      query: ({ id, data }) => ({ url: `/locations/${id}`, method: 'PUT', body: data }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Locations', id }, { type: 'Locations', id: 'LIST' }],
    }),
    deleteLocation: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({ url: `/locations/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Locations', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationByIdQuery,
  useCreateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
} = locationsApi;

export default locationsApi;
