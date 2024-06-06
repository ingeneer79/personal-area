'use client'

import { MainHeader } from "@/widgets/header/ui";
import { SideBar } from "@/widgets/sidebar/ui";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export const HomePage = () => {
    return (
      <Layout>
      <MainHeader/>
      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Накладные</Breadcrumb.Item>
          <Breadcrumb.Item>Претензии</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
        >
          <SideBar/>
          <Content style={{ padding: '0 24px'}}>Content</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>

      </Footer>
    </Layout>
    );
  };