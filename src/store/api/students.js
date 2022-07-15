import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getStudentsById: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: 'GET',
      }),
    }),

    findStudents: builder.mutation({
      query: (body) => ({
        url: 'students/search',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetStudentsByIdMutation, useFindStudentsMutation } = studentsApi;
