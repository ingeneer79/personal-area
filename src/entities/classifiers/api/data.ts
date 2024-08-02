import { ClassifierObject } from "../model";

export async function getClassifiers(): Promise<ClassifierObject[]> {
  const res = await fetch(`/api/classifiers`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const classifiers = await res.json();
  return Promise.resolve(classifiers);
}
