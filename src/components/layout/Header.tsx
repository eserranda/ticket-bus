'use client'
import React, { useState } from 'react'
import Container from '../Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'
import HeaderTicketMobile from './HeaderTicketMobile'
import { useSearchParams } from 'next/navigation'
import SearchForm from '../search/SearchForm'

const Header = () => {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible)
    }

    const params = useSearchParams()

    const origin = params.get("origin") ?? "";
    const destination = params.get("destination") ?? "";
    const date = params.get("date") ?? "";

    return (
        <>
            <header className="bg-white/60 py-2 md:py-1 shadow-sm sticky top-0 z-50 backdrop-blur-md">
                {/* Header for Ticket Search Page (mobile only) */}
                <div className="md:hidden">
                    <Container className="flex items-center justify-between text-lightColor py-1">
                        <HeaderTicketMobile
                            toggleFormVisibility={toggleFormVisibility}
                        />
                    </Container>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:block">
                    <Container className="flex items-center justify-between text-lightColor">
                        <div className="w-auto md:w-1/3 flex items-center gap-2 justify-start md:gap-0">
                            <Logo />
                        </div>

                        {/* Menu on header (desktop) */}
                        <HeaderMenu />

                        {/* Cart, Favorite, and SignIn on the right side */}
                        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
                            <CartIcon />
                            <FavoriteButton />
                            <SignIn />
                        </div>
                    </Container>
                </div>
            </header>

            {isFormVisible && (
                <div
                    className="fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-300 ease-in-out bg-shop_light_bg px-4 rounded-t-lg shadow-lg overflow-y-auto py-6 env(safe-area-inset-bottom)"
                >
                    <SearchForm
                        origin={origin}
                        destination={destination}
                        date={date}
                        isVisible={isFormVisible}
                        toggleFormVisibility={toggleFormVisibility}
                    />
                </div>
            )}
        </>
    )
}


export default Header