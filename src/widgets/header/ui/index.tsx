"use client"

import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Layout } from 'antd';

import './styles.module.scss';
import { BagButton } from './bagButton';

const { Header} = Layout;

export const MainHeader = () => {
  return (
    <Header className="header flex items-center justify-end bg-transparent border-b-2" >
      <Button size="large" type="primary" iconPosition='end'  icon={<BagButton count={0}/> }>
        Корзина
      </Button>
    </Header>
  );
};