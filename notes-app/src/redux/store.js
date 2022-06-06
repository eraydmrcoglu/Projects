import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './notes/noteSlice';
export const store = configureStore({
  reducer: { notes: noteSlice },
});