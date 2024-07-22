import { FiltersPanelComponentProperties, FiltersPanelComponentSelectedValue } from "@/shared/ui/custom/filters-panel/model";

export interface FilterWithSearchProps {
    searchValue?: string;
    filterComponents: FiltersPanelComponentProperties[];
    isLoading?: boolean;
    onChange?: (selectOption : FiltersPanelComponentSelectedValue) => void;
    onClearAll?: () => void;
  }