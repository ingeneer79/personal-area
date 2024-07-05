'use client'
import { Button, Typography } from 'antd';
import { Layout } from 'antd';

import './styles.module.scss';
import { BagButton } from './bagButton';
import Image from 'next/image';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { constantsMap } from '@/shared/model';

const { Header} = Layout;


function keycloakSessionLogOut(): Promise<Response | null> {
  try {
    return fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
  return Promise.resolve(null)
}

export function MainHeader() {

  const { data: session, status } = useSession(); 

  useEffect(() => {    
   if (status === "unauthenticated") {
        signIn('keycloak')        
    }

    if (
      status != "loading" && status != "authenticated" &&
      session &&
      (session as any)?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }

  }, [session, status]);

  return (
    <Header className="header flex items-center justify-end bg-transparent border-b-2" >
      <Button size="large" type="primary" iconPosition='end' icon={<BagButton count={0}/> }>
        {constantsMap.widgets.header.bag}
      </Button>
      <Typography.Text className="ml-3 mr-3 font-medium" >{session?.user?.name}</Typography.Text> 
      <Image src='/images/user.svg'  width={48} height={48} alt=''/>
      {
        status === "authenticated" && (
          <Button size="large" className='ml-3 mr-3' type="primary" onClick={() =>keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }))}>{constantsMap.widgets.header.logout}</Button>
        )
      }
    </Header>
  );
};