'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { da, id } from 'date-fns/locale'
import { ArrowLeft, CalendarIcon } from 'lucide-react'
import MobileHeader from './MobileHeader'
import { useSearchForm } from '../search/useSearchForm'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { DayPicker } from 'react-day-picker'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import SearchFormMobile from '../search/SearchFormMobile'
import TicketSearchForm from '../search/TicketSearchForm'

interface HeaderTicketMobileProps {
    origin?: string | null;
    destination?: string | null;
    date?: string | null;
    toggleFormVisibility: () => void;
}

const HeaderTicketMobile: React.FC<HeaderTicketMobileProps> = ({
    toggleFormVisibility,
    origin,
    destination,
    date,
}) => {
    const params = useSearchParams()
    const router = useRouter()

    const originParam = origin || params.get('origin')
    const destinationParam = destination || params.get('destination')
    const dateParam = date || params.get('date')


    const showSearchSummary =
        !!originParam && !!destinationParam && !!dateParam;

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
                                {originParam} → {destinationParam}
                            </div>
                            <div className="text-gray-500 text-xs">
                                {format(new Date(dateParam), "EEEE, d MMMM yyyy", { locale: id })}
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
                            Ganti
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
