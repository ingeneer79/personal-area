import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';
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
          fontSize: 16,
          primaryShadow: '0 0 0 rgba(0, 0, 0, 0)',
          controlHeight: 48,          
        },  
        Layout: {
          headerHeight: 72,
          headerBg: 'var(--header-bg-color)',
          bodyBg: 'var(--header-bg-color)',
          footerBg: 'var(--header-bg-color)',
        },    
        Menu: {
          fontSize: 16,
          itemSelectedBg: 'var(--sidebar-menu-selected-item-color)',
        },
        Breadcrumb: {
          fontSize: 15,
          separatorMargin: 10,
        },
        Input: {
          colorBgContainer: 'var(--control-bg-color)',          
          borderRadius: 32,
          colorBorder: 'var(--control-bg-color)',
          colorText: 'var(--control-text-color)',
          fontSize: 16,
        },
        Checkbox: {
          colorBgContainer: 'var(--control-bg-color)',     
          fontSize: 16,
          colorTextLabel: 'var(--control-bg-color)',
          colorText: 'var(--control-filter-text-color)',
        },
        Table: {
          headerBg: '#f5f5f5',
          rowExpandedBg: '#f5f5f5',
          rowHoverBg: '#f2f2f2',
          rowSelectedHoverBg: 'rgba(0,0,0, 0.05)',
          rowSelectedBg: 'rgba(0,0,0, 0.1)',
        }
      }}}>
        {children}
    </ConfigProvider>
    </>
  );
};