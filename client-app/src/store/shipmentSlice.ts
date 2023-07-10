import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ShipmentState {
  isOpen: boolean;
  shipments: {};
  refresh: boolean;
}

const initialState: ShipmentState = {
  isOpen: false,
  shipments: {},
  refresh: false,
};

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    action: (state) => {
      state.isOpen = !state.isOpen;
    },
    setShipments: (state, action: PayloadAction<object>) => {
      state.shipments = action.payload;
    },
    doRefresh: (state) => {
      state.refresh = true;
    },
    RefreshBack: (state) => {
      state.refresh = false;
    }
  },
});

export const shipmentActions = shipmentSlice.actions;

export default shipmentSlice.reducer;
