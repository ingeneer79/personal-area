import { apiMap, constantsMap } from "@/shared/model"
import { WaybillObject } from "../model/types"


export async function getWaybills(): Promise<WaybillObject[]> {
  const res = await fetch(`${constantsMap.shared.config.apiUrl}/${apiMap.getWaybills}`)     
  // const res = await fetch(`${constantsMap.shared.config.apiUrl}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    const orders = await res.json();
    return Promise.resolve(orders)

  }