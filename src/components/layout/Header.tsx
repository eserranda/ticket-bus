import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'
import HeaderTicketMobile from './HeaderTicketMobile'

const Header = async () => {
    return (
        <header className="bg-white/60 py-2 md:py-1 shadow-sm sticky top-0 z-50 backdrop-blur-md">
            {/* Header for Ticket Search Page (mobile only) */}
            <div className="md:hidden">
                <Container className="flex items-center justify-between text-lightColor py-1">
                    <HeaderTicketMobile />
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
    )
}


export default Header