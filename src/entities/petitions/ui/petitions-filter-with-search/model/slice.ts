import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSelectedValue } from '../../../../../shared/model/types';


interface ICatalogFiltersStore {
  searchValue: string
  selectedValues: FilterSelectedValue[]
}

const initialState: ICatalogFiltersStore = {
  searchValue: '',
  selectedValues: [],
};

export const petitionsFiltersSlice = createSlice({
  name: "petitionsFiltersStore",
  initialState,
  reducers: {
    setPetitionsFiltersSelectedValues: (state, action: PayloadAction<FilterSelectedValue[]>) => {
      state.selectedValues = action.payload;
    },
    setPetitionsFiltersSelectedValue: (state, action: PayloadAction<FilterSelectedValue>) => {
      const index = state.selectedValues.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.selectedValues[index] = action.payload;
      } else {
        state.selectedValues.push(action.payload);
      }
    },
    setPetitionsFiltersSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    clearPetitionsFilters: (state) => {
      state.searchValue = '';
      state.selectedValues = [];
    }    
  },      
});

export const {
  setPetitionsFiltersSelectedValues,
  setPetitionsFiltersSelectedValue,
  setPetitionsFiltersSearchValue,
  clearPetitionsFilters,
} = petitionsFiltersSlice.actions;

export default petitionsFiltersSlice.reducer;
