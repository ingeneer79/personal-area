'use client'
import Flex from '@/shared/ui/flex';
import Button from '@/shared/ui/button';
import Select from '@/shared/ui/select';
import { FC, useState } from "react";
import { FiltersPanelProps } from '../model';
import { TrashButton } from './trash-button';


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
          style={{ minWidth: "var(--space-4xl)", background: "white", borderRadius: "var(--space-xs)" }}
          onClick={() => {
            setSelectedValues({});
            onClearAll?.();
          }}
          icon={<TrashButton />}
        />
      </Flex>    
  );
};
