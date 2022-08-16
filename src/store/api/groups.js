import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),
    getStudentsByGroup: builder.query({
      query: (body) => `groups/${body.id}`,
      providesTags: ['Students'],
    }),
  }),
});

export const { useGetGroupsQuery, useGetStudentsByGroupQuery, tagTypes } = groupsApi;
