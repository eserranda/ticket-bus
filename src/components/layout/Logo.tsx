import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center", className)}>
            {/* Logo untuk Desktop - tampil di md (768px) ke atas, tersembunyi di bawahnya */}
            <div className="hidden md:block">
                <Link href={"/"} className='inlene-flex'>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>
            </div>
            {/* Mini Logo untuk Mobile - tampil di bawah md (768px), tersembunyi di atasnya */}

            <div className="block md:hidden">
                <Link href="/" >
                    <Image
                        // src="/mini-logo.svg"
                        // width={30}
                        // height={30}
                        src="/logo.svg"
                        width={120}
                        height={40}
                        alt="Logo"
                        priority
                    />
                </Link>
            </div>
        </div >
    )
}

export default Logo