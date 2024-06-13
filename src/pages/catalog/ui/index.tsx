'use client'

import { MainLayout } from "@/widgets/layouts";
import { Flex, Typography } from "antd";
import { constantsMap } from '../../../shared/model/constants';
import Image from "next/image";

export const CatalogPage = () => {
    return (
      <MainLayout>      
        <Flex gap="middle" vertical>
          <Typography.Text style={{fontSize: '32px'}} className="font-medium">{constantsMap.pages.catalog.mainText}</Typography.Text>     
          <Image src="../../../public/images/banner.jfif" style={{width: '100%', height: '203px', borderRadius: '36px'}} alt=""></Image>
        </Flex>                 
      </MainLayout>
    );
  }