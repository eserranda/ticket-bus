import Container from "@/components/Container"

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Container className="bg-white">
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">{children}</main>
            </div>
        </Container>
    )
}