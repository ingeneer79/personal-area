'use client'

import { BreadcrumbWidget } from "@/widgets/Breadcrumbs";
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
                <BreadcrumbWidget></BreadcrumbWidget>         
            </Flex>
          </Content>
        </Layout>
      </Content>
    </Layout>
    );
  };