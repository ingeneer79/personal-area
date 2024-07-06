import { Table } from "antd";
import { getOrders } from "../api/api";


export const  CatalogTable = async () => {
    const data = await getOrders();      
    return <Table dataSource={data} columns={CatalogTableColumns} />
}

