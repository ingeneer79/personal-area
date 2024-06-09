'use client'

import { BreadcrumbWidget } from "@/widgets/Breadcrumbs";
import { MainHeader } from "@/widgets/header/ui";
import { SideBar } from "@/widgets/sidebar/ui";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer } from "antd/es/layout/layout";

export const HomePage = () => {
    return (
      <Layout>
      <MainHeader/>
      <Content>
        <Layout>
          <SideBar/>
          <Content style={{ padding: '0 24px'}}>
          <BreadcrumbWidget></BreadcrumbWidget>         
          </Content>
        </Layout>
      </Content>
    </Layout>
    );
  };