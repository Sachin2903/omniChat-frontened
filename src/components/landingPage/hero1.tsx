import Image from "next/image";
import her1Image from "../../assets/landingPage/ZotiHero1.png";
import { FaPlayCircle } from "react-icons/fa";
import whatsAppLogo from "../../assets/landingPage/whatsapp.png";
export default function Hero1() {
    return <main className="relative  lg:mb-60 mb-20 pt-10 w-screen ">
        <section className="w-[350px] border border-gray-300 h-[200px] rounded-[50%] absolute top-[40px] left-[-210px] rotate-[-35deg]"></section>
        <section className="w-[350px] border border-gray-300 h-[200px] rounded-[50%] absolute top-[55px] left-[-210px] rotate-[-35deg]"></section>

        <section className=" w-screen justify-start items-center relative  lg:flex-row flex-col-reverse mx-auto max-w-[1400px] px-[3%]  flex">
            <section className="w-full  pt-10 lg:pt-[120px] flex lg:justify-start justify-center flex-col lg:items-start items-center ">
                <h1 className="flex w-full lg:w-fit ms:mr-0 mr-12 gap-3 justify-center lg:justify-start items-end  md:text-4xl text-3xl font-extrabold">
                    <svg className="mb-3 ms:hidden  w-[40px]" xmlns="http://www.w3.org/2000/svg" width="60" height="51" viewBox="0 0 60 51" fill="none">
                        <path d="M56.8954 35.6137C55.9859 29.3804 51.8373 25.8351 45.7499 25.9162C43.5458 23.1988 39.5531 16.4154 45.7499 4.18916C33.7711 12.6796 23.2222 49.4335 46.8835 47.9492C52.6439 47.5878 57.8049 41.8469 56.8954 35.6137Z" stroke="black" stroke-width="5" />
                        <path d="M26.447 37.2554C26.4694 30.9559 22.8911 26.8326 16.8591 26.0071C15.0813 22.9919 13.5098 14.1691 21.4462 3C8.3442 9.6144 -8.8976 45.9127 14.7214 47.965C20.4715 48.4646 26.4245 43.555 26.447 37.2554Z" stroke="black" stroke-width="5" />
                    </svg><p className="text-center">Delight your customers</p></h1>
                <p className="md:text-3xl text-2xl lg:pl-[74px] font-medium mt-3">with seamless</p>
                <p className="md:text-3xl text-2xl gap-3 lg:pl-[74px] font-medium flex justify-start items-start">WhatsApp conversations
                    <svg className="mb-3 ms:hidden md:w-[60px] sm:w-[50px] w-[40px]" xmlns="http://www.w3.org/2000/svg" width="60" height="51" viewBox="0 0 60 51" fill="none">
                        <path d="M3.10463 35.6137C4.01413 29.3804 8.1627 25.8351 14.2501 25.9162C16.4542 23.1988 20.4469 16.4154 14.2501 4.18916C26.2289 12.6796 36.7778 49.4335 13.1165 47.9492C7.35612 47.5878 2.19512 41.8469 3.10463 35.6137Z" stroke="black" stroke-width="5" />
                        <path d="M33.553 37.2554C33.5306 30.9559 37.1089 26.8326 43.1409 26.0071C44.9187 22.9919 46.4902 14.1691 38.5538 3C51.6558 9.6144 68.8976 45.9127 45.2786 47.965C39.5285 48.4646 33.5755 43.555 33.553 37.2554Z" stroke="black" stroke-width="5" />
                    </svg></p>

                <section className=" sm:mt-8 mt-5 lg:ml-[74px] flex sm:justify-start justify-center items-center gap-3 relative z-20 flex-wrap">
                    <button className="border-[1.33px] font-bold  border-gray-700 text-white w-[80%] sm:w-fit bg-black px-10 text-sm sm:text-lg rounded-full active:scale-[0.98] transition-all duration-200 ease-in-out  hover:bg-gray-700 py-2">Free 7 days trial</button>
                    <button className="border-[1.4px]  font-extrabold border-gray-700 text-black w-[80%] sm:w-fit bg-white px-12 text-sm sm:text-lg rounded-full active:scale-[0.98] transition-all duration-200 ease-in-out hover:text-white hover:bg-black py-2">or Book a demo Today</button>
                </section>
                <button className="border-[1.4px] relative z-30 sm:w-[47%] mt-6 lg:ml-[74px] flex w-[80%]  justify-center items-center gap-2  font-extrabold border-gray-700 text-black bg-white px-12 text-sm sm:text-lg rounded-full active:scale-[0.98] transition-all duration-200 ease-in-out hover:text-white hover:bg-black py-2">Watch Video <FaPlayCircle /> </button>



            </section>
            <Image src={whatsAppLogo} className="absolute lg:w-[120px] sm:w-[110px] w-[90px]  ms:w-[70px] z-20 lg:top-[25%] md:top-[8%] sm:top-[8%] top-[12%] WhatAppIcon  right-[23%] sm:right-[28%] md:right-[32%] lg:right-[12%]" alt="whatsapp" />
            <Image alt="zoti" src={her1Image} className="lg:absolute  z-10 lg:max-w-[650px] sm:max-w-[580px] lg:px-0 px-[5px] top-0 right-0" />


        </section>





    </main>
}