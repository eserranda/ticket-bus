"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useSearchForm = () => {
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)

    const router = useRouter()

    const handleSwap = () => {
        if (origin && destination && origin !== destination) {
            setOrigin(destination)
            setDestination(origin)
        }
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
            date: date.toISOString().split("T")[0], // Format date to yyyy-mm-dd
        }).toString()

        console.log("query", query)
        // Redirect to search results page
        router.push(`/search?${query}`)
    }

    const goToToday = () => setDate(new Date())
    const goToTomorrow = () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        setDate(tomorrow)
    }

    return {
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
    }
}
