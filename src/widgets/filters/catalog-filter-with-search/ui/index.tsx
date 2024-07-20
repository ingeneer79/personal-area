"use client";
import Flex from "@/shared/ui/Flex";
import Button from "@/shared/ui/Button";
import Select from "@/shared/ui/Select";
import Search from "@/shared/ui/Search";
import { TrashButton } from "./trashButton";
import { FilterWithSearchProps } from "../model/types";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearCatalogFilters,
  setCatalogFiltersSearchValue,
  setCatalogFiltersSelectedValue,
  setCatalogFiltersSelectedValues,
} from "../model/slices";
import { useAppSelector } from "@/shared/lib";
import { FiltersPanel } from "@/shared/ui/custom/filters-panel";

export const FilterWithSearch: FC<FilterWithSearchProps> = ({
  isLoading,
  filterOptions,
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
          padding: "12px",
          borderRadius: "12px",
          backgroundColor: "var(--control-bg-color)",
          minWidth: "300px",
          maxWidth: "50%",
        }}
      >
        <FiltersPanel
          onChange={selectOption => {
            dispatch(setCatalogFiltersSelectedValue(selectOption));
          }}
          isLoading={isLoading}
          filterComponents={filterOptions}
        ></FiltersPanel>
      </Flex>
    </Flex>
  );
};
