import { FilterSelectedValue } from "@/shared/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IFinanceFiltersStore {
  searchValue: string
  selectedValues: FilterSelectedValue[]
}

const initialState: IFinanceFiltersStore = {
  searchValue: '',
  selectedValues: [],
};

export const financeFiltersSlice = createSlice({
  name: "financeFiltersStore",
  initialState,
  reducers: {
    setFinanceFiltersSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    clearFinanceFilters: (state) => {
      state.searchValue = '';
      state.selectedValues = [];
    }    
  },      
});

export const {
  setFinanceFiltersSearchValue,
  clearFinanceFilters,
} = financeFiltersSlice.actions;

export default financeFiltersSlice.reducer;
