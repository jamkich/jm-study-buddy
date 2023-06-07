import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from './api/notes';
import { groupsApi } from './api/groups';
import { studentsApi } from './api/students';
import modalReducer from './slices/modal';
import studentReducer from './slices/student';
import notificationReducer from './slices/notification';
// use[MethodName][MethodType]

export * from './api/notes';
export * from './api/groups';
export * from './api/students';
export * from './slices/modal';
export * from './slices/student'; // currentStudent for modal
export * from './slices/notification';

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    modal: modalReducer,
    student: studentReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware).concat(groupsApi.middleware).concat(studentsApi.middleware),
});
