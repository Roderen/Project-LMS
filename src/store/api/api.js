import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://65501eb77d203ab6626d9363.mockapi.io';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    getJsCourse: builder.query({
      query: () => '/js_course',
    }),
  }),
});

export const { useGetUsersQuery, useGetJsCourseQuery } = api;
