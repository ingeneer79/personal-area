"use client";
import { constantsMap } from "@/shared/model";
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";

import { CheckBoxesPanelOption } from "@/widgets/filters/check-boxes-panel-filter/model/types";
import { getClassifiers } from "@/entities/classifiers/api/data";
import { getSelectOptions } from "@/entities/classifiers/api";
import { useEffect, useState } from "react";
import { ClassifierObject } from "@/entities/classifiers/model";
import { FiltersPanelComponentProperties } from "@/shared/ui/custom/filters-panel/model";
import { BreadCrumbWidget } from "@/widgets/bread-crumbs";
import Search from "@/shared/ui/search";
import { CertificatesOrderActionsPanel } from "@/entities/certificates/ui/order-actions-panel";
import { CertificatesTable } from "@/entities/certificates/ui/certificates-table";

export function CertificatesPage() {
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

  function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Flex gap="middle" vertical>
        <BreadCrumbWidget items={constantsMap.pages.certificates.breadCrumbs}></BreadCrumbWidget>                 
        <TypographyWrapper style={{ fontSize: "var(--size-text-3xl)" }} className="font-medium">
          {constantsMap.pages.certificates.mainText}
        </TypographyWrapper>
        {filterSelectOptions.length > 0 && (
          <Search
          placeholder="Поиск"
          allowClear
          size="large"
          enterButton
          onChange={value => {
            // dispatch(setFinanceFiltersSearchValue(value.target.value));
          }}
        />
        )}
        <CertificatesOrderActionsPanel isLoading={false} />
        <CertificatesTable />
      </Flex>
    </>
  );
}
export default CertificatesPage;


