import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassifierObject } from "@/entities/classifiers/model";

interface ICatalogFiltersStore {
  searchValue: string
  selectedValues: ClassifierObject[]
}

const initialState: ICatalogFiltersStore = {
  searchValue: '',
  selectedValues: [],
};

export const catalogFiltersSlice = createSlice({
  name: "catalogFiltersStore",
  initialState,
  reducers: {
    setCatalogFiltersSelectedValues: (state, action: PayloadAction<ClassifierObject[]>) => {
      state.selectedValues = action.payload;
    },
    setCatalogFiltersSelectedValue: (state, action: PayloadAction<ClassifierObject>) => {
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
  },      
});

export const {
  setCatalogFiltersSelectedValues,
  setCatalogFiltersSelectedValue,
  setCatalogFiltersSearchValue,
} = catalogFiltersSlice.actions;

export default catalogFiltersSlice.reducer;
