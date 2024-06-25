import { apiMap, constantsMap } from "@/shared/model"
import { ClassifierObject } from "../model"

export async function getClassifiers(): Promise<ClassifierObject[]> {
    const res = await fetch(`${constantsMap.shared.config.apiUrl}/${apiMap.getClassifiers}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    return res.json()
  }