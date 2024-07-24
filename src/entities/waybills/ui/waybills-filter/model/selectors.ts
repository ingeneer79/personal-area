import { RootState } from "@/app/store";

export const getWaybillsFiltersSelectedValues = (state: RootState) => state.waybillsFiltersStore.selectedValues;
