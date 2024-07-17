'use client'
import Flex from '@/shared/ui/Flex';
import Button from '@/shared/ui/Button';
import Select from '@/shared/ui/Select';
import Search from '@/shared/ui/Search';
import { TrashButton } from "./trashButton";
import { FilterWithSearchProps } from "../model/types";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCatalogFilters, setCatalogFiltersSearchValue, setCatalogFiltersSelectedValue, setCatalogFiltersSelectedValues } from "../model/slices";
import { useAppSelector } from '@/shared/lib';

export const FilterWithSearch: FC<FilterWithSearchProps> = ({
  isLoading,
  selectOptions,
}) => {
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>({});
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
              value={selectedValues[selectOption.key] ?? []}
              loading={isLoading}
              onChange={(value) => {  
                selectedValues[selectOption.key] = value
                setSelectedValues({...selectedValues});                  
                dispatch(setCatalogFiltersSelectedValue({id: selectOption.key, values: selectOption.options.filter(item => value.includes(item.value)).map(item => item.value)}));
              }}
            />
          ))
        }
        <Button
          size="large"
          type="primary"
          style={{ minWidth: "48px", background: "white", borderRadius: "8px" }}
          onClick={() => {
            setSelectedValues({});
            dispatch(clearCatalogFilters());            
          }}
          icon={<TrashButton />}
        />
      </Flex>
    </Flex>
  );
};
