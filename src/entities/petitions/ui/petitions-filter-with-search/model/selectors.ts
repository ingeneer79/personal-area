import { RootState } from "@/app/store";

export const getPetitionsFiltersSelectedValues = (state: RootState) => state.petitionsFiltersStore.selectedValues;
export const getPetitionsFiltersSearchValue = (state: RootState) => state.petitionsFiltersStore.searchValue;
