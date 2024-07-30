import Image from "next/image";
import college from "../../assets/landingPage/college.png";
export default function Hero7() {
    return <main className=" px-[5%] flex-col md:px-[10%] flex justify-center items-center pt-16 relative">
        <section className="relative   max-w-[1200px] flex justify-center  pt-14 pb-8 items-center  lg:flex-row flex-col w-full z-40 rounded-2xl">
            <section className=" lg:w-[50%] w-full   flex justify-start items-center lg:items-start flex-col">
                <h4 className="sm:text-6xl text-center text-5xl font-extrabold">5x <span className="sm:text-3xl text-xl font-semibold">Return on Ad Spend</span></h4>
                <p className="sm:text-3xl text-center text-2xl text-gray-700 mt-1 font-medium pl-2">with WhatsApp Click Ads</p>

                <ul className="flex gap-4  mt-7 sm:mt-12 justify-start items-center ms:items-center ms:justify-center ms:flex-wrap ">
                    <li className="hover:bg-black hover:text-white shadow hover:shadow-md transition-all duration-200 ease-in-out border-[1.4px] h-[130px] w-[119px] sm:w-[132px] rounded-3xl p-1 py-4 flex justify-start items-center flex-col  border-black"><p className="sm:text-2xl text-xl font-bold">1.5k+</p><p className="text-xs sm:text-[11px]  font-semibold text-center">Conversions started via ads that click to WhatsApp</p></li>
                    <li className="hover:bg-black hover:text-white shadow hover:shadow-md transition-all duration-200 ease-in-out border-[1.4px] h-[130px] w-[119px] sm:w-[132px] rounded-3xl p-1 py-4 flex justify-start items-center flex-col  border-black"><p className="sm:text-2xl text-xl font-bold">96</p><p className="text-xs sm:text-[11px]    font-semibold text-center">WhatsApp Orders Placed via ads that click to WhatsApp</p></li>
                    <li className="hover:bg-black hover:text-white shadow hover:shadow-md transition-all duration-200 ease-in-out border-[1.4px] h-[130px] w-[119px] sm:w-[132px] rounded-3xl p-1 py-4 flex justify-start items-center flex-col  border-black"><p className="sm:text-2xl text-xl font-bold">4.79%</p><p className="text-xs sm:text-[11px] font-semibold text-center">WhatsApp Conversion rate via ads that click to WhatsApp</p></li>
                </ul>

            </section>
            <section className="w-full flex justify-center items-center sm:flex-row flex-col gap-2  md:p-[45px] p-[25px]  relative lg:w-[50%] lg:mt-0 mt-10 rounded-3xl lg:h-[420px] border-2 border-black">
                <svg className="absolute h-[97%] z-10 rounded-bl-3xl left-0  bottom-0" xmlns="http://www.w3.org/2000/svg" width="321" height="432" viewBox="0 0 321 432" fill="none">
                    <path d="M37.8407 62L-156.958 234.931L37.8407 136.502L-149.053 302.364L159.237 123.45L-284 477.47L262 151.185L-156.958 467.682L159.237 315.415L-97.6711 526.957L140.604 395.899L-12.9762 633" stroke="#0A0E24" stroke-width="192.708" />
                </svg>

                <svg className="absolute  z-10 sm:w-[120px] w-[80px] bottom-[-70px] sm:bottom-[-80px] left-[-40px] sm:left-[-60px]" xmlns="http://www.w3.org/2000/svg" width="116" height="132" viewBox="0 0 116 132" fill="none">
                    <path d="M92.6881 14.8518C111.052 24.4404 73.2993 68.802 73.2993 68.802C73.2993 68.802 97.8674 53.1187 103.274 69.1945C107.461 81.6441 84.7128 97.1052 70.3402 105.43C70.3402 105.43 78.1806 114.008 73.7792 121.362C65.4784 135.232 -2.90769 104.717 5.45869 87.0723C9.40153 78.7569 21.3268 83.2893 21.3268 83.2893C24.0023 58.9563 33.1347 16.3111 53.5069 29.6103C60.712 21.9283 67.4548 24.227 70.5818 27.6604C77.2594 17.9728 85.1469 10.9142 92.6881 14.8518Z" fill="white" />
                    <path d="M53.9065 60.8823C53.9065 60.8823 60.9982 41.5638 70.5818 27.6604M41.076 54.918C44.9616 41.9365 49.3126 34.0823 53.5069 29.6103M20.4721 93.5009C20.6076 90.8323 20.8841 87.3155 21.3268 83.2893M58.6618 111.802C58.6618 111.802 63.9666 109.122 70.3402 105.43M45.9733 70.1266C42.2169 75.3852 40.0261 82.2154 39.0299 86.9861M60.9275 76.5865C57.1149 81.4726 54.8872 86.2747 52.4604 91.6847M70.3402 105.43C84.7128 97.1052 107.461 81.6441 103.274 69.1945C97.8674 53.1187 73.2993 68.802 73.2993 68.802C73.2993 68.802 111.052 24.4404 92.6881 14.8518C85.1469 10.9142 77.2594 17.9728 70.5818 27.6604M70.3402 105.43C70.3402 105.43 78.1806 114.008 73.7792 121.362C65.4784 135.232 -2.90769 104.717 5.45868 87.0723C9.40153 78.7569 21.3268 83.2893 21.3268 83.2893M21.3268 83.2893C24.0023 58.9563 33.1347 16.3111 53.5069 29.6103M53.5069 29.6103C60.712 21.9283 67.4548 24.227 70.5818 27.6604" stroke="#0A0E24" stroke-width="5" />
                </svg>


             
                    <Image className="w-full rounded-3xl bg-white relative shadow z-30  sm:max-w-[50%]" alt="zoti" src={college}/>
        
                <section className="w-full flex flex-col justify-center  items-end relative z-30 h-full">
                    <p className="bg-white p-5 sm:bg-transparent text-lg font-medium mt-6 shadow  sm:shadow-none rounded-xl sm:rounded-none text-black sm:mt-0 text-center sm:text-end w-full  py-5 sm:py-0">Edu Institute is acquiring new customer with <span className="font-bold">Ads that click to WhatsApp</span></p>
                    <button className="bg-black text-white px-8 sm:mt-16 mt-10 text-base  py-2 rounded-full active:scale-[0.97] transition-all duration-200 ease-in-out shadow hover:bg-gray-700">Signup for free</button>
                </section>
            </section>

        </section>
    </main>
}