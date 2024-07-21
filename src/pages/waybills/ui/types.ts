
import { constantsMap } from "@/shared/model";
import { ReactNode } from "react";

export interface OrdersActionButtonProps {
  label: string;
  icon?: ReactNode;  
  onClick?: () => void;
}

export const orderActionButtons: OrdersActionButtonProps[] = [
  {
    label: constantsMap.pages.catalog.actions.loadOrder,
    onClick: () => {},
  },
  {
    label: constantsMap.pages.catalog.actions.downloadTemplate,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.catalog.actions.uploadByTemplate,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.catalog.actions.downloadPriceList,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.catalog.actions.sendPriceListByFTP,
    // onClick: () => {},      
  }
]  

  
export interface OrderActionsPanelProps {
  // buttons: OrderActionButton[];
  isLoading: boolean;
}


  