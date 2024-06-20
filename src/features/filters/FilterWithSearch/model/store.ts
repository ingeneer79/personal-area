import { BrandObject } from "@/entities/classifiers/model";

export interface FiltersWithSearchState {
    brand: BrandObject | null;
}
  
const initialState: FiltersWithSearchState = {
    brand: null,
};

