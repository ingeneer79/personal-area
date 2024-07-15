'use client'
import { constantsMap } from '@/shared/model';
import TypographyWrapper from '@/shared/ui/Typography';
import { Button, Card, Flex } from 'antd';
import { signIn } from 'next-auth/react';
const AuthErrorPage = () => {
    return <Flex className='items-center justify-center w-full h-lvh'>
        <Card style={{ width: 300 }} bodyStyle={{ textAlign: 'center' }}>
            <Flex vertical>
                <TypographyWrapper className="text-3xl font-bold pb-3">
                    Ошибка авторизации                
                </TypographyWrapper>
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
        </Card>
    </Flex>
};
    
export default AuthErrorPage