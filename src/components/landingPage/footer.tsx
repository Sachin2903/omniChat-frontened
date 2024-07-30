import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { LuFacebook } from "react-icons/lu";
import zoti_z from "../../assets/landingPage/zoti_z.png";
import Image from "next/image";


export default function Footer() {
    return <main className="  justify-between items-center flex-col">
        <section className="border-t  flex justify-center items-center flex-col md:flex-row  border-black ms:py-10 md:py-24 py-16 rounded-t-2xl px-[5%] sm:px-[10%] md:px-[5%] lg:px-[12%]  min-h-[50vh] ">
            <section className="flex ms:flex-col ms:min-h-[290px] ms:max-h-[290px]  min-h-[160px] max-h-[160px] md:border-r-[1.5px] border-black py-5  w-full md:w-[550px] md:pr-8 justify-between ms:justify-center  items-start ms:items-center ">
                <Image src={zoti_z} className="md:w-20  my-auto w-16 " alt="zoti" />
                <ul className="flex flex-col  justify-start ms:justify-center ms:items-center items-end  gap-1">
                    <li className="text-xl ms:text-lg font-semibold">Menu</li>
                    <li className=" text-sm ms:text-xs cursor-pointer transition-all duration-200 ease-in-out  hover:underline  font-medium ">Features</li>
                    <li className="text-sm ms:text-xs cursor-pointer  transition-all duration-200 ease-in-out hover:underline  font-medium">FAQ</li>
                    <li className="text-sm ms:text-xs cursor-pointer  transition-all duration-200 ease-in-out hover:underline  font-medium">Contact</li>
                </ul>

            </section>
            <section className="flex ms:flex-col ms:min-h-[290px] ms:max-h-[290px]   py-5 min-h-[160px] max-h-[160px] md:pl-8 w-full md:w-[550px]  justify-between items-start ms:items-center">
                <ul className="flex  flex-col justify-start items-start ms:justify-center ms:items-center gap-1">
                    <li className="text-xl ms:text-lg font-semibold">Resources</li>
                    <li className="text-sm ms:text-xs cursor-pointer transition-all duration-200 ease-in-out hover:underline  font-medium">Use Case</li>
                    <li className="text-sm ms:text-xs cursor-pointer transition-all duration-200 ease-in-out hover:underline  font-medium">Try WhatsApp Demo</li>
                  
                </ul>
                <section className="flex  flex-col gap-7 pt-2 ms:pt-0 justify-center items-center">
                    <button className="text-base ms:text-sm  bg-black text-white  flex justify-center items-center px-5 ms:gap-2 rounded-full gap-5 py-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-700">Contact us <GoArrowUpRight className="text-xl font-bold"/></button>
                    <section className="flex gap-3"><FaWhatsapp className="text-white cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-700 bg-black rounded-full p-2 w-11 h-11 ms:w-10 ms:h-10"/> <FaInstagram  className="text-white cursor-pointer transition-all ms:w-10 ms:h-10 duration-200 ease-in-out hover:bg-gray-700 bg-black rounded-full p-2 w-11 h-11"/> <LuFacebook className="text-white ms:w-10 ms:h-10 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-700 bg-black rounded-full p-2 w-11 h-11"/> <AiOutlineYoutube className="text-white ms:w-10 ms:h-10 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-700 bg-black rounded-full p-2 w-11 h-11"/></section>
                </section>

            </section>

        </section>
        <p className="bg-black gap-1 font-medium  text-white   px-[5%] md:px-[12%] text-sm sm:text-base text-center h-12 flex justify-end items-center w-screen">
            <FaRegCopyright />
            {new Date().getFullYear()} Zoti. All rights reserved
        </p>


    </main>
}