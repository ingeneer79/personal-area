"use client";
import Flex from "@/shared/ui/flex";
import Search from "@/shared/ui/search";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { FiltersPanel } from "@/shared/ui/custom/filters-panel";
import { FilterWithSearchProps } from "../model/types";
import { setWaybillsFiltersSelectedValue } from "../model/slice";

export const WaybillsFilter: FC<FilterWithSearchProps> = ({
  isLoading,
  filterComponents,
}) => {
  const dispatch = useDispatch();
  return (
    <Flex gap="middle" className="w-full items-center">      
      <Flex
        gap="middle"
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "12px",
          backgroundColor: "var(--control-bg-color)",
          minWidth: "300px",
        }}
      >
        <FiltersPanel
          isLoading={isLoading}
          onChange={selectOption => {
            dispatch(setWaybillsFiltersSelectedValue(selectOption));
          }}
          filterComponents={filterComponents}
        ></FiltersPanel>
      </Flex>
    </Flex>
  );
};
