"use client"
import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';
import { Inter } from "next/font/google";
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
      }}}>
        {children}
    </ConfigProvider>
    </>
  );
};