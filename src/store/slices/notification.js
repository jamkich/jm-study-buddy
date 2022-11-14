import { faker } from '@faker-js/faker';
import { createSlice } from '@reduxjs/toolkit';

const initialNotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotificationState,
  reducers: {
    createNotification: (state, action) => {
      state.notifications.push({
        id: faker.datatype.uuid(),
        type: action.payload.type,
        message: action.payload.message,
      });
    },
    removeNotification: (state) => {
      state.notifications.pop();
    },

    removeAllNotifications: (state) => {
      // state.notifications.splice(0, state.length);
      state.notifications = [];
    },
  },
});

export const { createNotification, removeNotification, removeAllNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
