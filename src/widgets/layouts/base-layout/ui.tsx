"use client"
import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';
export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
   <ConfigProvider theme={{    
      token: {
        colorPrimary: '#0D464A',
      },
      components: {
        Button: {
          borderRadius: 12,
        },      
        Menu: {
          itemSelectedBg: '#E6FFF4',
        }
      }}}>
        {children}
    </ConfigProvider>
    </>
  );
};