

export interface FilterSelectOption {
  key: string;
  label: string;
  value: string;
  options: { label: string; value: string }[];
}

export interface CatalogFilterSelectedValue {
  id: string;
  values: string[]  
}

export interface FilterWithSearchProps {
  searchValue?: string;
  selectOptions: FilterSelectOption[];
  isLoading: boolean;
  onChange?: (id: string, value: string[]) => void;
  onClearAll?: () => void;
}
