import { RootState } from "@/app/store";

export const getCatalogFiltersSelectedValues = (state: RootState) => state.catalogFiltersStore.selectedValues;
export const getCatalogFiltersSearchValue = (state: RootState) => state.catalogFiltersStore.searchValue;
