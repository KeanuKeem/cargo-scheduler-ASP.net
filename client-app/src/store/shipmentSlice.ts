import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ShipmentState {
  isOpen: boolean;
  currentShipment: string;
}

const initialState: ShipmentState = {
  isOpen: false,
  currentShipment: "",
};

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    action: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCurrShipment: (state, action: PayloadAction<string>) => {
        state.currentShipment = action.payload;
    },
  },
});

export const shipmentActions = shipmentSlice.actions;

export default shipmentSlice.reducer;