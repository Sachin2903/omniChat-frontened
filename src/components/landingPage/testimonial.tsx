"use client";
import React, { useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import test_1 from "../../assets/landingPage/testimonial1.png";
const CustomArrow = ({ onClick, direction }: any) => (
  <span className={`${direction === "left" ? "md:-left-14 -left-3" : "md:-right-14 -right-3"} z-20 cursor-pointer active:scale-[0.97] transition-all duration-300 ease-in-out hover:bg-gray-800 absolute top-[40%] bg-black text-white p-3 rounded-full flex justify-center items-center  w-fit text-3xl custom-arrow-${direction}`} onClick={onClick}>
    {direction === "left" ? <IoIosArrowBack /> : <IoIosArrowForward />}
  </span>
);

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings: any = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },],
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <main className="h-auto   relative    py-14 flex-col max-w-[1400px] m-auto w-full flex justify-center overflow-hidden items-center ">

      <section className="w-[350px]  border border-gray-400 h-[260px] rounded-[50%] absolute bottom-[-90px] left-[-250px] "></section>
      <section className="w-[350px]  border border-gray-400 h-[240px] rounded-[50%] absolute bottom-[-90px] left-[-260px] "></section>

      <Slider
        {...settings}
        className=" z-20   flex justify-center gap-5 items-center lg:w-[80%] w-[90%]"
      >
        <div className="border-[1.5px] bg-white max-w-[95%] my-6 md:ml-4 ml-3.5  border-gray-600 rounded-2xl px-8 py-7 gap-7 text-center justify-between items-center flex flex-col">
          <section className="flex gap-6 px-4 justify-start items-center">
            <Image src={test_1} alt="Zoti" className="w-18 h-18" />
            <section className="flex flex-col justify-start items-start gap-2">
              <h2 className="text-xl font-bold">Anant Singh</h2>
              <h3 className="text-xl font-bold">CEO</h3>
            </section>

          </section>
          <p className="text-base font-medium mt-4">“Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam. “</p>
        </div>

        <div className="border-[1.5px] bg-white max-w-[95%] my-6 ml-2  border-gray-600 rounded-2xl px-10 py-7 gap-7 text-center justify-between items-center flex flex-col">
          <section className="flex gap-6 px-4 justify-start items-center">
            <Image src={test_1} alt="Zoti" className="w-18 h-18" />
            <section className="flex flex-col justify-start items-start gap-2">
              <h2 className="text-xl font-bold">Anant Singh</h2>
              <h3 className="text-xl font-bold">CEO</h3>
            </section>

          </section>
          <p className="text-base font-medium mt-4">“Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam. “</p>
        </div>

        <div className="border-[1.5px] bg-white max-w-[95%] my-6 md:ml-4 ml-3.5  border-gray-600 rounded-2xl px-10 py-7 gap-7 text-center justify-between items-center flex flex-col">
          <section className="flex gap-6 px-4 justify-start items-center">
            <Image src={test_1} alt="Zoti" className="w-18 h-18" />
            <section className="flex flex-col justify-start items-start gap-2">
              <h2 className="text-xl font-bold">Anant Singh</h2>
              <h3 className="text-xl font-bold">CEO</h3>
            </section>

          </section>
          <p className="text-base font-medium mt-4">“Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam. “</p>
        </div>
        <div className="border-[1.5px] bg-white max-w-[95%] my-6 ml-2  border-gray-600 rounded-2xl px-10 py-7 gap-7 text-center justify-between items-center flex flex-col">
          <section className="flex gap-6 px-4 justify-start items-center">
            <Image src={test_1} alt="Zoti" className="w-18 h-18" />
            <section className="flex flex-col justify-start items-start gap-2">
              <h2 className="text-xl font-bold">Anant Singh</h2>
              <h3 className="text-xl font-bold">CEO</h3>
            </section>

          </section>
          <p className="text-base font-medium mt-4">“Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam. “</p>
        </div>

      </Slider>
    </main>
  );
};

export default Testimonial;
