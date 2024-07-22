import { apiMap, constantsMap } from "@/shared/model"
import { OrderObject } from "../model"


export async function getUserOrders(userId: string): Promise<OrderObject[]> {
  const res = await fetch(`${constantsMap.shared.config.apiUrl}/${apiMap.getCatalog}`)     
  // const res = await fetch(`${constantsMap.shared.config.apiUrl}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    const orders = await res.json();
    return Promise.resolve(orders)

  }