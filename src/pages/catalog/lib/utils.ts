import { ClassifierObject } from "@/entities/classifiers/model";
import { SelectOption } from "@/widgets/filters/filterWithSearch/model/types";
import { constantsMap } from "@/shared/model";

export const getSelectOptions = (name: string, key: string, classifiers: ClassifierObject[]): SelectOption => {
    const list = classifiers.find(cls => cls.id === name);
    return {
        key,
        label: constantsMap.pages.catalog.filter.brand,
        value: '',
        options: list?.items.map((item: { value: any; key: any; }) => ({
          label: item.value,
          value: item.key,
        })) ?? [],
      } 
}

