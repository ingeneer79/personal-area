'use client'
import { Spin } from 'antd';
import { FC, useEffect, type PropsWithChildren } from 'react';
import { MainHeader } from '@/widgets/header';
import { Content } from 'antd/es/layout/layout';
import { SideBar } from '@/widgets/sidebar';
import { BreadCrumbWidget } from '@/widgets/bread-crumbs';
import { signIn, signOut, useSession } from 'next-auth/react';
import Flex from '@/shared/ui/flex';

interface MainLayoutProps {
  children: React.ReactNode
  sessionData?: any
}

export const MainLayout: FC<MainLayoutProps> = ({ children }: PropsWithChildren) => {
  const { data: session, status } = useSession();   

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("keycloak");
      return;
    }
    if (
      status != "loading" &&
      status != "authenticated" &&
      session &&
      (session as any)?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  return status === "authenticated" && session?.user ? (
    <Flex vertical>
      <MainHeader/>
      <Content>
        <Flex>
          <SideBar/>
          <Content style={{ padding: '0 24px', maxHeight: '100vh', overflow: 'auto'}}>
            <Flex vertical>
                {children}
            </Flex>
          </Content>
        </Flex>
      </Content>
    </Flex>        
  ) : (
    <Flex className="items-center justify-center w-full h-lvh">
      <Spin size="large" />
    </Flex>
  );
};