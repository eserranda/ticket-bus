'use client'

import TicketCard from './TicketCard'
import { dummyTickets } from './ticket-data'

interface TicketListProps {
    origin: string
    destination: string
    date: string // yyyy-mm-dd
}

const TicketList = ({ origin, destination, date }: TicketListProps) => {
    const filtered = dummyTickets.filter(ticket =>
        ticket.origin === origin.toLowerCase() &&
        ticket.destination === destination.toLowerCase() &&
        ticket.date === date
    )

    return (
        <div className="space-y-10">
            {filtered.length > 0 ? (
                filtered.map(ticket => (
                    <TicketCard key={ticket.id} {...ticket} />
                ))
            ) : (
                <p className="text-center text-gray-500">Tidak ada tiket tersedia.</p>
            )}
        </div>
    )
}

export default TicketList
