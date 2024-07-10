import { apiMap, constantsMap } from "@/shared/model"
import { OrderObject } from "../model/types"


export async function getOrders(): Promise<OrderObject[]> {
  // const res = await fetch(`${constantsMap.shared.config.apiUrl}/${apiMap.getCatalog}`)     
  const res = await fetch(`${constantsMap.shared.config.apiUrl}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    const classifiers = await res.json();
    return Promise.resolve(classifiers.catalog)

  }