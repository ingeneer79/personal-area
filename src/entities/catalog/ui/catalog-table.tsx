"use client";
import { Table } from "antd";
import { getCatalog } from "../api/api";
import { CatalogObject } from "../model/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";
import { getCatalogFiltersSearchValue, getCatalogFiltersSelectedValues } from "@/widgets/filters/catalog-filter-with-search/model";
import { QuantityControl } from "./quantity-control";
import { FilterSelectedValue } from "@/shared/model/types";



export const CatalogTable = () => {
  const searchFilterValue = useAppSelector(getCatalogFiltersSearchValue)
  const selectedFilterValues = useAppSelector(getCatalogFiltersSelectedValues)
  const [data, setData] = useState<CatalogObject[]>([]);
  const [filteredData, setFilteredData] = useState<CatalogObject[]>([]);

  const CatalogTableColumns = [
    {
      title: "Баркод",
      dataIndex: "barCode",
      key: "barCode",
    },
    {
      title: "Наименование",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Вид",
      dataIndex: "typeName",
      key: "typeName",
    },
    {
      title: "НДС",
      dataIndex: "nds",
      key: "nds",
    },
    {
      title: "Бренд",
      dataIndex: "brandName",
      key: "brandName",
    },
    {
      title: "Кратность",
      dataIndex: "multiplicity",
      key: "multiplicity",
    },
    {
      title: "Категория",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Компоненты",
      dataIndex: "components",
      key: "components",
    },
    {
      title: "Цена с НДС",
      width: 300,
      dataIndex: "priceWithNds",
      key: "priceWithNds",
    },
    {
      title: "ОРЦ",
      dataIndex: "orc",
      key: "orc",
    },
    {
      title: "Сумма",
      dataIndex: "sum",
      key: "sum",
    },
    {
      title: "Кол-во",
      dataIndex: "quantity",
      key: "quantity",
      width: 300,    
      render: (_text: string, record: CatalogObject, index: number) => {
        return <QuantityControl quantity={Number(record.quantity)} onChange={(value) => {
          if (value < 0) {
            return
          }
          setFilteredData(filteredData.map((row, i) =>
            i === index ? {...record, quantity: value} : row
          ))
        }}/>
      },    
    },
  
  ];  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCatalog();
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
