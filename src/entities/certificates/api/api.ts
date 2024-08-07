import { apiMap, constantsMap } from "@/shared/model"
import { StmObject } from "../model/types"


export async function getStm(): Promise<StmObject[]> {
  const res = await fetch(`${constantsMap.shared.config.apiUrl}/${apiMap.getStm}`)     
  // const res = await fetch(`${constantsMap.shared.config.apiUrl}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    const orders = await res.json();
    return Promise.resolve(orders)

  }