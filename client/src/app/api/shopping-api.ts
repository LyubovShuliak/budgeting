import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ShoppingItem } from './types';

// Define a service using a base URL and expected endpoints
export const shoppingListApi = createApi({
  reducerPath: 'shoppingListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/shopping-list/',
  }),
  endpoints: (builder) => ({
    getItemByName: builder.query<ShoppingItem, string>({
      query: (name) => `search/${name}`,
    }),
    getAllItems: builder.query<ShoppingItem, undefined>({
      query: (name) => `/`,
    }),
  }),
});

export const { useGetAllItemsQuery, useLazyGetAllItemsQuery } = shoppingListApi;
