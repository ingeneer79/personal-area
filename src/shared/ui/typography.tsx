'use client';
import { Typography } from 'antd';
import { FC } from 'react';

interface TypographyWrapperProps {
  className?: string
  style?: any
  children: React.ReactNode | string
}

const TypographyWrapper: FC<TypographyWrapperProps> = ({ children, className, style }: TypographyWrapperProps) => (
  <Typography.Text className={className} style={style}>{children}</Typography.Text>
);

export default TypographyWrapper;