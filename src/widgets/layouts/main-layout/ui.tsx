"use client"
import { ConfigProvider, Flex, Layout } from 'antd';
import type { PropsWithChildren } from 'react';
import { MainHeader } from '@/widgets/header';
import { Content } from 'antd/es/layout/layout';
import { SideBar } from '@/widgets/sidebar';
import { BreadcrumbWidget } from '@/widgets/Breadcrumbs';
export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <MainHeader/>
      <Content>
        <Layout>
          <SideBar/>
          <Content style={{ padding: '0 24px'}}>
            <Flex vertical>
                <BreadcrumbWidget></BreadcrumbWidget>         
                {children}
            </Flex>
          </Content>
        </Layout>
      </Content>
    </Layout>        
  );
};