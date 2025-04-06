"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { formatInTimeZone } from 'date-fns-tz'

export const useSearchForm = (
    initialOrigin: string = "",
    initialDestination: string = "",
    initialDate: Date = new Date(),
    isVisible?: boolean,
    toggleFormVisibility?: () => void,
) => {
    const [origin, setOrigin] = useState(initialOrigin.toLowerCase());
    const [destination, setDestination] = useState(initialDestination.toLowerCase());
    const [date, setDate] = useState(initialDate);
    const [desktopPopoverOpen, setDesktopPopoverOpen] = useState(false)
    const [mobilePopoverOpen, setMobilePopoverOpen] = useState(false);

    const router = useRouter()
    const timezone = process.env.TIMEZONE || 'Asia/Makassar';

    const handleSwap = () => {
        if (origin && destination && origin !== destination) {
            setOrigin(destination)
            setDestination(origin)
        }
    }

    const goToToday = () => setDate(new Date())
    const goToTomorrow = () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        setDate(tomorrow)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (origin === destination && origin !== "") {
            alert("Kota asal dan tujuan tidak boleh sama")
            return
        }

        if (!origin || !destination || !date) {
            alert("Harap lengkapi semua data pencarian")
            return
        }

        const query = new URLSearchParams({
            origin,
            destination,
            date: formatInTimeZone(date, timezone, 'yyyy-MM-dd'),
        }).toString()

        router.push(`/search?${query}`)

        if (isVisible && toggleFormVisibility) {
            toggleFormVisibility();
        }
    }

    return {
        origin,
        destination,
        date,
        mobilePopoverOpen,
        desktopPopoverOpen,
        setOrigin,
        setDestination,
        setDate,
        setMobilePopoverOpen,
        setDesktopPopoverOpen,
        handleSwap,
        goToToday,
        goToTomorrow,
        handleSubmit,
    }
}
