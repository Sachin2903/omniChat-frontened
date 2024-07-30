"use client"

const array=["https://omnileadzdev.s3.amazonaws.com/NjVhNjU1NzhkMTE5NzMwMWE5NzRiNGI1/1710774516703_iPhone 14 & 15 Pro Max - 1 (1).png","https://omnileadzdev.s3.amazonaws.com/NjVhNjU1NzhkMTE5NzMwMWE5NzRiNGI1/1710774516709_iPhone 14 & 15 Pro Max - 1 (2).png","https://omnileadzdev.s3.amazonaws.com/NjVhNjU1NzhkMTE5NzMwMWE5NzRiNGI1/1710049098668_IMG-20240310-WA0001.jpg","https://omnileadzdev.s3.amazonaws.com/NjVhNjU1NzhkMTE5NzMwMWE5NzRiNGI1/1710049098681_IMG-20240310-WA0002.jpg","https://omnileadzdev.s3.amazonaws.com/NjVhNjU1NzhkMTE5NzMwMWE5NzRiNGI1/1710049098685_IMG-20240310-WA0003.jpg"]

export default function InfiniteScroll() {

    return (
        <section className="flex mt-14 mx-auto  max-w-[1400px] px-[7%]   overflow-x-hidden w-full h-full " >
        <section className="flex  overflow-x-hidden w-full h-full " >
            <section className="min-w-full IconWrapper md:gap-5 gap-10 px-6 md:px-10 h-full shrink-0  flex justify-between items-center" >


                {
                    array.map((data, index) => {
                        return <img key={index*10}  className="h-20 w-20 max-w-20" alt="O" src={data}/>
                    })
                }
            </section>
            <section className="IconWrapper min-w-full md:gap-5 gap-10  px-6 md:px-10 shrink-0 flex justify-between items-center" >
                {
                    array.map((data, index) => {
                        return <img key={index*10} className="h-20 w-20 max-w-20" alt="O" src={data}/>
                    })
                }
            </section>
        </section>
        </section>
    )
}