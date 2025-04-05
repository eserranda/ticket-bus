'use client'

import { useSearchParams } from 'next/navigation'
import TicketList from '@/components/ticket/TicketList'
import Container from '@/components/Container'

export default function TicketListPage() {
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin') || ''
    const destination = searchParams.get('destination') || ''
    const date = searchParams.get('date') || ''

    return (
        <TicketList origin={origin} destination={destination} date={date} />
    )
}
