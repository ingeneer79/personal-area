import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICatalogFiltersStore {
  brand: string
  type: string
  category: string
}

const initialState: ICatalogFiltersStore = {
  brand: '',
  type: '',
  category: '',
};

export const catalogFiltersSlice = createSlice({
  name: "filtersStore",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string>) => {
      state.brand = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },      
});

export const {
  setBrand,
  setType,
  setCategory,
} = catalogFiltersSlice.actions;

export const getBrand = (state: RootState) => state.filtersStore.brand;

export default catalogFiltersSlice.reducer;
