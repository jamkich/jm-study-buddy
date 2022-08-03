import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from './api/notes';
import { groupsApi } from './api/groups';
import { studentsApi } from './api/students';
import modalReducer from './api/modal';
import studentReducer from './api/student';
// use[MethodName][MethodType]

export * from './api/notes';
export * from './api/groups';
export * from './api/students';
export * from './api/modal';
export * from './api/student'; // currentStudent for modal

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    modal: modalReducer,
    student: studentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware).concat(studentsApi.middleware),
});
