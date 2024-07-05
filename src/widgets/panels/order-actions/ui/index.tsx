
'use client'

import { FC } from "react";
import { Button, Flex } from "antd";
import { orderActionButtons } from "../model/buttons";
import { OrderActionsPanelProps } from "../model/types";
import { OrderActionButton } from "@/entities/order";

export const OrderActionsPanel: FC<OrderActionsPanelProps> = () => {
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
      >        
      {
        orderActionButtons.map((button, index) => (
          <Flex key={index} style={{ height: "48px", borderRight: "1px solid #E8E8E8" }}>
            <OrderActionButton label={button.label} onClick={button.onClick} icon={button.icon} />
          </Flex>
        ))
      }
      </Flex>
    </Flex>
  );
};
