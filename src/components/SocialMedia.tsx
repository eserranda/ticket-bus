import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { title } from 'process'

interface Props {
    className?: string
    iconClassName?: string
    tooltipClassName?: string
}

const socialLinks = [
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/eliazher.randa123/',
        icon: <Facebook className='w-5 h-5' />,
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/aserranda/',
        icon: <Instagram className='w-5 h-5' />,
    },
    {
        title: 'Youtube',
        href: 'https://www.youtube.com/',
        icon: <Youtube className='w-5 h-5' />,
    },
    {
        title: 'Twitter',
        href: 'https://twitter.com/',
        icon: <Twitter className='w-5 h-5' />,
    }
]
const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5", className)}>
                {socialLinks?.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger asChild>
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                href={item.href}
                                className={cn("p-2 border rounded-md hover:text-black/70 hover:border-shop_light_green hoverEffect", iconClassName)}
                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn("text-sm font-medium text-center", tooltipClassName)}>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                )
                )}
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia