import { CatalogObject } from "@/entities/catalog/model/types";

export interface OrderObject {  
    id: string;
    date: string;
    catalogObjects: CatalogObject[]
} 