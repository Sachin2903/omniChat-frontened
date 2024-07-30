import Image from "next/image";
import working from "../../assets/landingPage/designer-working.png";

export default function Hero6() {
    return <main className="relative  md:mt-7 mx-auto gap-8  max-w-[1200px] w-full px-[5%] flex justify-center items-center md:flex-row flex-col-reverse  md:px-[5%]">
        <section className="w-[350px] border border-gray-300 h-[280px] rounded-[50%] absolute bottom-[-240px] left-[-210px] rotate-[-28deg]"></section>
        <section className="w-[350px] border border-gray-300 h-[280px] rounded-[50%] absolute bottom-[-255px] left-[-210px] rotate-[-28deg]"></section>

        <section className="md:w-[55%] bg-white  relative z-30 w-full border border-gray-800 rounded-3xl md:p-7 p-5 flex justify-start items-center flex-col">
            <p className="text-xl font-semibold text-center">Start For a <span className="text-blue-600">14-Day Free Trial</span></p>
            <p className="text-lg mt-6  w-full text-start font-semibold">Contact Details</p>
            <section className="grid w-full mt-3 sm:grid-cols-2 gap-3">
                <input spellCheck={false} className="shadow w-full py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="First Name" />
                <input spellCheck={false} className="shadow w-full py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="Last Name" />
                <input spellCheck={false} className="shadow w-full py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="WhatsApp Number" />
                <input spellCheck={false} className="shadow w-full py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="Work email Id" />

            </section>

            <p className="text-lg mt-3  w-full text-start font-semibold">Company Details</p>
            <section className="grid w-full mt-3 sm:grid-cols-2 gap-3">
                <input spellCheck={false} className=" w-full shadow py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="Company Name" />
                <input spellCheck={false} className=" w-full shadow py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="Website" />
                <input spellCheck={false} className=" w-full shadow py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="Location" />
                <input spellCheck={false} className=" w-full shadow py-2 px-9 text-gray-700 outline-none text-sm rounded-full bg-gray-100" placeholder="Industry" />
            </section>

            <section className="flex justify-start mt-5 items-center gap-2 w-full"><input className="w-4 h-4" type="checkbox" /> <p className="font-medium text-sm ">Get Updates on WhatsApp</p></section>
            <button className="bg-black text-white mt-9  text-base sm:text-lg  hover:bg-gray-700 transition-all duration-200 ease-in-out active:scale-[0.98] rounded-xl w-full font-semibold py-3">Create Zoti Account</button>
        </section>

        <section className="md:w-[40%] w-full flex justify-center items-center flex-col">
            <Image className="w-[400px]" alt="zoti" src={working} />
            <button className="bg-black text-white px-10 text-base sm:text-lg md:text-xl hover:bg-gray-700 transition-all duration-200 ease-in-out active:scale-[0.98] rounded-full font-semibold py-2">Free 7 days trial</button>
        </section>


    </main>
}