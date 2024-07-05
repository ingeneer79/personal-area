'use client'
import { Flex } from 'antd';
import type { PropsWithChildren } from 'react';
import { MainHeader } from '@/widgets/header';
import { Content } from 'antd/es/layout/layout';
import { SideBar } from '@/widgets/sidebar';
import { BreadCrumbWidget } from '@/widgets/bread-crumbs';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex vertical>
      <MainHeader/>
      <Content>
        <Flex>
          <SideBar/>
          <Content style={{ padding: '0 24px'}}>
            <Flex vertical>
                <BreadCrumbWidget></BreadCrumbWidget>         
                {children}
            </Flex>
          </Content>
        </Flex>
      </Content>
    </Flex>        
  );
};