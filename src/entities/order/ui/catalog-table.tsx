import { Table } from "antd";
import { getOrders } from "../api/api";
import { CatalogTableColumns } from "../model/catalog-table";


export const  CatalogTable = async () => {
    const data = await getOrders();      
    return <Table dataSource={data} columns={CatalogTableColumns} />
}

