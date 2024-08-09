'use client'

import './custom-search.css'
import { Button, Flex } from 'antd'
import React from 'react'
import { IconSearch } from '../../icons/icon-search'

type Props = {
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    onSearchButtonClick?: () => void
    className?: string
}

const CustomSearch = ({placeholder, onChange, value, onSearchButtonClick, className}: Props) => {
  return (
    <Flex className={`custom-search ${className}`}>
        <input className='custom-search__input' placeholder={placeholder} onChange={onChange} value={value}/>
        <button className='custom-search__button' onClick={onSearchButtonClick}><IconSearch/></button>
    </Flex>
  )
}

export default CustomSearch