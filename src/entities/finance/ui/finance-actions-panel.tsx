
'use client'

import { FC } from "react";
import { Flex } from "antd";
import { ActionButton } from "@/shared/ui/custom/action-button";
import { financeActionButtons, FinanceActionsPanelProps } from "./model/types";

export const FinanceActionsPanel: FC<FinanceActionsPanelProps> = () => {
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
        align="center"
        flex={1}
      >        
      {
        financeActionButtons.map((button, index) => (
          <Flex key={index} style={{ height: "var(--space-4xl)", borderRight: "1px solid #E8E8E8" }}>
            <ActionButton label={button.label} onClick={button.onClick} icon={button.icon} />            
          </Flex>
        ))
      }
      </Flex>
    </Flex>
  );
};
