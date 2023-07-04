import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    action: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const modalActions = modalSlice.actions;



export default modalSlice.reducer;
