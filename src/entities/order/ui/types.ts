import { ReactNode } from "react";

export interface OrdersActionButtonProps {
    label: string;
    icon?: ReactNode;  
    onClick?: () => void;
  }
  