'use client'

import Space from '@/shared/ui/space'
import TypographyWrapper from '@/shared/ui/typography'
import Button from '@/shared/ui/button'
import React from 'react'
import ContactButton from '@/shared/ui/contact-button'
import { getUser } from '@/entities/user/model/selectors'
import { useAppSelector } from '@/shared/lib'
import { getProfileIcon } from '@/shared/lib/utils'
import { profileIcons } from '@/shared/model/icons'
import { translateType } from '../model'


export const UserContactsPlank = () => {
  const { userData } = useAppSelector(getUser)
  return (
    userData?.attributes?.map((attribute, key) => (
    <Space key={key} className='p-2' direction="horizontal" size={10}>
      <ContactButton contactType={translateType(attribute.type)} contact={attribute.values[0].value ?? ''} icon={getProfileIcon(attribute.type as keyof typeof profileIcons)} />
      <Space.Compact direction="vertical">
        <TypographyWrapper style={{ fontSize: "12px", color: 'var(--text-color-span)'}}>{translateType(attribute.type)}</TypographyWrapper>
        <TypographyWrapper className='text-base '>{attribute.values[0].value}</TypographyWrapper>
      </Space.Compact>
    </Space>
    ))
  )
}

export default UserContactsPlank