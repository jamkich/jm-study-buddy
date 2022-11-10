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
    removeNotification: (state, action) => {
      console.log(state, action.payload);
      state.notifications.pop();
    },
  },
});

export const { createNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
