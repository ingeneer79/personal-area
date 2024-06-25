import { FilterWithSearch } from "@/features/filters/FilterWithSearch";
import { SelectOption } from "@/features/filters/FilterWithSearch/model/types";
import { constantsMap } from "@/shared/model";
import { MainLayout } from "@/widgets/layouts";
import Image from "next/image";
import Flex from '@/shared/ui/Flex';
import TypographyWrapper from "@/shared/ui/Typography";
import { getSelectOptions } from "../lib/utils";
import { getClassifiers } from "@/entities/classifiers/api/data";


export async function CatalogPage() {

    const classifiers = await getClassifiers();
    const selectOptions: SelectOption[] = [
      getSelectOptions("brand", constantsMap.pages.catalog.filter.brand, classifiers),
      getSelectOptions("type", constantsMap.pages.catalog.filter.type, classifiers),
      getSelectOptions("category", constantsMap.pages.catalog.filter.category, classifiers),      
    ];


    console.log(selectOptions)
  
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
        </Flex>
      </MainLayout>
    );
  
}