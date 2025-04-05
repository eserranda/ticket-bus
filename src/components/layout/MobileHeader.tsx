'use client'

import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenuMobile from './SideMenuMobile'
import Logo from './Logo'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'

const MobileHeader = () => {
    const [isSiderOpen, setIsSiderOpen] = useState(false)

    const toggleMenu = () => setIsSiderOpen(!isSiderOpen)

    return (
        <>
            {/* Bagian kiri - hanya tombol menu */}
            <button onClick={toggleMenu} >
                <AlignLeft className="w-5 h-5 hover:text-darkColor hoverEffect hover:cursor-pointer" />
            </button>

            {/* Mobile Menu (Side Menu) - posisi fixed saat dibuka */}
            <div className={`md:hidden ${isSiderOpen ? 'fixed inset-0 z-40' : 'hidden'}`}>
                <SideMenuMobile
                    isOpen={isSiderOpen}
                    onClose={() => setIsSiderOpen(false)}
                />
            </div>

            {/* Logo */}
            <div className="flex items-center justify-start pl-2 w-full md:w-1/3">
                <Logo />
            </div>

            {/* Bagian kanan - menu header (cart, favorite, login) */}
            <div className="flex items-center gap-4">
                <CartIcon />
                <FavoriteButton />
                <SignIn />
            </div>
        </>
    )
}

export default MobileHeader
