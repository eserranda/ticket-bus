"use client"
import { useEffect } from "react";
import { Card } from "../ui/card";
import { ArrowRightLeft, ArrowUpDown, BusFront, CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { formatInTimeZone } from "date-fns-tz";
import { DayPicker } from "react-day-picker";
import { id } from "date-fns/locale";
import Image from "next/image";
import { banner_3 } from "@/images";
import 'react-day-picker/dist/style.css';
import { useSearchForm } from "./useSearchForm";

const cities = ["Makassar", "Toraja", "Palopo"]

interface SearchFormMobileProps {
    origin?: string | null;
    destination?: string | null;
    date?: string | null;
    isVisible?: boolean;
    toggleFormVisibility?: () => void;
}

const SearchForm = ({
    origin: originProp,
    destination: destinationProp,
    date: dateProp,
    isVisible,
    toggleFormVisibility,
}: SearchFormMobileProps) => {
    const {
        origin,
        destination,
        date,
        desktopPopoverOpen,
        mobilePopoverOpen,
        setOrigin,
        setDestination,
        setDate,
        setMobilePopoverOpen,
        setDesktopPopoverOpen,
        handleSwap,
        handleSubmit,
        goToToday,
        goToTomorrow,
    } = useSearchForm(
        originProp || "",
        destinationProp || "",
        dateProp ? new Date(dateProp) : undefined,
        isVisible,
        toggleFormVisibility
    )

    const timezone = process.env.TIMEZONE || 'Asia/Makassar';

    useEffect(() => {
        if (originProp) setOrigin(originProp.toLowerCase())
        if (destinationProp) setDestination(destinationProp.toLowerCase())
        if (dateProp) setDate(new Date(dateProp))
    }, [originProp, destinationProp, dateProp, setOrigin, setDestination, setDate])

    return (
        <>
            {/* Mobile layout */}
            <div className="block md:hidden">
                <Card className="rounded-sm p-5 w-full max-w-md mx-auto md:hidden">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {/* FROM */}
                        <div>
                            <label className="text-sm font-semibold mb-1 block text-gray-700">Dari</label>
                            <div className="relative flex items-center">
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
                            <label className="text-sm font-semibold mb-2 block text-gray-700">Tanggal</label>
                            <div className="relative">
                                <CalendarIcon className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                {/* <Popover open={open} onOpenChange={setOpen}> */}
                                <Popover open={mobilePopoverOpen} onOpenChange={setMobilePopoverOpen}>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            className="text-left pl-7 absolute transform top-1/2 -translate-y-1/2 text-sm text-gray-800"
                                        >
                                            {date
                                                ? formatInTimeZone(date, timezone, "EEEE, d MMMM yyyy", { locale: id })
                                                : "Pilih tanggal"}
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 shadow-none" align="start">
                                        <DayPicker
                                            mode="single"
                                            selected={date}
                                            onSelect={(day) => {
                                                setDate(day ?? new Date());
                                                setMobilePopoverOpen(false);
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
                            Cari Tiket
                        </Button>
                    </form>
                </Card>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block">
                <div className="relative h-90 w-full bg-white rounded overflow-hidden">
                    <Image
                        src={banner_3}
                        fill
                        alt="banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white shadow-lg p-4 rounded-md flex justify-center">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-row items-center gap-2"
                        >
                            {/* FROM */}
                            <div>
                                <label className="text-sm font-semibold mb-1 block text-gray-700">Dari</label>

                                <div className="relative flex items-center">
                                    <BusFront className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 -scale-x-100" />
                                    <Select value={origin} onValueChange={setOrigin}>
                                        <SelectTrigger className="w-50 pl-7 pr-3 py-2 border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0" >
                                            <SelectValue placeholder="Kota Asal" />
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

                            <div className="mx-5">
                                <Button
                                    type="button"
                                    onClick={handleSwap}
                                    className="rounded-full border bg-darkColor/90 text-white p-2"
                                    variant="ghost"
                                    size="icon"
                                >
                                    <ArrowRightLeft className="h-4 w-4" />
                                </Button>
                            </div>

                            <div>
                                <label className="text-sm font-semibold mb-1 block text-gray-700">Ke</label>
                                <div className="relative flex items-center">
                                    <BusFront className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Select value={destination} onValueChange={setDestination}>
                                        <SelectTrigger className="w-50 pl-7 pr-3 py-2 border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0" >
                                            <SelectValue placeholder="Kota Tujuan" />
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

                            {/* Tanggal Pergi */}
                            <div>
                                <label className="text-sm font-semibold mb-2 block text-gray-700">Tanggal</label>
                                <div className="relative">
                                    <CalendarIcon className="absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Popover open={desktopPopoverOpen} onOpenChange={setDesktopPopoverOpen}>
                                        <PopoverTrigger asChild>
                                            <button
                                                type="button"
                                                className="text-left w-50 pl-7 py-1 border-0 rounded text-sm text-gray-800"
                                            >
                                                {date
                                                    ? formatInTimeZone(date, timezone, "EEEE, d MMMM yyyy", { locale: id })
                                                    : "Pilih tanggal"}
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 shadow-none" align="start">
                                            <DayPicker
                                                mode="single"
                                                selected={date}
                                                onSelect={(day) => {
                                                    setDate(day ?? new Date());
                                                    setDesktopPopoverOpen(false);
                                                }}
                                                disabled={{ before: new Date() }}
                                                footer={
                                                    <div className='flex justify-between px-4 py-2'>
                                                        <button onClick={goToToday} className='text-sm font-semibold'>Hari ini</button>
                                                        <button onClick={goToTomorrow} className='text-sm font-semibold'>Besok</button>
                                                    </div>
                                                }
                                                modifiersClassNames={{
                                                    selected: "bg-gray-500/90 text-white rounded-full",
                                                    today: "text-green-600 font-bold",
                                                }}
                                                className="p-2"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            <div className="ml-5">
                                <Button
                                    type="submit"
                                    className="bg-shop_dark_green px-6 text-white rounded"
                                >
                                    Cari Tiket
                                </Button>
                            </div>
                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}

export default SearchForm