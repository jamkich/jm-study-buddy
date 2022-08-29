import { faker } from '@faker-js/faker';
import { createSlice } from '@reduxjs/toolkit';

const initialNotiState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotiState,
  reducers: {
    createNotification: (state, action) => {
      state.notifications.push({
        id: faker.datatype.uuid(),
        type: action.payload.type,
        message: action.payload.message,
      });
    },
  },
});

export const { createNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
