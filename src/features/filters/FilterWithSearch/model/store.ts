import { ClassifierObject } from "@/entities/classifiers/model";

export interface FiltersWithSearchState {
    searchValue: string
    selectedValues: ClassifierObject[] | null;
}
  
const initialState: FiltersWithSearchState = {
    searchValue: '',
    selectedValues: [],
};

