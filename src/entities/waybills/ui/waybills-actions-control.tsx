"use client";
import { FC } from "react";
import Flex from "@/shared/ui/flex";

import { WaybillActionsControlButton } from "../model/types";
import { Button } from "@/shared/ui";
import { SettingsIcon } from "@/shared/ui/icons/icon-settings";

export interface WaybillActionsControlProps {
  buttons: WaybillActionsControlButton[];
}

export const WaybillActionsControl: FC<WaybillActionsControlProps> = ({
  buttons,
}) => {
  return (
    <Flex align="center" gap={"small"}>
      {buttons.map((button, index) => (
        <Button key={index} style={{ padding: "0", height: "fit-content" }} type="text" onClick={() => button.onClick}>
          <SettingsIcon />
        </Button>
      ))}
    </Flex>
  );
};
