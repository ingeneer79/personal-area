'use client'

import { MainLayout } from "@/widgets/layouts";
import { Button, Flex, Select, SelectProps, Typography } from "antd";
import { constantsMap } from '../../../shared/model/constants';
import Image from "next/image";
import Search from "antd/es/input/Search";
import './styles.module.scss'
import { TrashButton } from "./trashButton";

export const CatalogPage = () => {
  
    const brandOptions: SelectProps['options'] = [
      {
        label: 'Бренд 1',
        value: '1',
      },
      {
        label: 'Бренд 2',
        value: '2',
      }
    ];

    const typeOptions: SelectProps['options'] = [
      {
        label: 'Тип 1',
        value: '1',
      },
      {
        label: 'Тип 2',
        value: '2',
      }
    ];

    const categoryOptions: SelectProps['options'] = [
      {
        label: 'Категория 1',
        value: '1',
      },
      {
        label: 'Категория 2',
        value: '2',
      }
    ];    


    return (
      <MainLayout>      
        <Flex gap="middle" vertical>
          <Typography.Text style={{fontSize: '32px'}} className="font-medium">{constantsMap.pages.catalog.mainText}</Typography.Text>     
          <Image src="/images/banner.jfif" width={1600} height={203} style={{borderRadius: '36px', height: '203px', width: '100%'}} alt=""></Image>
          <Flex gap="middle" className="w-full items-center">
            <Flex gap="middle" className="search w-full" style={{flex: 1}}>
              <Search                  
                    placeholder="Поиск"
                    allowClear
                    size="large"
                    enterButton
                  />   
            </Flex>
            <Flex gap="middle" style={{flex: 1, padding: '12px', borderRadius: '12px', backgroundColor: 'var(--control-bg-color)', minWidth: '300px', maxWidth: '700px'}}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Бренд"
                options={brandOptions}
              />    
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Тип"
                options={typeOptions}
              />    
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Категория"
                options={categoryOptions}
              />    
              <Button
                size="large"
                type="primary"
                style={{minWidth: '48px', background: 'white', borderRadius: '8px'}}
                icon={<TrashButton />}
              />              
            </Flex>                         
          </Flex>
        </Flex>                 
      </MainLayout>
    );
  }