import Image from "next/image";
import zoti_logo from "../../../assets/landingPage/zoti_full_name_logo.png";
import Hamberger from "./hamberger";

export default function NavBar() {
    return <nav className="flex  sm:pt-6  mx-auto max-w-[1400px] pt-5 px-[5%] md:px-[12%] justify-between items-center ">

        <Image alt="zoti" className="cursor-pointer h-11 w-[110px] md:h-12 md:w-30" src={zoti_logo} />
        <ul className="flex justify-center ms:hidden text-base md:text-lg font-sans items-center md:gap-10  gap-3 sm:gap-7">
            <li className="hover:font-bold text-black  font-medium    cursor-pointer transition-all duration-150 ease-in-out md:min-w-[73px]  md:max-w-[73px] min-w-[73px]  max-w-[73px]">Features</li>
            <li className="hover:font-bold text-black font-medium   cursor-pointer transition-all duration-150 ease-in-out  md:min-w-[68px]  md:max-w-[68px] min-w-[68px]  max-w-[68px]">Contact</li>
            <li className="hover:font-bold text-black font-medium   cursor-pointer transition-all duration-150 ease-in-out  md:min-w-[37px]  md:max-w-[37px] min-w-[37px]  max-w-[37px]">FAQ</li>
            <li className="hover:font-bold text-black font-medium   cursor-pointer transition-all duration-150 ease-in-out  md:min-w-[83px]  md:max-w-[83px] min-w-[75px]  max-w-[75px]">Use Case</li>
        </ul>
        <Hamberger/>
    </nav>
}