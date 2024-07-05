export interface OrderActionButton {
    label: string;
    onClick?: () => void;
  }
  
  export interface OrderActionsPanelProps {
    buttons: OrderActionButton[];
    isLoading: boolean;
  }
  
