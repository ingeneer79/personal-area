
import { FilterWithSearch } from "@/widgets/filters/catalog-filter-with-search";

import { constantsMap } from "@/shared/model";
import { MainLayout } from "@/widgets/layouts";
import Image from "next/image";
import Flex from "@/shared/ui/Flex";
import TypographyWrapper from "@/shared/ui/Typography";

import { CheckBoxesPanelFilter } from "@/widgets/filters/check-boxes-panel-filter";
import { CheckBoxesPanelOption } from "@/widgets/filters/check-boxes-panel-filter/model/types";
import { CatalogTable } from "@/entities/catalog";
import { getClassifiers } from "@/entities/classifiers/api/data";
import { getSelectOptions } from "@/entities/classifiers/api";
import { useEffect, useState } from "react";
import { ClassifierObject } from "@/entities/classifiers/model";
import { SessionProviderWrapper } from "@/app/providers/session-provider-wrapper";
import { type FilterSelectOption } from '../../../widgets/filters/catalog-filter-with-search/model/types';
import { useAppSelector } from "@/shared/lib";
import { getCatalogFiltersSelectedValues } from "@/widgets/filters/catalog-filter-with-search/model";
import { OrderActionsPanel } from "@/entities/catalog/ui/order-actions-panel";


export async function WaybillsPage() {
  const classifiers = await getClassifiers();
  return (
    <SessionProviderWrapper>
      <MainLayout>
        {filterSelectOptions && selectCheckboxesOptions && (
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
            <FilterWithSearch selectOptions={filterSelectOptions} isLoading={false} />
            <CheckBoxesPanelFilter
              selectOptions={selectCheckboxesOptions}
              isLoading={false}
            />
            <OrderActionsPanel isLoading={false} />
            <CatalogTable />
          </Flex>
        )}
      </MainLayout>
    </SessionProviderWrapper>
  );
}
export default CatalogPage;
