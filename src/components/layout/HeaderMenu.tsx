"use client"
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderMenu = () => {
    const pathname = usePathname()
    return (
        <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-sm font-semibold text-gray-600'>
            {headerData.map((item) => (
                <Link
                    key={item?.title}
                    href={item.href}
                    className=
                    {`
                    hover:text-shop_light_green hoverEffect relative group 
                    ${pathname === item?.href && 'text-shop_light_green'}
                    `}
                >
                    {item?.title}
                    <span
                        className=
                        {`
                            absolute h-[2px] w-full bg-shop_light_green left-0 scale-x-0 group-hover:scale-x-100 duration-300 ease-in-out top-[calc(70%+3px)] 
                             ${pathname === item?.href && 'scale-x-100'}
                        `}
                    />
                </Link>
            ))}
        </div>
    )
}

export default HeaderMenu