import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";

export const store = configureStore({
  reducer: {
    typing: wordSlice,
  },
});
