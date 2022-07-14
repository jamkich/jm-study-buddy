import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getStudentsById: builder.query({
      query: (body) => `students/${body.id}`,
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

export const { useGetStudentsByIdQuery, useFindStudentsMutation } = studentsApi;
