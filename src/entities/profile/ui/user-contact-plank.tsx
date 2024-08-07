'use client'

import TypographyWrapper from '@/shared/ui/typography'
import Button from '@/shared/ui/button'
import React from 'react'
import ContactButton from '@/shared/ui/contact-button'
import { Space } from 'antd'

export type UserContactPlankProps = {
    icon: React.ReactNode,
    contactSign: "Телефон" | "Почта" | "Адрес" | undefined,
    contact: string
}

export const UserContactPlank = ({icon, contactSign, contact}: UserContactPlankProps) => {
  return (
    <Space className='p-2' direction="vertical" size={10}>
      <ContactButton contactType={contactSign} contact={contact} icon={icon} />
      <Space.Compact direction="vertical">
        <TypographyWrapper style={{ fontSize: "12px", color: 'var(--text-color-span)'}}>{contactSign}</TypographyWrapper>
        <TypographyWrapper className='text-base '>{contact}</TypographyWrapper>
      </Space.Compact>
    </Space>
  )
}

export default UserContactPlank