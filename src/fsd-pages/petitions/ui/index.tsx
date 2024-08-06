"use client";

import { constantsMap } from "@/shared/model";
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";

import { getClassifiers } from "@/entities/classifiers/api/data";
import { getSelectOptions } from "@/entities/classifiers/api";
import { useEffect, useState } from "react";
import { ClassifierObject } from "@/entities/classifiers/model";
import { FiltersPanelComponentProperties } from "@/shared/ui/custom/filters-panel/model";
import { BreadCrumbWidget } from "@/widgets/bread-crumbs";
import { PetitionsActionsPanel, PetitionsTable } from "@/entities/petitions";
import { PetitionsFilterWithSearch } from "@/entities/petitions/ui/petitions-filter-with-search";

export function PetitionsPage() {
  const [classifiers, setClassifiers] = useState<ClassifierObject[]>([]);
  const [filterSelectOptions, setFilterSelectOptions] = useState<
    FiltersPanelComponentProperties[]
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
    const filterSelectOptions: FiltersPanelComponentProperties[] = [
      {
        key:constantsMap.pages.petitions.filter.period.id,
        label:constantsMap.pages.petitions.filter.period.title,
        type: 'date',
        options: [],
      },
      getSelectOptions(
        constantsMap.pages.petitions.filter.status.classifierId,
        constantsMap.pages.petitions.filter.status.title,
        classifiers
      ),
      getSelectOptions(
        constantsMap.pages.petitions.filter.deliveryAddress.classifierId,
        constantsMap.pages.petitions.filter.deliveryAddress.title,
        classifiers
      ),      
    ];

    setFilterSelectOptions([...filterSelectOptions]);
    
  }, [classifiers]);

  return (
    <>
      <Flex gap="middle" vertical>
        <BreadCrumbWidget items={constantsMap.pages.petitions.breadCrumbs}></BreadCrumbWidget>            
        <TypographyWrapper style={{ fontSize: "var(--size-text-3xl)" }} className="font-medium">
          {constantsMap.pages.petitions.mainText}
        </TypographyWrapper>
        {filterSelectOptions.length > 0 && (
          <PetitionsFilterWithSearch filterComponents={filterSelectOptions} />
        )}
        <PetitionsActionsPanel isLoading={false} />
        <PetitionsTable />
      </Flex>
    </>
  );
}
export default PetitionsPage;
