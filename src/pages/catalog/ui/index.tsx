'use client'

import { MainHeader } from "@/widgets/header/ui";
import { SideBar } from "@/widgets/sidebar/ui";
import { Breadcrumb, Flex, Layout, Menu } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export const CatalogPage = () => {
    return (
      <Layout>
      <MainHeader/>
      <Content>
        <Layout>
          <SideBar/>
          <Content style={{ padding: '0 24px'}}>
            <Flex vertical>
                <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
                <Breadcrumb.Item>Накладные</Breadcrumb.Item>
                <Breadcrumb.Item>Претензии</Breadcrumb.Item>
                </Breadcrumb>

                Каталог
            </Flex>
          </Content>
        </Layout>
      </Content>
    </Layout>
    );
  };