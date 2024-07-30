"use client";
import React, { useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import edu from "../../assets/landingPage/Education.png";
import cafe from "../../assets/landingPage/cafe.png"
import health from "../../assets/landingPage/Healthcare.png"
import sale from "../../assets/landingPage/Sales & Support.png"
import Image from "next/image";
import { MdDone } from "react-icons/md";
const CustomArrow = ({ onClick, direction }: any) => (
    <span className={`${direction === "left" ? "md:-left-8 -left-3" : "md:-right-8 -right-3"} z-20 cursor-pointer active:scale-[0.97] transition-all duration-300 ease-in-out hover:bg-gray-800 absolute top-[42%] bg-black text-white p-3 rounded-full flex justify-center items-center  w-fit md:text-3xl text-xl sm:text-2xl custom-arrow-${direction}`} onClick={onClick}>
        {direction === "left" ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </span>
);

const Hero5Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings: any = {
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        // pauseOnHover: true,
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
    };

    return (
        <main className=" relative bg-white   md:my-14 mt-8 rounded-2xl flex-col max-w-[1400px] m-auto w-full flex justify-center  items-center ">
            <Slider
                {...settings}
                className=" z-20   flex justify-center gap-5 items-center w-full"
            >
                <div className="border-[1.5px] bg-gradient-to-t from-gray-200 to-white bg-white max-w-[100%]  border-gray-600 rounded-2xl py-5 ">
                    <section className=" flex gap-7 justify-center items-center flex-col">

                        <p className="md:text-2xl relative z-20 sm:text-xl text-lg font-extrabold">Education Institutes</p>

                        <section className="md:w-[55%] w-[72%] flex justify-between items-center relative">
                            <section className="w-full border-[0.37px] border-gray-500 absolute"></section>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">1</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">2</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">3</p>

                        </section>
                        <Image className="md:w-[80%] w-[90%]" alt="zoti" src={edu} />

                        <ul className="flex justify-center rounded-2xl items-center flex-wrap w-[90%] border-2 p-3 py-8 border-black  bg-white sm:gap-10  mt-7  gap-6 md:gap-12">
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Education Institute</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Bootcamps</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />School</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Colleges</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Coaching center</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Tution classes</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Universities</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Workshops</li>
                        </ul>
                    </section>


                    <section className="flex justify-center items-center md:gap-8 gap-3 mt-7 flex-wrap w-[90%]  mx-auto">
                        <p className="text-base text-center md:text-lg font-semibold">If you can't find yours, we are always a click aways!</p>
                        <button className="bg-black text-white text-sm  md:text-base  hover:bg-gray-700 transition-all duration-200 ease-in-out active:scale-[0.98] rounded-xl px-8 font-semibold py-2">Lets Talk</button>
                    </section>

                </div>

                <div className="border-[1.5px] bg-gradient-to-t from-gray-200 to-white bg-white max-w-[100%]  border-gray-600 rounded-2xl py-5 ">
                    <section className=" flex gap-7 justify-center items-center flex-col">

                        <p className="md:text-2xl relative z-20 sm:text-xl text-lg font-extrabold">Cafe, Restaurants & Hotels</p>

                        <section className="md:w-[55%] w-[72%] flex justify-between items-center relative">
                            <section className="w-full border-[0.37px] border-gray-500 absolute"></section>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">1</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">2</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">3</p>

                        </section>
                        <Image className="md:w-[80%] w-[90%]" alt="zoti" src={cafe} />

                        
                        <ul className="flex justify-center rounded-2xl items-center flex-wrap w-[90%] border-2 p-3 py-8 border-black  bg-white sm:gap-10  mt-7  gap-6 md:gap-12">
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Hotels</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Cafe</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Resort</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Restaurants</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Bakery</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Canteen</li>
                        </ul>
                    </section>


                    <section className="flex justify-center items-center md:gap-8 gap-3 mt-7 flex-wrap w-[90%]  mx-auto">
                        <p className="text-base text-center md:text-lg font-semibold">If you can't find yours, we are always a click aways!</p>
                        <button className="bg-black text-white text-sm  md:text-base  hover:bg-gray-700 transition-all duration-200 ease-in-out active:scale-[0.98] rounded-xl px-8 font-semibold py-2">Lets Talk</button>
                    </section>

                </div>


                <div className="border-[1.5px] bg-gradient-to-t from-gray-200 to-white bg-white max-w-[100%]  border-gray-600 rounded-2xl py-5 ">
                    <section className=" flex gap-7 justify-center items-center flex-col">

                        <p className="md:text-2xl relative z-20 sm:text-xl text-lg font-extrabold">Healthcare</p>

                        <section className="md:w-[55%] w-[72%] flex justify-between items-center relative">
                            <section className="w-full border-[0.37px] border-gray-500 absolute"></section>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">1</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">2</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">3</p>

                        </section>
                        <Image className="md:w-[80%] w-[90%]" alt="zoti" src={health} />

                        
                        <ul className="flex justify-center rounded-2xl items-center flex-wrap w-[90%] border-2 p-3 py-8 border-black  bg-white sm:gap-10  mt-7  gap-6 md:gap-12">
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Home care</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Hospitals</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Polyclinics</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Pharmacies</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Laboratories</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Alternative Medicine</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />E-commerce</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />NGO</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Multi-specialty Hospital</li>
                        </ul>
                    </section>


                    <section className="flex justify-center items-center md:gap-8 gap-3 mt-7 flex-wrap w-[90%]  mx-auto">
                        <p className="text-base text-center md:text-lg font-semibold">If you can't find yours, we are always a click aways!</p>
                        <button className="bg-black text-white text-sm  md:text-base  hover:bg-gray-700 transition-all duration-200 ease-in-out active:scale-[0.98] rounded-xl px-8 font-semibold py-2">Lets Talk</button>
                    </section>

                </div>


                <div className="border-[1.5px] bg-gradient-to-t from-gray-200 to-white bg-white max-w-[100%]  border-gray-600 rounded-2xl py-5 ">
                    <section className=" flex gap-7 justify-center items-center flex-col">

                        <p className="md:text-2xl relative z-20 sm:text-xl text-lg font-extrabold">Sales & Support</p>

                        <section className="md:w-[55%] w-[72%] flex justify-between items-center relative">
                            <section className="w-full border-[0.37px] border-gray-500 absolute"></section>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">1</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">2</p>
                            <p className="w-10 hover:bg-black hover:text-white transition-all duration-200 ease-in-out  h-10 border border-black bg-white relative z-20  flex justify-center items-center text-xl md:text-2xl font-extrabold rounded-full">3</p>

                        </section>
                        <Image className="md:w-[80%] w-[90%]" alt="zoti" src={sale} />

                        
                        <ul className="flex justify-center rounded-2xl items-center flex-wrap w-[90%] border-2 p-3 py-8 border-black  bg-white sm:gap-10  mt-7  gap-6 md:gap-12">
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Real Estate</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Retail Outlets</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />D2C Brands</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Tourism & Travel</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Property Maintenance</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Automobile Service</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />E-commerce</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />NGO</li>


                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Gym & Wellness</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Wholesalers / Distributors</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Event Management</li>
                            <li className="flex justify-start items-center text-sm ms:text-base font-medium text-center gap-2"><MdDone className="text-white bg-black rounded-full text-xl p-1" />Finance</li>
                        </ul>


                    </section>


                    <section className="flex justify-center items-center md:gap-8 gap-3 mt-7 flex-wrap w-[90%]  mx-auto">
                        <p className="text-base text-center md:text-lg font-semibold">If you can't find yours, we are always a click aways!</p>
                        <button className="bg-black text-white text-sm  md:text-base  hover:bg-gray-700 transition-all duration-200 ease-in-out active:scale-[0.98] rounded-xl px-8 font-semibold py-2">Lets Talk</button>
                    </section>

                </div>


            </Slider>
        </main>
    );
};

export default Hero5Slider;
