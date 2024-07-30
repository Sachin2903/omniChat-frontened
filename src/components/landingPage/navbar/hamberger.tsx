"use client"

import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx";

export default function Hamberger() {
    const [showMenu, setShowMenu] = useState(false);

    return <main className="hidden ms:block">
        <section onClick={() => setShowMenu(false)} className={` absolute w-screen top-0 ${showMenu ? "left-0" : "left-[-100vw]"} h-screen bg-[#c2c2c22c] z-50`}>
            <section onClick={(e)=>e.stopPropagation()} className={` ${showMenu ? "translate-x-0" : "translate-x-[-200vw]"}  w-[75%]  transition-all duration-150 ease-in-out relative h-full pt-20 bg-white`}>
                <RxCross2 onClick={()=>setShowMenu(false)} className="absolute cursor-pointer hover:scale-[0.97] top-5 bg-gray-300 rounded-full hover:bg-black hover:text-white p-1.5 transition-all duration-200 ease-in-out  text-4xl right-5"/>
                <ul className="flex flex-col justify-center  text-xl font-sans items-center gap-10 ">
                    <li className="hover:font-bold font-medium    cursor-pointer transition-all duration-150 ease-in-out ">Features</li>
                    <li className="hover:font-bold font-medium   cursor-pointer transition-all duration-150 ease-in-out  ">Contact</li>
                    <li className="hover:font-bold font-medium   cursor-pointer transition-all duration-150 ease-in-out  ">FAQ</li>
                    <li className="hover:font-bold font-medium   cursor-pointer transition-all duration-150 ease-in-out  ">Use Case</li>
                </ul>
            </section>

        </section>


        <IoMenuSharp onClick={() => setShowMenu(true)} className="cursor-pointer active:scale-[0.97] transition-all duration-200 ease-in-out text-4xl" />



    </main>
}