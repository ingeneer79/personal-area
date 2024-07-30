"use client";
import { Flex, Table } from "antd";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";
import { getCatalogFiltersSelectedValues } from "@/entities/catalog/ui/catalog-filter-with-search/model";
import { WaybillObject } from "../model/types";
import { WaybillActionsControl } from "./waybills-actions-control";
import { getWaybills } from "../api";
import style from 'styled-jsx/style';


export const WayBillsTable = () => {
  const selectedFilterValues = useAppSelector(getCatalogFiltersSelectedValues)
  const [data, setData] = useState<WaybillObject[]>([]);
  const [filteredData, setFilteredData] = useState<WaybillObject[]>([]);

  const CatalogTableColumns = [
    {
      title: "Статус",
      dataIndex: "statusId",
      key: "statusId",
    },
    {
      title: "Номер накладной",
      dataIndex: "waybillNumber",
      key: "waybillNumber",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Дата",
      dataIndex: "sum",
      key: "sum",
    },
    {
      title: "Маркировка",
      dataIndex: "markingId",
      key: "markingId",
    },
    {
      title: "Юр.Лицо",
      dataIndex: "ownerId",
      key: "ownerId",
    },
    {
      title: "Cтатус маркировки",
      dataIndex: "markStatus",
      key: "markStatusId",
    },        
    {
      title: "Действия",
      dataIndex: "actions",
      key: "actions",
      width: 193,    
      render: (_text: string, record: WaybillObject, index: number) => {
        return (
          <WaybillActionsControl buttons={[{
            onClick: () => console.log('test')
          },
          {
            onClick: () => console.log('test')
          },
          {
            onClick: () => console.log('test')
          }]} />
        )
      },    
    },
  
  ];  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getWaybills();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    console.log(data);
  }, []);

  useEffect(() => {
    
    let filteredDataNew = [...data];

    if (selectedFilterValues?.length) {
      filteredDataNew = data.filter((waybill: WaybillObject) => {
        return selectedFilterValues.some((selectedFilterValue) => {          
          const fieldValue = (waybill as any)[selectedFilterValue.id];
          if (fieldValue) {
            if (Array.isArray(selectedFilterValue.values) && selectedFilterValue.values.length) {
              return selectedFilterValue.values.some((item: string) => String(item) === String(fieldValue));  
            }

            if (typeof selectedFilterValue.values == "object" && selectedFilterValue.values) {
              // return fieldValue.getTime() < selectedFilterValue.values.getTime();
              return true;
            }
  
            return true;            
          } 
        })
      });
    }

    setFilteredData(filteredDataNew);
  }, [data,  selectedFilterValues]);

  return <Table dataSource={filteredData} columns={CatalogTableColumns} />;
};
