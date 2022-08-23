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
        type: action.payload.type,
        message: action.payload.message,
      });
      console.log(state.notifications);
    },
  },
});

export const { createNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
