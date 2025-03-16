import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ShoppingItem, Tag } from './types';

// Define a service using a base URL and expected endpoints
export const shoppingHistoryListApi = createApi({
  reducerPath: 'shopping-history-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/shopping-history/',
  }),
  endpoints: (builder) => ({
    getItemByName: builder.query<ShoppingItem, string>({
      query: (name) => `search/${name}`,
    }),
    getAllItemsForTag: builder.query<ShoppingItem, undefined>({
      query: (name) => `/`,
    }),
    getAllItems: builder.query<ShoppingItem[], void>({
      query: () => `tags-item`,
    }),
    getAllTags: builder.query<Tag[], void>({
      query: () => `/tags`,
    }),
  }),
});

export const {
  useGetAllItemsQuery,
  useLazyGetAllItemsQuery,
  useGetAllTagsQuery,
} = shoppingHistoryListApi;
