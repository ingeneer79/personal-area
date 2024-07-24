'use client'

import Space from '@/shared/ui/space'
import TypographyWrapper from '@/shared/ui/typography'
import Button from '@/shared/ui/button'
import React from 'react'
import ContactButton from '@/shared/ui/contact-button'

type Props = {
    icon: React.ReactElement,
    contactSign: "Телефон" | "Почта" | "Адрес",
    contact: string
}

const UserContactPlank = ({icon, contactSign, contact}: Props) => {
  return (
    <Space className='p-2' direction="horizontal" size={10}>
      <ContactButton contactType={contactSign} contact={contact} icon={icon} />
      <Space.Compact direction="vertical">
        <TypographyWrapper style={{ fontSize: "12px", color: 'var(--text-color-span)'}}>{contactSign}</TypographyWrapper>
        <TypographyWrapper className='text-base '>{contact}</TypographyWrapper>
      </Space.Compact>
    </Space>
  )
}

export default UserContactPlank