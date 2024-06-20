'use client'
import { MainLayout } from "@/widgets/layouts";
import { Flex, Typography } from "antd";
import { constantsMap } from '../../../shared/model/constants';
import Image from "next/image";
import './styles.module.scss'
import { FilterWithSearch } from "@/features/filters/FilterWithSearch";
import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib";
import { classifiersApi, useGetClassifiersQuery } from "@/entities/classifiers/api";
import { selectClassifierById } from "@/entities/classifiers/model";

export const CatalogPage = () => {

    const brandsList = useAppSelector(selectClassifierById('brand'));
    const selectOptions = [
      { 
        key: 'brand', 
        label: 'Бренд', 
        options: brandsList?.map((brand) => ({label: brand.name, value: brand.id})) 
      },      
      { 
        key: 'type', 
        label: 'Тип', 
        options: [] 
      },      
      { 
        key: 'category', 
        label: 'Категория', 
        options: [] 
      },      
    ]

    
    useEffect(() => {
      

    }, [])
    

    return (
      <MainLayout>      
        <Flex gap="middle" vertical>
          <Typography.Text style={{fontSize: '32px'}} className="font-medium">{constantsMap.pages.catalog.mainText}</Typography.Text>     
          <Image src="/images/banner.jfif" width={1600} height={203} style={{borderRadius: '36px', height: '203px', width: '100%'}} alt=""></Image>
          <FilterWithSearch selectOptions={selectOptions}/>
        </Flex>                 
      </MainLayout>
    );
  }