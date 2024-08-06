
import { constantsMap } from "@/shared/model";
import { ActionButtonProps } from "@/shared/ui/custom/action-button";

export const orderActionButtons: ActionButtonProps[] = [
  {
    label: constantsMap.pages.certificates.actions.downloadCertificates,
    onClick: () => {},
  },
  {
    label: constantsMap.pages.certificates.actions.viewCatalog,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.certificates.actions.ExportToExcel,
    // onClick: () => {},      
  },
  {
    label: constantsMap.pages.certificates.actions.ExportWaybill,
    // onClick: () => {},      
  },
]  

  
export interface OrderActionsPanelProps {
  // buttons: OrderActionButton[];
  isLoading: boolean;
}


  