import Image from "next/image";
import { MdDone } from "react-icons/md";
import diamond from "../../assets/landingPage/diamond.png";
import blackStyle from "../../assets/landingPage/blackStyle.png";
export default function Hero8() {
    return <main className=" px-[5%] flex-col md:px-[11%] flex justify-center items-center pt-28 relative ">

        <section className="w-[360px] border border-gray-400 h-[270px] rounded-[50%] absolute bottom-[-45px] right-[-220px]  rotate-[-40deg]"></section>
        <section className="w-[360px] border border-gray-400 h-[280px] rounded-[50%] absolute bottom-[-35px] right-[-225px] rotate-[-28deg]"></section>
        <section className="relative max-w-[1200px] w-full">
        <Image className="absolute top-[-107px] w-[400px] z-10  right-[-120px]" src={blackStyle} alt="zoti"/>
        </section>
        <section className="relative bg-white max-w-[1200px] flex justify-start px-4  pt-14 pb-8 items-center flex-col border-[1.34px] border-gray-700 w-full z-40 rounded-2xl">

           
            <Image src={diamond} alt="zoti" className="absolute hidden left-[-30px] lg:left-10 lg:bottom-10 bottom-[30%] w-20 lg:w-28 sm:flex " />
            <Image src={diamond} alt="zoti" className="absolute hidden lg:bottom-[50%] bottom-[20%] rotate-45 sm:flex lg:w-20 w-16 lg:right-16 right-[-30px]" />
            <h5 className="md:text-5xl relative z-20 sm:text-4xl text-3xl text-center font-bold">Get started with Zoti Today</h5>
            <ul className="flex relative z-20 mt-6 flex-col justify-start items-center gap-3">
                <li className="flex sm:text-lg text-base md:text-xl font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Connect with new and existing targets</li>
                <li className="flex sm:text-lg text-base md:text-xl font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Increase sales performance</li>
                <li className="flex sm:text-lg text-base md:text-xl font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Improve customer satisfaction ratings</li>
                <li className="flex sm:text-lg text-base md:text-xl font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Offer scalable support solutions</li>
            </ul>
            <section className="flex relative z-20 justify-center flex-wrap mt-12 mb-5 items-center gap-5">
                <button className="border-[1.33px] font-medium  border-gray-700 text-white bg-black px-10 text-sm sm:text-base rounded-full active:scale-[0.98] transition-all duration-200 ease-in-out  hover:bg-gray-700 py-2">Signup for free</button>
                <button className="border-[1.4px]  font-medium border-gray-700 text-black bg-white px-12 text-sm sm:text-base rounded-full active:scale-[0.98] transition-all duration-200 ease-in-out hover:text-white hover:bg-black py-2">or Book a demo Today</button>
            </section>
        </section>

    </main>
}