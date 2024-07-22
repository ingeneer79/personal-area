'use client';

import { constantsMap } from "@/shared/model";
import { MainLayout } from "@/widgets/layouts";
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";

import { getClassifiers } from "@/entities/classifiers/api/data";
import { SessionProviderWrapper } from "@/app/providers/session-provider-wrapper";
import { FiltersPanelComponentProperties } from "@/shared/ui/custom/filters-panel/model";
import { getSelectOptions } from "@/entities/classifiers/api";
import { WayBillsTable } from "@/entities/waybills/ui/waybills-table";
import { WaybillsFilter } from "@/widgets/filters";
import { WaybillsOrderActionsPanel } from "@/entities/waybills/ui/order-actions-panel";


export async function WaybillsPage() {
  const classifiers = await getClassifiers();

  const catalogFilterSelectOptions: FiltersPanelComponentProperties[] = [
    {
      key: constantsMap.pages.wayBills.filter.address.id,
      label: constantsMap.pages.wayBills.filter.address.title,
      options:[]
    },
    {
      key: constantsMap.pages.wayBills.filter.waybillNumber.id,
      label: constantsMap.pages.wayBills.filter.waybillNumber.title,
      options:[]
    },
    {
      key: constantsMap.pages.wayBills.filter.period.id,
      label: constantsMap.pages.wayBills.filter.period.title,
      options:[]
    },
    {
      key: constantsMap.pages.wayBills.filter.marking.id,
      label: constantsMap.pages.wayBills.filter.marking.title,
      options:[]
    },
    getSelectOptions(
      constantsMap.pages.wayBills.filter.markingStatus.classifierId,
      constantsMap.pages.wayBills.filter.markingStatus.title,
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
              {constantsMap.pages.wayBills.mainText}
            </TypographyWrapper>

            <WaybillsFilter filterComponents={catalogFilterSelectOptions} isLoading={false} />
            <WaybillsOrderActionsPanel />
            <WayBillsTable/>
          </Flex>
        )}
      </MainLayout>
    </SessionProviderWrapper>
  );
}
export default WaybillsPage;
