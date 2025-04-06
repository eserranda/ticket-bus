import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import "./globals.css"
import { Metadata } from "next"
import Container from "@/components/Container"

export const metadata: Metadata = {
  title: {
    template: "%s - Online Tickets",
    default: "Online Tickets",
  },
  description: "Buy tickets online for events, concerts, and more.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <body className="font-poppins antialias bg-gray-100 text-gray-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}