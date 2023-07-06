import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ModalState {
  isOpen: boolean;
  isNotification: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isNotification: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    action: (state) => {
      state.isOpen = !state.isOpen;
    },
    notificationAction: (state) => {
      state.isNotification = !state.isNotification;
    }
  },
});

export const modalActions = modalSlice.actions;



export default modalSlice.reducer;
