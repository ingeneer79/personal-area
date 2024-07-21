import { constantsMap } from '../../../shared/model/constants';
import { ClassifierObject } from '../model/types';
export const getSelectOptions = (name: string, key: string, classifiers: ClassifierObject[]) => {
    const list = classifiers?.find(cls => cls.id === name);
    return {
        key: name,
        label: constantsMap.pages.catalog.filter.brand,
        value: '',
        options: list?.items.map((item: { value: any; key: any; }) => ({
          label: item.value,
          value: item.key,
        })) ?? [],
      } 
}