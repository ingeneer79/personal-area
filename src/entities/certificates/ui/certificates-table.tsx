"use client";
import "./certificates-table.css";
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
import tableData from "../model/mockTableData";
import { ExpandIcon } from "@/shared/ui/icons/expand-icon";

export const CertificatesTable = () => {
  const searchFilterValue = useAppSelector(getCatalogFiltersSearchValue);
  const selectedFilterValues = useAppSelector(getCatalogFiltersSelectedValues);
  const [data, setData] = useState<StmObject[]>([]);
  const [filteredData, setFilteredData] = useState<StmObject[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<
    Array<string | number>
  >([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState<
    Array<string | number>
  >([]);

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

  interface SeriesData {
    date: string;
    number: string;
  }

  interface TableData {
    article: string;
    name: string;
    series: SeriesData[];
  }

  const onSelectChange = (newSelectedRowKeys: any) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  interface ExpandIconProps {
    expanded: boolean;
    onExpand: (
      record: any,
      e: React.MouseEvent<SVGSVGElement, MouseEvent>
    ) => void;
    record: any;
  }

  const renderExpandIcon = ({
    expanded,
    onExpand,
    record,
  }: ExpandIconProps) => {
    return (
      <ExpandIcon
        rotate={expanded ? 90 : 0} // Поворот на 90 градусов если развернуто
        onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
          onExpand(record, e)
        } // Обработчик клика
      />
    );
  };

  const CatalogTableColumns = [
    {
      title: "Артикул",
      dataIndex: "article",
      key: "article",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Действия",
      key: "actions",
      render: () => <a href="#">Открыть СГР / РУ</a>, // Replace with the correct action
    },
  ];

  const expandedRowRender = (record: TableData) => (
    <div className="cetrificates-table-wrapper">
      {record.series.length > 0 ? (
        <div className="table">
          <div className="table__heading">
            <p className="table__heading-cell cell">Дата</p>
            <p className="table__heading-cell cell">№ Cерии</p>
            <p className="table__heading-cell cell">Действия</p>
          </div>
          <div className="table__body">
            {record.series.map((series, index) => (
              <div key={index} className="table__body-records">
                <div className="cells-wrapper">
                  <p className="cell">{series.date}</p>
                  <p className="cell">{series.number}</p>
                  <p className="cell">Действия</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>нет данных</p>
      )}
    </div>
  );

  return (
    <div className="stm-table-wrapper">
      <Table
        dataSource={tableData}
        size="middle"
        columns={CatalogTableColumns}
        rowKey={(record) => record.article}
        expandable={{
          expandedRowRender,
          // @ts-ignore
          expandIcon: renderExpandIcon,
        }}
        rowSelection={rowSelection}
        className="stm-table"
        pagination={false}
      />
    </div>
  )
};
