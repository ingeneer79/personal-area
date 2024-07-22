import { ReactNode } from "react";

export interface ActionButtonProps {
    label: string;
    icon?: ReactNode;  
    onClick?: () => void;
  }
  