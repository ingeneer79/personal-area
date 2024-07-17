import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassifierObject } from "@/entities/classifiers/model";
import { CatalogFilterSelectedValue } from "./types";

interface ICatalogFiltersStore {
  searchValue: string
  selectedValues: CatalogFilterSelectedValue[]
}

const initialState: ICatalogFiltersStore = {
  searchValue: '',
  selectedValues: [],
};

export const catalogFiltersSlice = createSlice({
  name: "catalogFiltersStore",
  initialState,
  reducers: {
    setCatalogFiltersSelectedValues: (state, action: PayloadAction<CatalogFilterSelectedValue[]>) => {
      state.selectedValues = action.payload;
    },
    setCatalogFiltersSelectedValue: (state, action: PayloadAction<CatalogFilterSelectedValue>) => {
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
