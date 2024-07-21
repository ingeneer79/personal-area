import { FilterSelectedValue } from "@/shared/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ICatalogFiltersStore {
  searchValue: string
  selectedValues: FilterSelectedValue[]
}

const initialState: ICatalogFiltersStore = {
  searchValue: '',
  selectedValues: [],
};

export const catalogFiltersSlice = createSlice({
  name: "catalogFiltersStore",
  initialState,
  reducers: {
    setCatalogFiltersSelectedValues: (state, action: PayloadAction<FilterSelectedValue[]>) => {
      state.selectedValues = action.payload;
    },
    setCatalogFiltersSelectedValue: (state, action: PayloadAction<FilterSelectedValue>) => {
      const index = state.selectedValues.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.selectedValues[index] = action.payload;
      } else {
        state.selectedValues.push(action.payload);
      }
    },
    setCatalogFiltersSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    clearCatalogFilters: (state) => {
      state.searchValue = '';
      state.selectedValues = [];
    }    
  },      
});

export const {
  setCatalogFiltersSelectedValues,
  setCatalogFiltersSelectedValue,
  setCatalogFiltersSearchValue,
  clearCatalogFilters,
} = catalogFiltersSlice.actions;

export default catalogFiltersSlice.reducer;
