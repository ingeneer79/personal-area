import { Button, Typography } from 'antd';
import { Layout } from 'antd';

import './styles.module.scss';
import { BagButton } from './bagButton';
import Image from 'next/image';

const { Header} = Layout;

export const MainHeader = () => {
  return (
    <Header className="header flex items-center justify-end bg-transparent border-b-2" >
      <Button size="large" type="primary" iconPosition='end' icon={<BagButton count={0}/> }>
        Корзина
      </Button>

      <Typography.Text className="ml-3 mr-3 font-medium" >Иван Пупкин</Typography.Text> 
      <Image src='/images/user.svg'  width={48} height={48} alt=''/>

    </Header>
  );
};