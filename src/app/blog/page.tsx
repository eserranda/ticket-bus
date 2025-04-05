import Container from '@/components/Container'
import { banner_3 } from '@/images'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        // <p>Halaman Blog</p>
        <div className="relative h-80 w-full bg-dark/90 rounded border-2 overflow-hidden">
            <Image
                src={banner_3}
                fill
                alt="banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             bg-white shadow-lg p-4 rounded-xl 
             hidden md:flex gap-2"
            >

                <input type="text" placeholder="Kota Asal" className="w-40 px-4 py-1 border rounded" />

                <button className="px-2">🔁</button>

                <input type="text" placeholder="Kota Tujuan" className="w-40 x-4 py-2 border rounded" />

                <input type="date" className="w-40 px-4 py-2 border rounded" />

                <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                    Cari Tiket
                </button>

            </div>
        </div>
    )
}

export default page