import { createSlice } from '@reduxjs/toolkit';

const initialStudentState = {
  student: { name: '', average: '', course: '', grades: '' },
};

const studentSlice = createSlice({
  name: 'student',
  initialState: initialStudentState,
  reducers: {
    setStudentData: (_, action) => {
      return { ...action.payload };
    },
  },
});

export const { setStudentData } = studentSlice.actions;
export default studentSlice.reducer;
