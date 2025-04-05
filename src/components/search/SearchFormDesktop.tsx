import Link from "next/link";
import { Title } from "../ui/text";
import Image from "next/image";
import { banner_1, banner_3 } from "@/images";
import { Button } from "../ui/button";
import { ArrowRightLeft, ArrowUpDown, BusFront, CalendarIcon, RefreshCcw } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useSearchForm } from "./useSearchForm";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

const cities = [
    "Makassar",
    "Toraja",
    "Palopo",
];

const SearchFormDesktop = () => {
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
    } = useSearchForm()
    return (
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
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className="text-left w-50 pl-7 py-1 border-0 rounded text-sm text-gray-800"
                                    >
                                        {date
                                            ? format(date, "EEEE, d MMMM yyyy", { locale: id })
                                            : "Pilih tanggal"}
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
                            CARI
                        </Button>
                    </div>
                </form>
            </div>
        </div >
        // <div className='hidden md:flex py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 items-center justify-between'>
        //     <div className='space-y-4'>
        //         <Title >
        //             Grap Upto 50% Off on <br />
        //             Your First Order
        //         </Title>
        //         <Link href={"/shop"} className='bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md mt-4 hover:bg-shop_dark_green text-sm font-semibold hoverEffect'>
        //             Buy Now
        //         </Link>
        //     </div>
        //     <Image
        //         src={banner_1}
        //         alt="banner"
        //         className='hidden md:inline-flex w-70 rounded-lg py-5'
        //     />
        // </div>
    )
}

export default SearchFormDesktop;