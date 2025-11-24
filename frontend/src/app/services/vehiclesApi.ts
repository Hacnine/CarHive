import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Vehicle, PaginatedVehicles } from '../../types/vehicle';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  tagTypes: ['Vehicle'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query<PaginatedVehiclesResponse, Record<string, any>>({
      query: (params: Record<string, any> = {}) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(([k, v]) => {
          if (v !== undefined && v !== null) qs.set(k, String(v));
        });
        return `/vehicles?${qs.toString()}`;
      },
      providesTags: (result) =>
        result ? [...result.data.vehicles.map((v) => ({ type: 'Vehicle' as const, id: v.id })), { type: 'Vehicle', id: 'LIST' }] : [{ type: 'Vehicle', id: 'LIST' }],
    }),
    getVehicleById: builder.query<{ vehicle: Vehicle }, string>({
      query: (id) => `/vehicles/${id}`,
      // Normalize backend response shapes (some endpoints return { data: { vehicle } })
      transformResponse: (response: any) => {
        if (!response) return response;
        if (response.data && response.data.vehicle) return { vehicle: response.data.vehicle };
        if (response.vehicle) return { vehicle: response.vehicle };
        // fallback: assume response is already { vehicle }
        return response as { vehicle: Vehicle };
      },
      providesTags: (result, error, id) => [{ type: 'Vehicle', id }],
    }),
    createVehicle: builder.mutation<{ vehicle: Vehicle }, Partial<Vehicle>>({
      query: (body) => ({
        url: '/vehicles',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Vehicle', id: 'LIST' }],
    }),
    updateVehicle: builder.mutation<{ vehicle: Vehicle }, { id: string; data: Partial<Vehicle> }>({
      query: ({ id, data }) => ({
        url: `/vehicles/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Vehicle', id }, { type: 'Vehicle', id: 'LIST' }],
    }),
    deleteVehicle: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({ url: `/vehicles/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Vehicle', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
} = vehiclesApi;

export default vehiclesApi;
