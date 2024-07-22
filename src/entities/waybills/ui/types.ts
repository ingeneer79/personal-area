
import { constantsMap } from "@/shared/model";
import { ReactNode } from "react";

export interface WaybillsActionButtonProps {
  label: string;
  icon?: ReactNode;  
  onClick?: () => void;
}

export const waybillsActionButtons: WaybillsActionButtonProps[] = [
  {
    label: constantsMap.pages.wayBills.actions.downloadAll,
    onClick: () => {},
  },
  {
    label: constantsMap.pages.wayBills.actions.viewCertificates,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.wayBills.actions.downloadCertificates,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.wayBills.actions.exportToExcel,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.wayBills.actions.exportToElectronicWaybill,
    // onClick: () => {},      
  }
]  

  
export interface OrderActionsPanelProps {
  // buttons: OrderActionButton[];
  isLoading: boolean;
}


  