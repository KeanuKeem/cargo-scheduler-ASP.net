import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendarSlice";
import modalSlice from "./modalSlice";
import shipmentSlice from "./shipmentSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    modal: modalSlice,
    shipment: shipmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
