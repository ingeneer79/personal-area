
'use client'

import { FC } from "react";
import { OrderActionButton, OrderActionsPanelProps } from "../model/types";
import { constantsMap } from "@/shared/model";
import { Button, Flex } from "antd";

export const OrderActionsPanel: FC = () => {


  const orderActionButtons: OrderActionButton[] = [
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
      >        
      {
        orderActionButtons.map((button, index) => (
          <Button key={index} onClick={button.onClick}>
            {button.label}
          </Button>
        ))
      }
      </Flex>
    </Flex>
  );
};
