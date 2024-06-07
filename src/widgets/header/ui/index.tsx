"use client"

import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Layout } from 'antd';

import './styles.module.scss';
import { BagIcon } from './bagIcon';

const { Header} = Layout;

export const MainHeader = () => {
  return (
    <Header className="header flex items-center justify-end bg-transparent" >
      <Button type="primary" iconPosition='end' icon={<BagIcon/>}>Корзина</Button>
    </Header>
  );
};