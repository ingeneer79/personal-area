import { apiMap, constantsMap } from "@/shared/model"
import { ClassifierObject } from "../model"

export async function getClassifiers(): Promise<ClassifierObject[]> {
  // const res = await fetch(`${constantsMap.shared.config.apiUrl}/${apiMap.getClassifiers}`)     
  const res = await fetch(`${constantsMap.shared.config.apiUrl}`)   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    const classifiers = await res.json();
    return Promise.resolve(classifiers.classifiers)
  }