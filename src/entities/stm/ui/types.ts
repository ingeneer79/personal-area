
import { constantsMap } from "@/shared/model";
import { ActionButtonProps } from "@/shared/ui/custom/action-button";
import { ReactNode } from "react";

export const orderActionButtons: ActionButtonProps[] = [
  {
    label: constantsMap.pages.stm.actions.downloadStmCatalog,
    onClick: () => {},
  },
  {
    label: constantsMap.pages.stm.actions.exportExcel,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.stm.actions.feedback,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.stm.actions.viewCatalog,
    // onClick: () => {},      
  },
]  

  
export interface OrderActionsPanelProps {
  // buttons: OrderActionButton[];
  isLoading: boolean;
}


  