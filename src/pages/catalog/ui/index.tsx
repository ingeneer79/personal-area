import { FilterWithSearch } from "@/widgets/filters/filter-with-search";

import { constantsMap } from "@/shared/model";
import { MainLayout } from "@/widgets/layouts";
import Image from "next/image";
import Flex from "@/shared/ui/Flex";
import TypographyWrapper from "@/shared/ui/Typography";
import { getSelectOptions } from "../lib/utils";
import { getClassifiers } from "@/entities/classifiers/api/data";
import { CheckBoxesPanelFilter } from "@/widgets/filters/check-boxes-panel-filter";
import { CheckBoxesPanelOption } from "@/widgets/filters/check-boxes-panel-filter/model/types";
import { SelectOption } from "@/widgets/filters/filter-with-search/model/types";
import { OrderActionsPanel } from "@/widgets/panels/order-actions";
import { CatalogTable } from "@/entities/order";


export async function CatalogPage() {
  const classifiers = await getClassifiers();

  const selectOptions: SelectOption[] = [
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

  const selectCheckboxesOptions: CheckBoxesPanelOption[] =
    classifiers
      .find(classifier => classifier.id === "productState")
      ?.items.map(item => ({
        key: item.key,
        label: item.value,
        value: item.key,
      })) ?? [];


  return (
    <MainLayout>
      <Flex gap="middle" vertical>
        <TypographyWrapper style={{ fontSize: "32px" }} className="font-medium">
          {constantsMap.pages.catalog.mainText}
        </TypographyWrapper>
        <Image
          src="/images/banner.jfif"
          width={1600}
          height={203}
          style={{ borderRadius: "36px", height: "203px", width: "100%" }}
          alt=""
        ></Image>
        <FilterWithSearch selectOptions={selectOptions} isLoading={false} />
        <CheckBoxesPanelFilter
          selectOptions={selectCheckboxesOptions}
          isLoading={false}
        />
        <OrderActionsPanel isLoading={false} />
        <CatalogTable/>
      </Flex>
    </MainLayout>
  );
}
export default CatalogPage;
