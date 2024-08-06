import { constantsMap } from "@/shared/model";
import { ActionButtonProps } from "@/shared/ui/custom/action-button";

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


export interface StmObject {
  key: string;
  name: string;
  form: string;
  categoryName: string;
  packaging: string;
  quantity: number;
  technicalRegulationInfo: string;
  activeIngredients: string;
  fullComposition: string;
  applicationArea: string;
  marketingInfo: string;
  registrationNumber: string;
  registrationYear: number;
  registrationName: string;
}
  