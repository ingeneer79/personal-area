import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/app/styles/index.css";
import React, { PropsWithChildren } from "react";
import { ConfigLayout } from "../../widgets/layouts/config-layout/ui";
import { StoreProvider } from "./../providers/store-provider";
import { SessionProvider } from "next-auth/react";
import { SessionProviderWrapper } from "./../providers/session-provider-wrapper";
import { MainLayout } from "@/widgets/layouts";

const inter = Inter({ subsets: ["cyrillic", "latin", "cyrillic-ext"] });

export const AppRoot = ({ children }: PropsWithChildren) => {
  return (
    <SessionProviderWrapper>
        <AntdRegistry>
          <ConfigLayout>
            <html lang="en">
              <body className={inter.className}>
                <StoreProvider>
                  <MainLayout>{children}</MainLayout>
                </StoreProvider>                
              </body>
            </html>
          </ConfigLayout>
        </AntdRegistry>
    </SessionProviderWrapper>
  );
};
