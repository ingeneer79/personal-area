
'use client'

import { FC } from "react";
import { Flex } from "antd";
import { PetitionActionsPanelProps } from "./types";
import { ActionButton, ActionButtonProps } from "@/shared/ui/custom/action-button";
import { constantsMap } from "@/shared/model";
import { NewPetitionButton } from "@/features/petitions";

export const PetitionsActionsPanel: FC<PetitionActionsPanelProps> = () => {

  const orderActionButtons: ActionButtonProps[] = [
    {
      label: constantsMap.pages.petitions.actions.documents,
      onClick: () => {},
    },
    {
      label: constantsMap.pages.petitions.actions.print,
      // onClick: () => {},      
    },
    {
      label: constantsMap.pages.petitions.actions.exportToExcel,
      // onClick: () => {},      
    },
    {
      label: constantsMap.pages.petitions.actions.reject,
      // onClick: () => {},      
    },
  ]  
  
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
        align="center"
        flex={1}
      >        
      {
        orderActionButtons.map((button, index) => (
          <Flex key={index} style={{ height: "var(--space-4xl)", borderRight: "1px solid #E8E8E8" }}>
            <ActionButton label={button.label} onClick={button.onClick} icon={button.icon} />            
          </Flex>
        ))
      }
      </Flex>
      <Flex flex={0} gap={"middle"} align="center" style={{ height: "var(--space-4xl)" }}>
          <NewPetitionButton />
        </Flex>
    </Flex>
  );
};
