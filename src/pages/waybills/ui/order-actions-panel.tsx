
'use client'

import { FC } from "react";
import { Flex } from "antd";
import { OrdersActionButton } from '@/entities/catalog';
import { orderActionButtons, OrderActionsPanelProps } from "./types";

export const WaybillsOrderActionsPanel: FC<OrderActionsPanelProps> = () => {
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
            <OrdersActionButton label={button.label} onClick={button.onClick} icon={button.icon} />            
          </Flex>
        ))
      }
      </Flex>
    </Flex>
  );
};
