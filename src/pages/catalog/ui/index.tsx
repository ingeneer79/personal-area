'use client'
import { MainLayout } from "@/widgets/layouts";
import { Flex, Typography } from "antd";
import { constantsMap } from '../../../shared/model/constants';
import Image from "next/image";
import './styles.module.scss'
import { FilterWithSearch } from "@/features/filters/FilterWithSearch";
import { useEffect, useMemo } from "react";
import { useAppSelector } from "@/shared/lib";
import { classifiersApi, useGetClassifiersQuery } from "@/entities/classifiers/api";
import { selectClassifierById } from "@/entities/classifiers/model";

export const CatalogPage = () => {

    const brandsListClassifier = useAppSelector(selectClassifierById('brand'));
    const typesListClassifier = useAppSelector(selectClassifierById('types'));
    const categoryListClassifier = useAppSelector(selectClassifierById('category'));

    const selectOptions = useMemo(() => [
      { 
        key: 'brand', 
        label: constantsMap.pages.catalog.filter.brand, 
        value: '',
        options: brandsListClassifier?.items.map((brand) => ({label: brand.value, value: brand.key})) ?? []
      },      
      { 
        key: 'type', 
        value: '',
        label: constantsMap.pages.catalog.filter.type, 
        options: typesListClassifier?.items.map((type) => ({label: type.value, value: type.key})) ?? [] 
      },      
      { 
        key: 'category', 
        value: '',
        label: constantsMap.pages.catalog.filter.category, 
        options: categoryListClassifier?.items.map((category) => ({label: category.value, value: category.key})) ?? []   
      },      
    ], [brandsListClassifier, typesListClassifier, categoryListClassifier]);

    
    useEffect(() => {
      

    }, [])
    
    return (
      <MainLayout>      
        <Flex gap="middle" vertical>
          <Typography.Text style={{fontSize: '32px'}} className="font-medium">{constantsMap.pages.catalog.mainText}</Typography.Text>     
          <Image src="/images/banner.jfif" width={1600} height={203} style={{borderRadius: '36px', height: '203px', width: '100%'}} alt=""></Image>
          <FilterWithSearch selectOptions={selectOptions} onChange={() => {}}/>
        </Flex>                 
      </MainLayout>
    );
  }