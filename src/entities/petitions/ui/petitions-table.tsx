"use client";
import "../../stm/ui/stm-table.css";
import { Table } from "antd";
import { getPetitions } from "../api/api";
import { PetitionObject } from "../model/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";

import { FilterSelectedValue } from "@/shared/model/types";
import {
  getPetitionsFiltersSearchValue,
  getPetitionsFiltersSelectedValues,
} from "./petitions-filter-with-search/model";

export const PetitionsTable = () => {
  const searchFilterValue = useAppSelector(getPetitionsFiltersSearchValue);
  const selectedFilterValues = useAppSelector(
    getPetitionsFiltersSelectedValues
  );
  const [data, setData] = useState<PetitionObject[]>([]);
  const [filteredData, setFilteredData] = useState<PetitionObject[]>([]);

  const PetitionsTableColumns = [
    {
      title: "Номер претензии",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Дата создания",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "№ Накладной",
      dataIndex: "waybillNumber",
      key: "waybillNumber",
    },
    {
      title: "Тип",
      dataIndex: "typeName",
      key: "typeName",
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Статус",
      dataIndex: "statusName",
      key: "statusName",
    },
    {
      title: "Акт",
      dataIndex: "actPath",
      key: "actPath",
      render: (_text: string, record: PetitionObject, index: number) => {
        return <></>;
      },
    },
    {
      title: "Действия",
      dataIndex: "actions",
      key: "actions",
      width: 300,
      render: (_text: string, record: PetitionObject, index: number) => {
        return <></>;
      },
    },
  ];
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPetitions();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    console.log(data);
  }, []);

  useEffect(() => {
    let filteredDataNew = data.filter((order: PetitionObject) => {
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
      filteredDataNew = filteredDataNew.filter((order: PetitionObject) => {
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

  return (
    <div className="stm-table-wrapper">
      <Table
        dataSource={filteredData}
        columns={PetitionsTableColumns}
        className="stm-table"
        size="middle"
        pagination={false}
      />
    </div>
  );
};
