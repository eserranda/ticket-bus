"use client"
import React, { useEffect, useState } from 'react'
import { Card } from '../ui/card'
import { ArrowUpDown, BusFront, BusIcon, CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css';
import { useSearchForm } from './useSearchForm'
import { id } from 'date-fns/locale'

const cities = [
    "Makassar",
    "Toraja",
    "Palopo",
];

interface SearchFormMobileProps {
    originProps?: string | null;
    destinationProps?: string | null;
    dateProps?: string | null;
}

const SearchFormMobile: React.FC<SearchFormMobileProps> = ({
    originProps,
    destinationProps,
    dateProps,
}) => {
    const {
        origin,
        destination,
        date,
        open,
        setOrigin,
        setDestination,
        setDate,
        setOpen,
        handleSwap,
        handleSubmit,
        goToToday,
        goToTomorrow,
    } = useSearchForm(
        originProps ?? "",
        destinationProps ?? "",
        dateProps ? new Date(dateProps) : new Date()
    )

    useEffect(() => {
        if (originProps) setOrigin(originProps);
        if (destinationProps) setDestination(destinationProps);
        if (dateProps) setDate(new Date(dateProps));
    }, [originProps, destinationProps, dateProps]);

    return (
        <Card className="rounded-sm p-5 w-full max-w-md mx-auto md:hidden">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* FROM */}
                <div>
                    <label className="text-sm font-semibold mb-1 block text-gray-700">Dari</label>
                    <div className="relative flex items-center">
                        {/* <BusIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 -scale-x-100" /> */}
                        <BusFront className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 -scale-x-100" />
                        <Select value={origin} onValueChange={setOrigin}>
                            <SelectTrigger className="w-full pl-7 pr-3 py-2 border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0" >
                                <SelectValue placeholder="Pilih Kota Asal" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Kota asal</SelectLabel>
                                    {cities.map((city) => (
                                        <SelectItem
                                            key={city}
                                            value={city.toLowerCase()}
                                            disabled={city.toLowerCase() === destination}
                                            className="py-3 px-4 text-base"
                                        >
                                            {city}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {/* SWAP */}
                <div className="relative">
                    <hr className="border-t border-gray-300" />
                    <div className="absolute inset-0 flex justify-end -top-5">
                        <Button
                            type="button"
                            onClick={handleSwap}
                            className="rounded-full border bg-darkColor/90 text-white p-5"
                            variant="ghost"
                            size="icon"
                        >
                            <ArrowUpDown className='h-4 w-4' />
                        </Button>
                    </div>
                </div>

                {/* TO */}
                <div>
                    <label className="text-sm font-semibold mb-1 block text-gray-700">Ke</label>
                    <div className="relative flex items-center">
                        <BusFront className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Select value={destination} onValueChange={setDestination}>
                            <SelectTrigger className="w-full pl-7 pr-3 py-2 border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0" >
                                <SelectValue placeholder="Pilih Kota Tujuan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Kota tujuan</SelectLabel>
                                    {cities.map((city) => (
                                        <SelectItem
                                            key={city}
                                            value={city.toLowerCase()}
                                            disabled={city.toLowerCase() === origin}
                                            className="py-3 px-4 text-base"
                                        >
                                            {city}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>
                </div>
                <hr className="border-t border-gray-300" />
                <div>
                    <label className="text-sm font-semibold mb-2 block text-gray-700">Tanggal Pergi</label>
                    <div className="relative">
                        <CalendarIcon className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    className="text-left pl-7 absolute transform top-1/2 -translate-y-1/2 text-sm text-gray-800"
                                >
                                    {date ? format(date, "EEEE, d MMMM yyyy", { locale: id }) : "Pilih tanggal"}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 shadow-none" align="start">
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={(day) => {
                                        setDate(day ?? new Date());
                                        setOpen(false);
                                    }}
                                    disabled={{ before: new Date() }}
                                    modifiersClassNames={{
                                        selected: 'bg-gray-500/90 text-white rounded-full',
                                        today: 'text-green-600 font-bold',
                                    }}
                                    className="p-2"
                                />
                            </PopoverContent>
                        </Popover>
                        <div className="flex justify-end p-2 gap-4 underline text-sm text-blue-600">
                            <button type="button" onClick={goToToday}>Hari ini</button>
                            <button type="button" onClick={goToTomorrow}>Besok</button>
                        </div>

                    </div>
                </div>

                <Button type="submit" className="bg-shop_dark_green text-white w-full">
                    CARI
                </Button>
            </form>
        </Card>
    )
}

export default SearchFormMobile