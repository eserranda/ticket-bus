import { Suspense } from 'react'
import TicketListPage from './ticket-list-page'

export default function SearchPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <TicketListPage />
        </Suspense>
    )
}