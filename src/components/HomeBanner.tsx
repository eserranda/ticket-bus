"use client"
import React from 'react'
import Image from 'next/image'
import { banner_1 } from '@/images'

const HomeBanner = () => {
    return (
        <div className='hidden md:flex py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 items-center justify-between'>
            <div className='space-y-4'>
                {/* <Title >
                    Grap Upto 50% Off on <br />
                    Your First Order
                </Title>
                <Link href={"/shop"} className='bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md mt-4 hover:bg-shop_dark_green text-sm font-semibold hoverEffect'>
                    Buy Now
                </Link> */}
            </div>
            <Image
                src={banner_1}
                alt="banner"
                className='hidden md:inline-flex w-70 rounded-lg py-5'
            />
        </div>
    )
}

export default HomeBanner