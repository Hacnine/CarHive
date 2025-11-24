import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PaginatedUsers, UserMin, UserFull } from '../../types/user';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const usersApi = createApi({
  reducerPath: 'usersApi',
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
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<PaginatedUsers, { page?: number; limit?: number; role?: string; search?: string } | void>({
      query: (params) => {
        const qs = new URLSearchParams();
        if (params) Object.entries(params).forEach(([k, v]) => { if (v != null) qs.set(k, String(v)); });
        return `/users${qs.toString() ? `?${qs.toString()}` : ''}`;
      },
      providesTags: (result) => result ? result.data.users.map(u => ({ type: 'Users' as const, id: u.id })) : [{ type: 'Users', id: 'LIST' }],
    }),
    getUserById: builder.query<{ user: UserFull }, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
    updateUserRole: builder.mutation<{ user: UserMin }, { id: string; role: string }>({
      query: ({ id, role }) => ({ url: `/users/${id}/role`, method: 'PUT', body: { role } }),
      invalidatesTags: (res, err, { id }) => [{ type: 'Users', id }, { type: 'Users', id: 'LIST' }],
    }),
    deleteUser: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({ url: `/users/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserRoleMutation, useDeleteUserMutation } = usersApi;

export default usersApi;
