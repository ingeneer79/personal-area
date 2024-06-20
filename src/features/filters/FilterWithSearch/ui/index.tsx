import { Button, Flex, Select } from "antd";
import Search from "antd/es/input/Search";
import { TrashButton } from "./trashButton";
import { FilterWithSearchProps } from "../model/types";
import { FC } from "react";


export const FilterWithSearch: FC<FilterWithSearchProps> = ({
  selectOptions,
  onChange,
  onClearAll
}) => {
  return (
    <Flex gap="middle" className="w-full items-center">
      <Flex gap="middle" className="search w-full" style={{ flex: 1, minWidth: "300px" }}>
        <Search placeholder="Поиск" allowClear size="large" enterButton />
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
              onChange={(value) => onChange?.(selectOption.key, value)}
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
