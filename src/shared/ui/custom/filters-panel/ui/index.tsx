'use client'
import Flex from '@/shared/ui/Flex';
import Button from '@/shared/ui/Button';
import Select from '@/shared/ui/Select';
import { FC, useState } from "react";
import { FiltersPanelProps } from '../model';
import { TrashButton } from './trashButton';


export const FiltersPanel: FC<FiltersPanelProps> = ({
  isLoading,
  filterComponents,
  onChange,
  onClearAll
}) => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string[] | Date>>({});
  return (
    
      <Flex
        gap="middle"
        className="w-full items-center"
      >
        {
          filterComponents?.map((filterComponent) => (            
            <Select
              key={filterComponent.key}
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder={filterComponent.label}
              options={filterComponent.options}
              value={selectedValues[filterComponent.key] ?? []}
              loading={isLoading}
              onChange={(value) => {  
                selectedValues[filterComponent.key] = value
                setSelectedValues({...selectedValues});                  
                onChange?.({id: filterComponent.key, values: filterComponent.options.filter(item => (value as string[]).includes(item.value)).map(item => item.value)});
              }}
            />
          ))
        }
        <Button
          size="large"
          type="primary"
          style={{ minWidth: "48px", background: "white", borderRadius: "8px" }}
          onClick={() => {
            setSelectedValues({});
            onClearAll?.();
          }}
          icon={<TrashButton />}
        />
      </Flex>    
  );
};
