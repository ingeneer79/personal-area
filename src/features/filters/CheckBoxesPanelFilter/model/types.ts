export interface CheckBoxesPanelOption {
    key: string;
    label: string;
    value: string;
  }
  
  export interface CheckBoxesPanelFilterProps {
    selectOptions: CheckBoxesPanelOption[];
    isLoading: boolean;
    onChange?: (checkedValues: string[]) => void;    
  }
  
