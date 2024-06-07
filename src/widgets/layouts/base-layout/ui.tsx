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
        Menu: {
          itemSelectedBg: 'var(--sidebar-menu-selected-item-color)',
        }
      }}}>
        {children}
    </ConfigProvider>
    </>
  );
};