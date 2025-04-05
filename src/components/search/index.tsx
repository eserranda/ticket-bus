'use client'

import React from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import SearchFormMobile from './SearchFormMobile'
import SearchFormDesktop from './SearchFormDesktop'

const SearchForm = () => {
    const isMobile = useIsMobile()

    return isMobile ? <SearchFormMobile /> : <SearchFormDesktop />
}

export default SearchForm
