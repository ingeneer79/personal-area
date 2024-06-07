"use client"
import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';
export const BaseLayout = ({ children }: PropsWithChildren) => {
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
        },  
        Layout: {
          headerHeight: 72,
          headerBg: 'var(--header-bg-color)',
          bodyBg: 'var(--header-bg-color)',
          footerBg: 'var(--header-bg-color)',
        },    
        Menu: {
          itemSelectedBg: 'var(--sidebar-menu-selected-item-color)',
        }
      }}}>
        {children}
    </ConfigProvider>
    </>
  );
};