"use client";
import { Table } from "antd";
import { getStm } from "../api/api";
import { StmObject } from "../model/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";
import { getCatalogFiltersSearchValue, getCatalogFiltersSelectedValues } from "@/entities/catalog/ui/catalog-filter-with-search/model";
import { FilterSelectedValue } from "@/shared/model/types";
import mockTableData from "../model/mockTableData";



export const StmTable = () => {
  const searchFilterValue = useAppSelector(getCatalogFiltersSearchValue)
  const selectedFilterValues = useAppSelector(getCatalogFiltersSelectedValues)
  const [data, setData] = useState<StmObject[]>([]);
  const [filteredData, setFilteredData] = useState<StmObject[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>([]);

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
    }
  ];
  
  const expandedRowRender = (record: StmObject) => {
    return (
      <div>
        <p>№ СГР: {record.registrationNumber || "Нет данных"}</p>
        <p>Год СГР: {record.registrationYear || "Нет данных"}</p>
        <p>Наименование по СГР: {record.registrationName || "Нет данных"}</p>
        <p>Информация о техническом регламенте: {record.technicalRegulationInfo || "Нет данных"}</p>
        <p>Активные вещества: {record.activeIngredients || "Нет данных"}</p>
        <p>Полный состав: {record.fullComposition || "Нет данных"}</p>
        <p>Область применения: {record.applicationArea || "Нет данных"}</p>
        <p>Маркетинговая информация: {record.marketingInfo || "Нет данных"}</p>
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
    console.log(data);
  }, []);

  useEffect(() => {
    
    let filteredDataNew = data.filter((order: StmObject) => {
      let filterBySearchResult = null
      if (searchFilterValue) {
        Object.entries(order).forEach(([_key, value]) => {
          if (String(value).includes(searchFilterValue)) {
            filterBySearchResult = order;
          }          
        })        
      } else {
        filterBySearchResult = order
      }
      return filterBySearchResult
    })

    if (selectedFilterValues?.length) {
      filteredDataNew = filteredDataNew.filter((order: StmObject) => {
        return selectedFilterValues.some((selectedFilterValue: FilterSelectedValue) => {
          if ((selectedFilterValue.values as string[]).length === 0) { 
            return true 
          }
          const fieldValue = (order as any)[selectedFilterValue.id];
          if (fieldValue) {
            return (selectedFilterValue.values as string[]).some((item: string) => String(item) === String(fieldValue));
          } 
        })
      });
    }

    setFilteredData(filteredDataNew);
  }, [data, searchFilterValue, selectedFilterValues]);

  return <Table dataSource={mockTableData} columns={CatalogTableColumns} rowKey={(record) => record.key} expandable={{expandedRowRender}} rowSelection={rowSelection}/>;
};
