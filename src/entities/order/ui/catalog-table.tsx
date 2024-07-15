"use client";
import { Table } from "antd";
import { getOrders } from "../api/api";
import { CatalogTableColumns } from "../model/catalog-table";
import { OrderObject } from "../model/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";
import { getCatalogFiltersSearchValue, getCatalogFiltersSelectedValues } from "@/widgets/filters/catalog-filter-with-search/model";

export const CatalogTable = () => {
  const searchFilterValue = useAppSelector(getCatalogFiltersSearchValue)
  const selectedFilterValues = useAppSelector(getCatalogFiltersSelectedValues)
  const [data, setData] = useState<OrderObject[]>([]);
  const [filteredData, setFilteredData] = useState<OrderObject[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getOrders();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    console.log(data);
  }, []);

  useEffect(() => {
    let filteredDataNew = data.filter((order: OrderObject) => {
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
      filteredDataNew = filteredDataNew.filter((order: OrderObject) => {
        return selectedFilterValues.filter((selectedFilterValue) => {
          const fieldValue = (order as any)[selectedFilterValue.id];
          if (fieldValue) {
            return selectedFilterValue.items.includes(fieldValue)
          } 
        })
      });
    }

    setFilteredData(filteredDataNew);
  }, [searchFilterValue, data, selectedFilterValues]);

  return <Table dataSource={filteredData} columns={CatalogTableColumns} />;
};
