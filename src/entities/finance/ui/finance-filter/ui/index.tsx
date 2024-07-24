"use client";
import Flex from "@/shared/ui/flex";
import Search from "@/shared/ui/search";
import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  setFinanceFiltersSearchValue,
} from "../model/slices";
import { FilterWithSearchProps } from "../model/types";

export const FinanceFilter: FC<FilterWithSearchProps> = ({
  
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
            dispatch(setFinanceFiltersSearchValue(value.target.value));
          }}
        />
      </Flex>      
    </Flex>
  );
};
