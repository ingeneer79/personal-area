
import { OrdersActionButtonProps } from "@/entities/order/ui/types";
import { constantsMap } from "@/shared/model";


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