import { RootState } from "@/app/store";

export const getFinanceFiltersSearchValue = (state: RootState) => state.financeFiltersStore.searchValue;
