import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    getStudentsById: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Student'],
    }),

    findStudents: builder.mutation({
      query: (body) => ({
        url: 'students/search',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Student'],
    }),
  }),
});

export const { useGetStudentsByIdMutation, useFindStudentsMutation } = studentsApi;
