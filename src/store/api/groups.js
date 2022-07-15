import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),
    getStudentsByGroup: builder.query({
      query: (body) => `groups/${body.id}`,
    }),
  }),
});

export const { useGetGroupsQuery, useGetStudentsByGroupQuery } = groupsApi;
