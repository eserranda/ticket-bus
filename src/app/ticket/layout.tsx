import Container from "@/components/Container"
import { Metadata } from "next"

export default function TicketLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}