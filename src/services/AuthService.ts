// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { User } from '@/models/User';
import { ResponseMessage } from '@/interfaces/Service';
import { ILoginReq } from '@/interfaces/Auth';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    register: builder.mutation<ResponseMessage, Partial<User>>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (user) => ({
        url: `/register`,
        method: 'POST',
        body: user,
      }),
    }),

    login: builder.mutation<ResponseMessage, ILoginReq>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (user) => ({
        url: `/login`,
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useLoginMutation } = authApi;
