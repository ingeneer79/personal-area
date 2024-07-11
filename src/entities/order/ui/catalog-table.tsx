'use client'
import { Table } from "antd";
import { getOrders } from "../api/api";
import { CatalogTableColumns } from "../model/catalog-table";
import { OrderObject } from "../model/types";
import { useEffect, useState } from "react";


export const CatalogTable = () => {
    const [data, setData] = useState<OrderObject[]>([]);
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
    
    return <Table dataSource={data} columns={CatalogTableColumns} />
}

