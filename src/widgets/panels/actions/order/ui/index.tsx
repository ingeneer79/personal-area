"use client";
import { Button, Checkbox, Flex } from "antd";

import { FC } from "react";
import { OrderActionsPanelProps } from "../model/types";

export const OrderActionsPanel: FC<OrderActionsPanelProps> = ({
  buttons,
}) => {
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
      >        
      {
        buttons.map((button, index) => (
            <Button key={index} >
              {button.label}
            </Button>
        ))
      }
      </Flex>
    </Flex>
  );
};
