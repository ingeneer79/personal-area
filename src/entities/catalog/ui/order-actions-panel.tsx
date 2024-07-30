
'use client'

import { FC } from "react";
import { Flex } from "antd";
import { MyOrdersButton, NewOrderButton } from "@/features/order";
import { OrderActionsPanelProps } from "./types";
import { ActionButton, ActionButtonProps } from "@/shared/ui/custom/action-button";
import { constantsMap } from "@/shared/model";

export const CatalogOrderActionsPanel: FC<OrderActionsPanelProps> = () => {

  const orderActionButtons: ActionButtonProps[] = [
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
  
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
        align="center"
        flex={1}
      >        
      {
        orderActionButtons.map((button, index) => (
          <Flex key={index} style={{ height: "48px", borderRight: "1px solid #E8E8E8" }}>
            <ActionButton label={button.label} onClick={button.onClick} icon={button.icon} />            
          </Flex>
        ))
      }
      </Flex>
      <Flex flex={0} gap={"middle"} align="center" style={{ height: "48px" }}>
          <MyOrdersButton />
          <NewOrderButton />
        </Flex>
    </Flex>
  );
};
