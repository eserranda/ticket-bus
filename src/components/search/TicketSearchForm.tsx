'use client'

const TicketSearchForm = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Pencarian Tiket</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="origin" className="block text-sm">Kota Asal</label>
                    <input type="text" id="origin" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label htmlFor="destination" className="block text-sm">Kota Tujuan</label>
                    <input type="text" id="destination" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm">Tanggal Keberangkatan</label>
                    <input type="date" id="date" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Cari Tiket</button>
            </form>
        </div>
    )
}

export default TicketSearchForm
