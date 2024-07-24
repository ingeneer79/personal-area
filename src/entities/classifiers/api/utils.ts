import { constantsMap } from '../../../shared/model/constants';
import { ClassifierObject } from '../model/types';
export const getSelectOptions = (name: string, title: string, classifiers: ClassifierObject[]) => {
    const list = classifiers?.find(cls => cls.id === name);
    return {
        key: name,
        label: title,
        value: '',
        options: list?.items.map((item: { value: any; key: any; }) => ({
          label: item.value,
          value: item.key,
        })) ?? [],
      } 
}