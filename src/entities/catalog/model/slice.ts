import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrdersState {
    newOrder: boolean
}

const initialState: OrdersState = {
    newOrder: false
};

export const ordersSlice = createSlice({
  name: "ordersStore",
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<boolean>) => {
        state.newOrder = action.payload
    }
  },
});
