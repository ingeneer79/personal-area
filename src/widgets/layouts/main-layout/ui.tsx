'use client'
import { Flex, Spin } from 'antd';
import { FC, useEffect, type PropsWithChildren } from 'react';
import { MainHeader } from '@/widgets/header';
import { Content } from 'antd/es/layout/layout';
import { SideBar } from '@/widgets/sidebar';
import { BreadCrumbWidget } from '@/widgets/bread-crumbs';
import { signIn, signOut, useSession } from 'next-auth/react';

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

  return  status === "authenticated" && session?.user ? (
    <Flex vertical>
      <MainHeader/>
      <Content>
        <Flex>
          <SideBar/>
          <Content style={{ padding: '0 24px'}}>
            <Flex vertical>
                <BreadCrumbWidget></BreadCrumbWidget>         
                {children}
            </Flex>
          </Content>
        </Flex>
      </Content>
    </Flex>        
  ) : (
    <Flex style={{ width: '100%', height: '100vh' }}>
      <Spin size="large" />
    </Flex>
  );
};