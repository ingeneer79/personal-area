
'use client'

import { FC } from "react";
import { Flex } from "antd";
import { orderActionButtons, OrderActionsPanelProps } from "./types";
import { ActionButton } from "@/shared/ui/custom/action-button";

export const CertificatesOrderActionsPanel: FC<OrderActionsPanelProps> = () => {
  return (
      <Flex
        gap="middle"
        align="center"
        flex={1}
      >        
      {
        orderActionButtons.map((button, index) => (
          <Flex key={index} style={{ height: "var(--space-4xl)", borderRight: "1px solid #E8E8E8" }}>
            <ActionButton label={button.label} onClick={button.onClick} icon={button.icon}/>            
          </Flex>
        ))
      }
      </Flex>
  );
};
