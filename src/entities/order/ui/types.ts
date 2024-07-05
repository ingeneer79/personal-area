import { ReactNode } from "react";

export interface OrderActionButtonProps {
    label: string;
    icon?: ReactNode;  
    onClick?: () => void;
  }
  