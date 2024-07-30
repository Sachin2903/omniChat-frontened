import Image from "next/image"
import heroImage from "../../assets/landingPage/hero2Image.png";
export default function Hero2() {
    return <main className="w-full mt-10 relative md:px-[11%] px-[3%]">
        <section className="w-[350px] border border-gray-300 md:h-[350px] h-[250px] rounded-[50%] absolute md:bottom-[-250px] bottom-[-120px] right-[-170px] rotate-[-35deg]"></section>
        <section className="w-[350px] border border-gray-300 md:h-[350px] h-[250px] rounded-[50%] absolute md:bottom-[-265px] bottom-[-135px] right-[-170px] rotate-[-35deg]"></section>

        <section className="w-full relative z-30 max-w-[1400px] mx-auto lg:flex-row flex-col  gap-5 flex justify-between items-center">

            <Image className="md:w-[450px] sm:w-[400px] px-3 max-w-[380]" src={heroImage} alt="zoti" />
            <section className=" w-full gap-2 flex justify-center items-center md:items-end flex-col md:w-[40%]">
                <section className="flex md:gap-3 gap-1 font-extrabold justify-start items-center md:text-4xl sm:text-3xl text-2xl">
                    <svg className="w-[60px] md:w-[110px]" xmlns="http://www.w3.org/2000/svg" width="104" height="116" viewBox="0 0 104 116" fill="none">
                        <path d="M52.246 26.0981L47.4203 1M60.892 19.4456L64.0086 6.84615M60.892 82.443L67.5273 115M52.246 92.4217L50.1348 106.029M80.7979 42.8014L100 32.7507M27.7155 42.8014L6 29.122M18.2652 47.87H8.0107M32.5412 72.9682L13.9422 88.5915M82.9091 67.9716L97.6877 75.4953M55.0882 42.8014L70.6356 29.122L65.9986 50.4619L84.8193 55.7969L65.9986 61.1319L70.6356 75.4953L56.5883 67.9716L42.9502 86.5756L44.5868 64.4149L18.2652 59.7639L40.584 50.4619L36.2676 30.2164L55.0882 42.8014Z" stroke="#131B42" stroke-width="10" />
                    </svg><p className="self-end mb-3 md:mb-2">Introducing</p></section>
                <h3 className="md:text-6xl sm:text-5xl text-4xl font-extrabold">ZOTI,</h3>
                <p className="md:text-end mb-4 px-[2%] text-center font-medium md:text-xl sm:text-lg text-base">a WhatsApp API powered chatbot. Unleash the power of quick and secure conversations!</p>
                <button className="bg-black text-white px-10 text-base sm:text-lg md:text-xl hover:bg-gray-700 transition-all duration-200 ease-in-out active:scale-[0.98] rounded-full font-semibold py-2">Free 7 days trial</button>

            </section>
        </section>

    </main>
}