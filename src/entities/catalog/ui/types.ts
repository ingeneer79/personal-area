
import { constantsMap } from "@/shared/model";
import { ActionButtonProps } from "@/shared/ui/custom/action-button";
import { ReactNode } from "react";

export const orderActionButtons: ActionButtonProps[] = [
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


  