"use client"
import React, { useState } from 'react'
import { Card } from './ui/card'
import { ArrowUpDown, BusIcon, CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from './ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { cn } from '@/lib/utils'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css';

const cities = [
    "Makassar",
    "Toraja",
    "Palopo",
    "Bau-Bau",
    "Banjarmasin",
    "Balikpapan",
    "Samarinda",
    "Tarakan",
    "Tanjung Selor",
];

const MobileBanner = () => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    const handleSwap = () => {
        if (origin && destination && origin !== destination) {
            const temp = origin;
            setOrigin(destination);
            setDestination(temp);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validasi apakah asal dan tujuan berbeda
        if (origin === destination && origin !== "") {
            alert("Kota asal dan tujuan tidak boleh sama");
            return;
        }


        console.log("Mencari: ", { origin, destination, date });
    };

    return (
        <Card className="rounded-sm p-5 w-full max-w-md mx-auto md:hidden">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="relative">
                    <BusIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 -scale-x-100" />
                    <Select value={origin} onValueChange={setOrigin}>
                        <SelectTrigger className="w-full pl-10 pr-3 py-2 border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0" >
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
                <div className="relative">
                    <hr className="border-t border-gray-300" />
                    <div className="absolute inset-0 flex justify-end -top-4.5">
                        <Button
                            type="button"
                            onClick={handleSwap}
                            className="rounded-full border bg-darkColor/90 text-white"
                            variant="ghost"
                            size="icon"
                        >
                            <ArrowUpDown className='h-4 w-4' />
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <BusIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Select value={destination} onValueChange={setDestination}>
                        <SelectTrigger className="w-full pl-10 pr-3 py-2 border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0" >
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
                <hr className="border-t border-gray-300" />
                <div className="relative">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0 flex gap-3",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className='h-4 w-4 text-gray-500' />
                                {date ? format(date, "dd LLLL, y") : <span>Pick a date</span>}
                            </Button>
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
                        <button type="button" onClick={() => setDate(new Date())}>Hari ini</button>
                        <button type="button" onClick={() => {
                            const besok = new Date();
                            besok.setDate(besok.getDate() + 1);
                            setDate(besok);
                        }}>Besok</button>
                    </div>

                </div>

                <Button type="submit" className="bg-shop_dark_green text-white w-full">
                    CARI
                </Button>
            </form>
        </Card>
    )
}

export default MobileBanner