export interface SelectOption {
    key: string;
    label: string;
    value: string;
  }
  
  export interface FastButtonsSearchPanel {
    selectOptions: SelectOption[];
    isLoading: boolean;
    onChange?: (id: string, value: string) => void;    
  }
  
