"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { IoMdClose } from "react-icons/io";

const WhatsAppChat = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed bottom-5 right-5 z-49 flex flex-col items-end space-y-2">
            {/* Tombol Close - terpisah */}
            <button
                onClick={() => setVisible(false)}
                className=" text-red-500 hover:text-red-700 rounded-full z-49 p-1 -mb-2.5"
            >
                <IoMdClose size={18} />
            </button>

            {/* Box Teks Animasi */}
            {/* <div className="bg-white text-black px-3 py-2 rounded-lg shadow-md w-[200px] min-h-[10px] overflow-hidden"> */}
            <div className="text-black bg-white py-2 rounded font-semibold overflow-hidden min-w-[100px] whitespace-nowrap px-2">
                <TypeAnimation
                    sequence={[
                        "Hubungi kami",
                        2000,
                        "Online 24/7 🚀",
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-sm text-right block"
                    cursor={true}
                />
            </div>

            {/* Tombol WhatsApp */}
            <a
                href="https://wa.me/6285846679555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white hover:bg-green-600 p-3 rounded-full shadow-md transition-all"
            >
                <FaWhatsapp size={24} />
            </a>
        </div>
    );
};

export default WhatsAppChat;
