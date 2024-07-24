
import { constantsMap } from "@/shared/model";
import { ActionButtonProps } from '@/shared/ui/custom/action-button';

export const financeActionButtons: ActionButtonProps[] = [
  {
    label: constantsMap.pages.finance.actions.requestVerification,
    onClick: () => {},
  },
  {
    label: constantsMap.pages.finance.actions.requestVerification,
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

  
export interface FinanceActionsPanelProps {
  isLoading: boolean;
}


  