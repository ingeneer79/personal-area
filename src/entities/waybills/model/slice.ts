import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WaybillsState {
  newWaybill: boolean
}

const initialState: WaybillsState = {
  newWaybill: false
};

export const waybillsSlice = createSlice({
  name: "waybillsStore",
  initialState,
  reducers: {
    addNewWaybill: (state, action: PayloadAction<boolean>) => {
        state.newWaybill = action.payload
    }
  },
});
