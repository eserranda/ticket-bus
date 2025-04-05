import React, { FC } from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialMedia from '../SocialMedia'
import { useOutsideClick } from '@/hooks'

interface SideBarProps {
    isOpen: boolean
    onClose: () => void
}

const SideMenuMobile: FC<SideBarProps> = ({ isOpen, onClose }) => {
    const pathName = usePathname()
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)

    return (
        <div
            className={`fixed inset-y-0 h-screen w-full left-0 z-50 bg-black/50 text-white/50 shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}  transition-transform duration-300 ease-in-out`}
        >
            <div
                ref={sidebarRef}
                className="min-w-70 max-w-70 bg-white text-black h-screen p-7 border-r-shop_light_green flex flex-col gap-6"
            >
                <div className='items-center flex justify-between'>
                    <Logo />
                    <button onClick={onClose} className="hover:text-shop_light_green hoverEffect">
                        {/* Close button */}
                        <X />
                    </button>
                </div>

                {/* Sidebar menu */}
                <div className='flex flex-col space-y-3.5 tracking-wide'>
                    {headerData?.map((item) => (
                        <Link
                            href={item?.href}
                            key={item?.title}
                            onClick={onClose}
                            className={`hover:text-shop_light_green hoverEffect ${pathName === item?.href && 'text-black font-semibold'}`}
                        >
                            {item?.title}
                        </Link>
                    ))}
                </div>

                <SocialMedia />
            </div>
        </div>
    )
}

export default SideMenuMobile