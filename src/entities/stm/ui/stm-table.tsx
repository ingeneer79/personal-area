"use client";
import "./stm-table.css";
import { Table } from "antd";
import { getStm } from "../api/api";
import { StmObject } from "../model/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";
import {
  getCatalogFiltersSearchValue,
  getCatalogFiltersSelectedValues,
} from "@/entities/catalog/ui/catalog-filter-with-search/model";
import { FilterSelectedValue } from "@/shared/model/types";
import mockTableData from "../model/mockTableData";
import { ExpandIcon } from "@/shared/ui/icons/expand-icon";

export const StmTable = () => {
  const searchFilterValue = useAppSelector(getCatalogFiltersSearchValue);
  const selectedFilterValues = useAppSelector(getCatalogFiltersSelectedValues);
  const [data, setData] = useState<StmObject[]>([]);
  const [filteredData, setFilteredData] = useState<StmObject[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<
    Array<string | number>
  >([]);

  const onSelectChange = (newSelectedRowKeys: any) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const CatalogTableColumns = [
    {
      title: "Наименование",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Категория",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Форма выпуска",
      dataIndex: "form",
      key: "form",
    },
    {
      title: "Упаковка",
      dataIndex: "packaging",
      key: "packaging",
    },
    {
      title: "Выбор кратности",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const expandedRowRender = (record: StmObject) => {
    return (
      <div className="record-container">
        <p>
          <span className="left">№ СГР:</span>{" "}
          <span className="right">
            {record.registrationNumber || "Нет данных"}
          </span>
        </p>
        <p>
          <span className="left">Год СГР:</span>{" "}
          <span className="right">
            {record.registrationYear || "Нет данных"}
          </span>
        </p>
        <p>
          <span className="left">Наименование по СГР:</span>{" "}
          <span className="right">
            {record.registrationName || "Нет данных"}
          </span>
        </p>
        <p>
          <span className="left">Информация о техническом регламенте:</span>{" "}
          <span className="right">
            {record.technicalRegulationInfo || "Нет данных"}
          </span>
        </p>
        <p>
          <span className="left">Активные вещества:</span>{" "}
          <span className="right">
            {record.activeIngredients || "Нет данных"}
          </span>
        </p>
        <p>
          <span className="left">Полный состав:</span>{" "}
          <span className="right">
            {record.fullComposition || "Нет данных"}
          </span>
        </p>
        <p>
          <span className="left">Область применения:</span>{" "}
          <span className="right">
            {record.applicationArea || "Нет данных"}
          </span>
        </p>
        <p>
          <span className="left">Маркетинговая информация:</span>{" "}
          <span className="right">{record.marketingInfo || "Нет данных"}</span>
        </p>
      </div>
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getStm();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let filteredDataNew = data.filter((order: StmObject) => {
      let filterBySearchResult = null;
      if (searchFilterValue) {
        Object.entries(order).forEach(([_key, value]) => {
          if (String(value).includes(searchFilterValue)) {
            filterBySearchResult = order;
          }
        });
      } else {
        filterBySearchResult = order;
      }
      return filterBySearchResult;
    });

    if (selectedFilterValues?.length) {
      filteredDataNew = filteredDataNew.filter((order: StmObject) => {
        return selectedFilterValues.some(
          (selectedFilterValue: FilterSelectedValue) => {
            if ((selectedFilterValue.values as string[]).length === 0) {
              return true;
            }
            const fieldValue = (order as any)[selectedFilterValue.id];
            if (fieldValue) {
              return (selectedFilterValue.values as string[]).some(
                (item: string) => String(item) === String(fieldValue)
              );
            }
          }
        );
      });
    }

    setFilteredData(filteredDataNew);
  }, [data, searchFilterValue, selectedFilterValues]);

  interface ExpandIconProps {
    expanded: boolean;
    onExpand: (record: any, e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    record: any;
  }

 const renderExpandIcon = ({ expanded, onExpand, record }: ExpandIconProps) => {
  return (
    <ExpandIcon
      rotate={expanded ? 90 : 0} // Поворот на 90 градусов если развернуто
      onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => onExpand(record, e)} // Обработчик клика
    />
  );
};

  return (
    <div className="stm-table-wrapper">
      <Table
        dataSource={mockTableData}
        size="middle"
        columns={CatalogTableColumns}
        rowKey={(record) => record.key}
        expandable={{
          expandedRowRender,
          // @ts-ignore
          expandIcon: renderExpandIcon
        }}
        rowSelection={rowSelection}
        className="stm-table"
        pagination={false}
      />
    </div>
  );
};
