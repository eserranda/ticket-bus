'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { ArrowLeft, CalendarIcon } from 'lucide-react'
import MobileHeader from './MobileHeader'
import { useSearchForm } from '../search/useSearchForm'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { DayPicker } from 'react-day-picker'

const HeaderTicketMobile = () => {
    const params = useSearchParams()
    const router = useRouter()

    const origin = params.get('origin')
    const destination = params.get('destination')
    const dateNow = params.get('date')

    const showSearchSummary = origin && destination && dateNow

    const {
        open,
        date,
        setDate,
        setOpen,
        goToToday,
        goToTomorrow,
    } = useSearchForm()


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
                                {format(new Date(dateNow), "EEEE, d MMMM yyyy", { locale: id })}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Tombol untuk memilih tanggal */}
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hoverEffect hover:cursor-pointer">
                                    <CalendarIcon className="w-5 h-5" />
                                    {date ? format(date, "d MMMM yyyy", { locale: id }) : "Pilih Tanggal"}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    footer={
                                        <div className='flex justify-between px-4 py-2'>
                                            <button onClick={goToToday} className='text-sm font-semibold'>Hari ini</button>
                                            <button onClick={goToTomorrow} className='text-sm font-semibold'>Besok</button>
                                        </div>
                                    }
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                </div>
            ) : (
                <MobileHeader />
            )
            }
        </>
    )
}

export default HeaderTicketMobile
