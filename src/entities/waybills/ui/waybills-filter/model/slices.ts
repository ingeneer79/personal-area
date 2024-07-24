import { FilterSelectedValue } from "@/shared/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IWaybillsFiltersStore {
  selectedValues: FilterSelectedValue[]
}

const initialState: IWaybillsFiltersStore = {
  selectedValues: [],
};

export const waybillsFiltersSlice = createSlice({
  name: "waybillsFiltersStore",
  initialState,
  reducers: {
    setWaybillsFiltersSelectedValues: (state, action: PayloadAction<FilterSelectedValue[]>) => {
      state.selectedValues = action.payload;
    },
    setWaybillsFiltersSelectedValue: (state, action: PayloadAction<FilterSelectedValue>) => {
      const index = state.selectedValues.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.selectedValues[index] = action.payload;
      } else {
        state.selectedValues.push(action.payload);
      }
    },
    clearWaybillsFilters: (state) => {
      state.selectedValues = [];
    }    
  },      
});

export const {
  setWaybillsFiltersSelectedValues,
  setWaybillsFiltersSelectedValue,
  clearWaybillsFilters,
} = waybillsFiltersSlice.actions;

export default waybillsFiltersSlice.reducer;
