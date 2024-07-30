"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const qaData = [{
    q: "Will my data be safe?",
    a: "Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam"
},
{
    q: "Can I create and manage users for my team?",
    a: "Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam"
},
{
    q: "What are the costs involved?",
    a: "Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam"
},
{
    q: "Does WhatsApp charge for this service?",
    a: "Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam"
},
{
    q: "Can I use my existing WhatsApp number?",
    a: "Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam"
},
{
    q: "Can I create chat agents for manual chat?",
    a: "Lorem ipsum dolor sit amet consectetur. Turpis fermentum nulla faucibus odio nisl. Ipsum pellentesque malesuada feugiat nunc aliquam"
}]
export default function QuesAns() {
    const [showAns, setShowAns] = useState([false, false, false, false, false, false])
    return <main className="w-full max-w-[1400px] px-[5%] py-10 flex justify-center items-center flex-wrap gap-5">
        {
            qaData.map((data: any, index: number) => {
                return <section key={index} className="">
                    <section className="sm:w-[470px] w-[90vw] flex justify-center items-center px-9 h-14 rounded-full border-[1.3334px] cursor-pointer hover:bg-black hover:text-white transition-all duration-200 ease-in-out shadow border-black gap-2">
                        <p className="w-full sm:text-base text-sm font-medium text-center">{
                            data?.q ? data?.q : ""
                        }</p>
                        <IoIosArrowUp className="sm:text-2xl text-xl"/>

                    </section>



                </section>
            })



        }


    </main>
}