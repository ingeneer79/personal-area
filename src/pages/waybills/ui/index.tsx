

import { constantsMap } from "@/shared/model";
import { MainLayout } from "@/widgets/layouts";
import Image from "next/image";
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";

import { CheckBoxesPanelFilter } from "@/widgets/filters/check-boxes-panel-filter";
import { CatalogTable } from "@/entities/catalog";
import { getClassifiers } from "@/entities/classifiers/api/data";
import { SessionProviderWrapper } from "@/app/providers/session-provider-wrapper";
import { FiltersPanel } from "@/shared/ui/custom/filters-panel";
import { WaybillsOrderActionsPanel } from "./order-actions-panel";
import { FiltersPanelComponentProperties } from "@/shared/ui/custom/filters-panel/model";
import { getSelectOptions } from "@/entities/classifiers/api";


export async function WaybillsPage() {
  const classifiers = await getClassifiers();

  const catalogFilterSelectOptions: FiltersPanelComponentProperties[] = [
    getSelectOptions(
      "brand",
      constantsMap.pages.catalog.filter.brand,
      classifiers
    ),
    getSelectOptions(
      "type",
      constantsMap.pages.catalog.filter.type,
      classifiers
    ),
    getSelectOptions(
      "category",
      constantsMap.pages.catalog.filter.category,
      classifiers
    ),
  ];  
  return (
    <SessionProviderWrapper>
      <MainLayout>
        {catalogFilterSelectOptions && (
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
            <FiltersPanel filterComponents={catalogFilterSelectOptions} isLoading={false} />
            <WaybillsOrderActionsPanel isLoading={false} />
            <CatalogTable />
          </Flex>
        )}
      </MainLayout>
    </SessionProviderWrapper>
  );
}
export default WaybillsPage;
