"use client"
import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';
import { Inter } from "next/font/google";
import Search from 'antd/es/input/Search';
export const ConfigLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
   <ConfigProvider theme={{    
      cssVar: true,      
      token: {
        colorPrimary: '#0D464A',
        colorBgContainer: '#ffffff',
      },
      components: {
        Button: {
          borderRadius: 12,
          fontFamily: 'Inter',
          primaryShadow: '0 0 0 rgba(3, 21, 19, 0)',
        },  
        Layout: {
          headerHeight: 72,
          headerBg: 'var(--header-bg-color)',
          bodyBg: 'var(--header-bg-color)',
          footerBg: 'var(--header-bg-color)',
        },    
        Menu: {
          fontFamily: 'Inter',
          fontSize: 16,
          itemSelectedBg: 'var(--sidebar-menu-selected-item-color)',
        },
        Breadcrumb: {
          fontSize: 15,
          separatorMargin: 10,
          fontFamily: 'Inter',
        },
        Input: {
          colorText: 'var(--control-text-color)',
          fontSize: 16,
          colorBgContainer: 'var(--control-bg-color)',          
          borderRadius: 32,
          colorBorder: 'var(--control-bg-color)',
        }
      }}}>
        {children}
    </ConfigProvider>
    </>
  );
};