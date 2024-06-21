export interface SelectOption {
    key: string;
    label: string;
    value: string;
    options: { label: string; value: string }[];
  }
  
  export interface FilterWithSearchProps {
    selectOptions: SelectOption[];
    onChange?: (id: string, value: string) => void;
    onClearAll?: () => void;
  }
  
