'use client';
import { Button, Typography } from 'antd';
import { Layout } from 'antd';

import './styles.module.scss';
import { BagButton } from './bagButton';
import Image from 'next/image';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const { Header} = Layout;

export const MainHeader = () => {

  const { data: session, status } = useSession(); 

  useEffect(() => {
    
    if (
      status != "loading" &&
      session &&
      (session as any)?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  return (
    <Header className="header flex items-center justify-end bg-transparent border-b-2" >
      <Button size="large" type="primary" iconPosition='end' icon={<BagButton count={0}/> }>
        Корзина
      </Button>

      <Typography.Text className="ml-3 mr-3 font-medium" >Иван Пупкин</Typography.Text> 
      <Image src='/images/user.svg'  width={48} height={48} alt=''/>

      <Button size="large" type="primary" onClick={() => signIn('keycloak')}>
        Login
      </Button>

    </Header>
  );
};