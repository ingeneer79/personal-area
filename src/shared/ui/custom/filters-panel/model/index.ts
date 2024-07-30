

export interface FiltersPanelComponentProperties {
    key: string;
    label: string;
    width?: number;
    type?: "select" | "date" | "checkbox";
    value?: string;
    options: { label: string; value: string }[];
  }
  
  export interface FiltersPanelComponentSelectedValue {
    id: string;
    values: string[] | Date  
  }
  
  export interface FiltersPanelProps {
    filterComponents: FiltersPanelComponentProperties[];
    isLoading?: boolean;
    onChange?: (selectOption : FiltersPanelComponentSelectedValue) => void;
    onClearAll?: () => void;
  }
  
  
  