"use client";
import { Checkbox, Flex } from "antd";

import { FC } from "react";
import { CheckBoxesPanelFilterProps } from "../model/types";

export const CheckBoxesPanelFilter: FC<CheckBoxesPanelFilterProps> = ({
  selectOptions,
  onChange,
}) => {
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
      >
        <Checkbox.Group
          options={selectOptions}
          onChange={checkedValues => onChange?.(checkedValues)}
        />
      </Flex>
    </Flex>
  );
};
