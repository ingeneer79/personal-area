"use client";
import Flex from "@/shared/ui/flex";
import Search from "@/shared/ui/search";
import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  setCatalogFiltersSearchValue,
  setCatalogFiltersSelectedValue,
} from "../model/slice";
import { FiltersPanel } from "@/shared/ui/custom/filters-panel";
import { FilterWithSearchProps } from "../model/types";

export const CatalogFilterWithSearch: FC<FilterWithSearchProps> = ({
  isLoading,
  filterComponents,
}) => {
  const dispatch = useDispatch();
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex
        gap="middle"
        className="search w-full"
        style={{ flex: 1, minWidth: "300px" }}
      >
        <Search
          placeholder="Поиск"
          allowClear
          size="large"
          enterButton
          onChange={value => {
            dispatch(setCatalogFiltersSearchValue(value.target.value));
          }}
        />
      </Flex>
      <Flex
        gap="middle"
        style={{
          flex: 1,
          padding: "var(--size-text-xs)",
          borderRadius: "var(--size-text-xs)",
          backgroundColor: "var(--control-bg-color)",
          minWidth: "300px",
          maxWidth: "50%",
        }}
      >
        <FiltersPanel
          onChange={selectOption => {
            dispatch(setCatalogFiltersSelectedValue(selectOption));
          }}
          filterComponents={filterComponents}
        ></FiltersPanel>
      </Flex>
    </Flex>
  );
};
