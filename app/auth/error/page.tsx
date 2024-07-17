'use client'
import { constantsMap } from '@/shared/model';
import { Button, Flex } from 'antd';
import { signIn } from 'next-auth/react';

const AuthErrorPage = () => {
    return <Flex>
        <h1>Ошибка авторизации</h1>
        <Button
          size="large"
          className="ml-3 mr-3"
          type="primary"
          onClick={() =>
            signIn("keycloak")
          }
        >
          {constantsMap.widgets.header.login}
        </Button>
    </Flex>
};
    
export default AuthErrorPage