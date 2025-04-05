import { Clock, BusFront, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

interface TicketProps {
    busName: string
    origin: string
    destination: string
    departureTime: string
    arrivalTime: string
    price: number
    seatAvailable: number
    order_online: boolean
}

const TicketCard = ({
    busName,
    origin,
    destination,
    departureTime,
    arrivalTime,
    price,
    seatAvailable,
    order_online,
}: TicketProps) => {
    return (
        <Card className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{busName}</h3>
                <div className="text-sm text-gray-500">{origin} → {destination}</div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {departureTime} - {arrivalTime}
                </div>
                <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {seatAvailable} kursi
                </div>
            </div>

            <div className="flex justify-between items-center mt-2">
                <div className="text-green-600 font-bold text-lg">
                    Rp{price.toLocaleString('id-ID')}
                </div>
                {order_online ? (
                    <Button size="sm" className="bg-shop_dark_green text-white">
                        Pesan
                    </Button>
                ) : (
                    <div className="text-sm text-red-600 font-semibold">Hanya bisa di pesan di perwakilan</div>
                )}
            </div>
        </Card>
    )
}

export default TicketCard
