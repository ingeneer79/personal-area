import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/app/styles/index.css";
import React, { PropsWithChildren } from "react";
import { ConfigLayout } from '../widgets/layouts/config-layout/ui';
import { StoreProvider } from './providers/store-provider';

const inter = Inter({ subsets: ["cyrillic", "latin", "cyrillic-ext"] });

export const AppRoot = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
        <AntdRegistry>
            <ConfigLayout>
              {children}
            </ConfigLayout>
        </AntdRegistry>                  
        </body>
      </html>
    </StoreProvider>
  );
}
