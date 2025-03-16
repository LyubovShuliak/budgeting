import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from './types';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/auth/',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, string>({
      query: (idToken) => ({
        url: 'login',
        method: 'POST',
        body: { idToken },
      }),
    }),
    signup: builder.mutation<User, string>({
      query: (idToken) => ({
        url: 'signup',
        method: 'POST',
        body: { idToken },
      }),
    }),
  }),
});
export const { useLoginMutation, useSignupMutation } = authApi;
