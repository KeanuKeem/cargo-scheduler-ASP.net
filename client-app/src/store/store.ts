import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendarSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
