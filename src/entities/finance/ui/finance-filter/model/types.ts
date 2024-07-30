import { FiltersPanelComponentProperties, FiltersPanelComponentSelectedValue } from "@/shared/ui/custom/filters-panel/model";

export interface FilterWithSearchProps {
    searchValue?: string;
    isLoading?: boolean;
    onChange?: (selectOption : FiltersPanelComponentSelectedValue) => void;
    onClearAll?: () => void;
  }