"use client";
import { StmFilterWithSearch } from "@/entities/stm/ui/stm-filter-with-search/ui/index";

import { constantsMap } from "@/shared/model";
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";

import { CheckBoxesPanelOption } from "@/widgets/filters/check-boxes-panel-filter/model/types";
import { getClassifiers } from "@/entities/classifiers/api/data";
import { getSelectOptions } from "@/entities/classifiers/api";
import { useEffect, useState } from "react";
import { ClassifierObject } from "@/entities/classifiers/model";
import { FiltersPanelComponentProperties } from "@/shared/ui/custom/filters-panel/model";
import { StmOrderActionsPanel } from "@/entities/stm/ui/order-actions-panel";
import { StoreProvider } from "@/app/providers/store-provider";
import { StmTable } from "@/entities/stm/ui/stm-table";

export function StmPage() {
  const [classifiers, setClassifiers] = useState<ClassifierObject[]>([]);
  const [filterSelectOptions, setFilterSelectOptions] = useState<
    FiltersPanelComponentProperties[]
  >([]);
  const [selectCheckboxesOptions, setSelectCheckboxesOptions] = useState<
    CheckBoxesPanelOption[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getClassifiers();
        setClassifiers(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    console.log(classifiers);
  }, []);

  useEffect(() => {
    if (!classifiers) {
      return;
    }

    //
    const catalogFilterSelectOptions: FiltersPanelComponentProperties[] = [
      getSelectOptions(
        constantsMap.pages.stm.filter.form.classifierId,
        constantsMap.pages.stm.filter.form.title,
        classifiers
      ),
      getSelectOptions(
        constantsMap.pages.stm.filter.category.classifierId,
        constantsMap.pages.stm.filter.category.title,
        classifiers
      ),
    ];

    setFilterSelectOptions([...catalogFilterSelectOptions]);

    const selectCheckboxesOptions: CheckBoxesPanelOption[] =
      classifiers
        .find(classifier => classifier.id === "productState")
        ?.items.map(item => ({
          key: item.key,
          label: item.value,
          value: item.key,
        })) ?? [];

    setSelectCheckboxesOptions(selectCheckboxesOptions);
    console.log(selectCheckboxesOptions)
  }, [classifiers]);

  return (
    <StoreProvider>
      <Flex gap="middle" vertical>
        <TypographyWrapper style={{ fontSize: "32px" }} className="font-medium">
          {constantsMap.pages.stm.mainText}
        </TypographyWrapper>
        {filterSelectOptions.length > 0 && (
          <StmFilterWithSearch filterComponents={filterSelectOptions} />
        )}
        <StmOrderActionsPanel isLoading={false} />
        <StmTable />
      </Flex>
    </StoreProvider>
  );
}
export default StmPage;


