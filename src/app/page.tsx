import NavBar from "@/components/landingPage/navbar/navbar";
import Hero1 from "@/components/landingPage/hero1";
import Footer from "@/components/landingPage/footer";
import Testimonial from "@/components/landingPage/testimonial";
import FreqQuestion from "@/components/landingPage/freqquestion/freqQuestion";
import Hero8 from "@/components/landingPage/hero8";
import Hero7 from "@/components/landingPage/hero7";
import Hero6 from "@/components/landingPage/hero6";
import Hero5 from "@/components/landingPage/hero5";
import Hero4 from "@/components/landingPage/hero4";
import InfiniteScroll from "@/components/landingPage/infiniteScroll";
import Hero3 from "@/components/landingPage/hero3";
import Hero2 from "@/components/landingPage/hero2";
const REDIRECT_URL = process.env.NEXT_PUBLIC_Redirect_URL ? process.env.NEXT_PUBLIC_Redirect_URL! : "https://accounts.omnileadz.com/oauth2/authorize?response_type=code&client_id=temp&scope=write"
export default function Home() {

  return (
    <section className="bg-white text-black  overflow-x-hidden overflow-y-scroll relative w-screen min-h-screen">
      <NavBar />
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <InfiniteScroll/>
      <Hero4/>
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <FreqQuestion />
      <Testimonial />
      <Footer />


    </section>
  );
}