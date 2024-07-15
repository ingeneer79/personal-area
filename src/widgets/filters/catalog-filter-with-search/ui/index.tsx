'use client'
import Flex from '@/shared/ui/Flex';
import Button from '@/shared/ui/Button';
import Select from '@/shared/ui/Select';
import Search from '@/shared/ui/Search';
import { TrashButton } from "./trashButton";
import { FilterWithSearchProps } from "../model/types";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setCatalogFiltersSearchValue, setCatalogFiltersSelectedValue, setCatalogFiltersSelectedValues } from "../model/slices";

export const FilterWithSearch: FC<FilterWithSearchProps> = ({
  isLoading,
  selectOptions,
  onChange,
  onClearAll
}) => {
  const dispatch = useDispatch();
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex gap="middle" className="search w-full" style={{ flex: 1, minWidth: "300px" }}>
        <Search placeholder="Поиск" allowClear size="large" enterButton onChange={(value) => {
          dispatch(setCatalogFiltersSearchValue(value.target.value));
        }}/>
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
        {
          selectOptions?.map((selectOption) => (
            <Select
              key={selectOption.key}
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder={selectOption.label}
              options={selectOption.options}
              loading={isLoading}
              onChange={(value) => {  
                debugger
                dispatch(setCatalogFiltersSelectedValue({id: selectOption.key, items: selectOption.options.filter(item => value.includes(item.value))}));
              }}
            />
          ))
        }
        <Button
          size="large"
          type="primary"
          style={{ minWidth: "48px", background: "white", borderRadius: "8px" }}
          onClick={onClearAll}
          icon={<TrashButton />}
        />
      </Flex>
    </Flex>
  );
};
