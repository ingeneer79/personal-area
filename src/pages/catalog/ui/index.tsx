"use client";
import { MainLayout } from "@/widgets/layouts";
import { Flex, Typography } from "antd";
import { constantsMap } from "../../../shared/model/constants";
import Image from "next/image";
import { FilterWithSearch } from "@/features/filters/FilterWithSearch";
import { useGetClassifiersQuery } from "@/entities/classifiers/api";
import "./styles.module.scss";
import { getSelectOptions } from "../lib/utils";

export const CatalogPage = () => {
  const { data: classifiers = [], isLoading } = useGetClassifiersQuery();

  const selectOptions = [
    getSelectOptions("brand", constantsMap.pages.catalog.filter.brand, classifiers),
    getSelectOptions("type", constantsMap.pages.catalog.filter.type, classifiers),
    getSelectOptions("category", constantsMap.pages.catalog.filter.category, classifiers),
  ];

  return (
    <MainLayout>
      <Flex gap="middle" vertical>
        <Typography.Text style={{ fontSize: "32px" }} className="font-medium">
          {constantsMap.pages.catalog.mainText}
        </Typography.Text>
        <Image
          src="/images/banner.jfif"
          width={1600}
          height={203}
          style={{ borderRadius: "36px", height: "203px", width: "100%" }}
          alt=""
        ></Image>
        <FilterWithSearch selectOptions={selectOptions} isLoading={isLoading} />
      </Flex>
    </MainLayout>
  );
};
