"use client";
import { MainLayout } from "@/widgets/layouts";
import { Flex, Typography } from "antd";
import { constantsMap } from "../../../shared/model/constants";
import Image from "next/image";
import { FilterWithSearch } from "@/features/filters/FilterWithSearch";
import { useGetClassifiersQuery } from "@/entities/classifiers/api";
import "./styles.module.scss";

export const CatalogPage = () => {
  const { data: classifiers = [], isLoading } = useGetClassifiersQuery();

  const brandsList = classifiers.find(cls => cls.id === "brand");
  const typesList = classifiers.find(cls => cls.id === "type");
  const categoryList = classifiers.find(cls => cls.id === "category");

  const selectOptions = [
    {
      key: "brand",
      label: constantsMap.pages.catalog.filter.brand,
      value: '',
      options: brandsList?.items.map(brand => ({
        label: brand.value,
        value: brand.key,
      })) ?? [],
    },
    {
      key: "type",
      label: constantsMap.pages.catalog.filter.type,
      value: '',
      options: typesList?.items.map(type => ({ label: type.value, value: type.key })) ?? [],
    },
    {
      key: "category",
      label: constantsMap.pages.catalog.filter.category,
      value: '',
      options: categoryList?.items.map(type => ({ label: type.value, value: type.key })) ?? [],
    },
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
