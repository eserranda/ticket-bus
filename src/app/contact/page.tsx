import { banner_1, banner_2 } from '@/images'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-3">Halaman contact</h2>

            <div className="flex justify-between">
                <div>Left</div>
                <div>Right</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-200 flex items-center justify-center">1</div>
                <div className="bg-blue-300 flex items-center justify-center">2</div>
                <div className="bg-blue-400 flex items-center justify-center">3</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="col-span-2 bg-red-300 flex items-center justify-center">Lebar 2 kolom</div>
                <div className="bg-red-400">Satu kolom</div>
            </div>

            <div className="mt-3 flex flex-col">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>

            <div className="max-w-sm mx-auto md:mx-0 mt-6 rounded-2xl border shadow-lg overflow-hidden bg-white">
                <Image
                    src={banner_2}
                    alt="Nature"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Judul Card</h2>
                    <p className="text-gray-600 mb-4">
                        Ini adalah deskripsi singkat dari card ini. Tailwind bikin semuanya gampang.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Klik Saya
                    </button>
                </div>
            </div>

            <div className="bg-blue-200 m-4">Box 1</div>

            <div className="bg-green-200 p-4">Box 2</div>

        </div>

    )
}

export default page