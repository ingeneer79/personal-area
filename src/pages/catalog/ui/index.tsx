"use client";
import { CatalogFilterWithSearch } from "@/widgets/filters/catalog-filter-with-search";

import { constantsMap } from "@/shared/model";
import { MainLayout } from "@/widgets/layouts";
import Image from "next/image";
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";

import { CheckBoxesPanelFilter } from "@/widgets/filters/check-boxes-panel-filter";
import { CheckBoxesPanelOption } from "@/widgets/filters/check-boxes-panel-filter/model/types";
import { CatalogTable } from "@/entities/catalog";
import { getClassifiers } from "@/entities/classifiers/api/data";
import { getSelectOptions } from "@/entities/classifiers/api";
import { useEffect, useState } from "react";
import { ClassifierObject } from "@/entities/classifiers/model";
import { SessionProviderWrapper } from "@/app/providers/session-provider-wrapper";
import { FiltersPanelComponentProperties } from "@/shared/ui/custom/filters-panel/model";
import { CatalogOrderActionsPanel } from "@/entities/catalog/ui/order-actions-panel";

export function CatalogPage() {
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
    console.log(classifiers);
  }, [classifiers]);

  useEffect(() => {
    if (!classifiers) {
      return;
    }

    //
    const catalogFilterSelectOptions: FiltersPanelComponentProperties[] = [
      getSelectOptions(
        constantsMap.pages.catalog.filter.brand.classifierId,
        constantsMap.pages.catalog.filter.brand.title,
        classifiers
      ),
      getSelectOptions(
        constantsMap.pages.catalog.filter.type.classifierId,
        constantsMap.pages.catalog.filter.type.title,
        classifiers
      ),
      getSelectOptions(
        constantsMap.pages.catalog.filter.category.classifierId,
        constantsMap.pages.catalog.filter.category.title,
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
  }, [classifiers]);

  return (
    <SessionProviderWrapper>
      <MainLayout>
        <Flex gap="middle" vertical>
          <TypographyWrapper
            style={{ fontSize: "32px" }}
            className="font-medium"
          >
            {constantsMap.pages.catalog.mainText}
          </TypographyWrapper>
          <Image
            src="/images/banner.jpeg"
            width={1600}
            height={203}
            style={{ borderRadius: "36px", height: "203px", width: "100%" }}
            alt=""
          ></Image>
          {filterSelectOptions.length > 0 && (
            <CatalogFilterWithSearch filterComponents={filterSelectOptions} />
          )}
          {selectCheckboxesOptions.length > 0 && (
            <CheckBoxesPanelFilter
              selectOptions={selectCheckboxesOptions}
              isLoading={false}
            />
          )}
          <CatalogOrderActionsPanel isLoading={false} />
          <CatalogTable />
        </Flex>
      </MainLayout>
    </SessionProviderWrapper>
  );
}
export default CatalogPage;
