import { apiMap, constantsMap } from "@/shared/model"
import { OrderObject } from "../model/types"


export async function getOrders(): Promise<OrderObject[]> {
    const res = await fetch(`${constantsMap.shared.config.apiUrl}/${apiMap.getCatalog}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    return res.json()
  }