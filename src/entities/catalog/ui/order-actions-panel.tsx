
'use client'

import { FC } from "react";
import { Button, Flex } from "antd";
import { MyOrdersButton, NewOrderButton } from "@/features/order";
import { orderActionButtons, OrderActionsPanelProps } from "./types";
import { ActionButton } from "@/shared/ui/custom/action-button";

export const CatalogOrderActionsPanel: FC<OrderActionsPanelProps> = () => {
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
