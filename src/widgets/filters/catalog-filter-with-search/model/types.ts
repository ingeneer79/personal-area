

export interface FilterSelectOption {
  key: string;
  label: string;
  value: string;
  options: { label: string; value: string }[];
}

export interface FilterWithSearchProps {
  selectOptions: FilterSelectOption[];
  isLoading: boolean;
  onChange?: (id: string, value: string[]) => void;
  onClearAll?: () => void;
}
