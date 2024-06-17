import { Button, Flex, Select } from "antd";
import Search from "antd/es/input/Search";
import { brandOptions, categoryOptions, typeOptions } from "../config";
import { TrashButton } from "./trashButton";

export const FilterWithSearch = () => {
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
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Бренд"
          options={brandOptions}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Тип"
          options={typeOptions}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Категория"
          options={categoryOptions}
        />
        <Button
          size="large"
          type="primary"
          style={{ minWidth: "48px", background: "white", borderRadius: "8px" }}
          icon={<TrashButton />}
        />
      </Flex>
    </Flex>
  );
};
