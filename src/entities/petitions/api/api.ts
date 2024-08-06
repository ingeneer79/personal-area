import { apiMap, constantsMap } from "@/shared/model"
import { PetitionObject } from "../model/types"


export async function getPetitions(): Promise<PetitionObject[]> {
  const res = await fetch(`/api/${apiMap.getPetitions}`)     
  // const res = await fetch(`${constantsMap.shared.config.apiUrl}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    const orders = await res.json();
    return Promise.resolve(orders)

  }