
'use client'

import { FC } from "react";
import { Flex } from "antd";
import { MyOrdersButton, NewOrderButton } from "@/features/order";
import { orderActionButtons, OrderActionsPanelProps } from "./types";
import { ActionButton } from "@/shared/ui/custom/action-button";
import Button from '@/shared/ui/button'
import { getIcon } from "@/shared/ui/icons/iconUtils/iconUtils";

export const StmOrderActionsPanel: FC<OrderActionsPanelProps> = () => {
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
          <Button icon={getIcon('add')} iconPosition="end" type="primary">Отправить запрос</Button>
      </Flex>
    </Flex>
  );
};