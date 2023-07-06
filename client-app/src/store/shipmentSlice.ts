import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ShipmentState {
  isOpen: boolean;
}

const initialState: ShipmentState = {
  isOpen: false,
};

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    action: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const shipmentActions = shipmentSlice.actions;

export default shipmentSlice.reducer;
