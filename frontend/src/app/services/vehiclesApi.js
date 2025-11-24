import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  tagTypes: ['Vehicle'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: (params = {}) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(([k, v]) => {
          if (v !== undefined && v !== null) qs.set(k, String(v));
        });
        return `/vehicles?${qs.toString()}`;
      },
      providesTags: (result) =>
        result ? [...result.data.vehicles.map((v) => ({ type: 'Vehicle', id: v.id })), { type: 'Vehicle', id: 'LIST' }] : [{ type: 'Vehicle', id: 'LIST' }],
    }),
    getVehicleById: builder.query({
      query: (id) => `/vehicles/${id}`,
      // Normalize backend response shapes (some endpoints return { data: { vehicle } })
      transformResponse: (response) => {
        if (!response) return response;
        if (response.data && response.data.vehicle) return { vehicle: response.data.vehicle };
        if (response.vehicle) return { vehicle: response.vehicle };
        // fallback: assume response is already { vehicle }
        return response;
      },
      providesTags: (result, error, id) => [{ type: 'Vehicle', id }],
    }),
    createVehicle: builder.mutation({
      query: (body) => ({
        url: '/vehicles',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Vehicle', id: 'LIST' }],
    }),
    updateVehicle: builder.mutation({
      query: ({ id, data }) => ({
        url: `/vehicles/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Vehicle', id }, { type: 'Vehicle', id: 'LIST' }],
    }),
    deleteVehicle: builder.mutation({
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