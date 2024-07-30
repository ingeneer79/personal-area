"use client";
import { Table, TableColumnProps, TableColumnsType } from "antd";
import { getStm } from "../api";
import { CatalogObject } from "../model/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";
import { getCatalogFiltersSearchValue, getCatalogFiltersSelectedValues } from "@/entities/catalog/ui/catalog-filter-with-search/model";
import { FilterSelectedValue } from "@/shared/model/types";



export const StmTable = () => {
  const searchFilterValue = useAppSelector(getCatalogFiltersSearchValue)
  const selectedFilterValues = useAppSelector(getCatalogFiltersSelectedValues)
  const [data, setData] = useState<CatalogObject[]>([]);
  const [filteredData, setFilteredData] = useState<CatalogObject[]>([]);

  const CatalogTableColumns: TableColumnsType = [
    {
      title: "Наименование",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
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
      title: "Кратность",
      dataIndex: "multiplicity",
      key: "multiplicity",
    },
    {
      title: "Выбор кратности",
      dataIndex: "quantity",
      key: "quantity",
    }
  ];  

  
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
    
    let filteredDataNew = data.filter((order: CatalogObject) => {
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
      filteredDataNew = filteredDataNew.filter((order: CatalogObject) => {
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

  return <Table dataSource={filteredData} columns={CatalogTableColumns} />;
};
