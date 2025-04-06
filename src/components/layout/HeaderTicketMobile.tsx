'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { ArrowLeft } from 'lucide-react'
import MobileHeader from './MobileHeader'
import { Button } from '../ui/button'

const HeaderTicketMobile = ({ toggleFormVisibility }: {
    toggleFormVisibility: () => void;
}) => {
    const params = useSearchParams()
    const router = useRouter()

    const origin = params.get("origin") ?? "";
    const destination = params.get("destination") ?? "";
    const date = params.get("date") ?? "";


    const showSearchSummary = Boolean(origin && destination && date);

    return (
        <>
            {showSearchSummary ? (
                <div className='flex items-center justify-between w-full md:w-1/3'>
                    <div className="flex items-center gap-4">
                        {/* Tombol kembali */}

                        <button
                            onClick={() => router.push('/')}
                        >
                            <ArrowLeft className="w-6 h-5 text-gray-900 hoverEffect hover:cursor-pointer border-p" />
                        </button>

                        {/* Info rute */}
                        <div className="text-sm">
                            <div className="font-medium capitalize">
                                {origin} → {destination}
                            </div>
                            <div className="text-gray-500 text-xs">
                                {format(new Date(date), "EEEE, d MMMM yyyy", { locale: id })}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Tombol untuk menampilkan modal */}
                        <Button
                            variant="outline"
                            onClick={toggleFormVisibility}
                            className="text-dark rounded"
                        >
                            Ubah
                        </Button>
                    </div>

                </div>
            ) : (
                <MobileHeader />
            )}
        </>
    )
}

export default HeaderTicketMobile
