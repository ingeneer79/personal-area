
'use client'

import { FC } from "react";
import { Flex } from "antd";

import { WaybillsActionButton } from "@/entities/waybills/ui/waybills-action-button";
import { waybillsActionButtons } from "@/entities/waybills/ui/types";

export const WaybillsOrderActionsPanel: FC = () => {
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
        align="center"
        flex={1}
      >        
      {
        waybillsActionButtons.map((button, index) => (
          <Flex key={index} style={{ height: "48px", borderRight: "1px solid #E8E8E8" }}>
            <WaybillsActionButton label={button.label} onClick={button.onClick} icon={button.icon} />            
          </Flex>
        ))
      }
      </Flex>
    </Flex>
  );
};
