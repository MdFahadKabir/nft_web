import CarouselFeatures from "@/components/CarouselFeatures";
// import SlickCarousel2 from "@/components/SlickCarousel2";
import Article from "@/components/Article";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import OurPartners from "@/components/OurPartners";
import RoadMap from "@/components/RoadMap";
import Services from "@/components/Services";
import SlickCarousel2 from "@/components/SlickCarousel2";
import UpperScroll from "@/components/CarouselTeam";
import SlickCarousel from "@/components/SlickCarousel";
import CarouselTeamResponsive from "@/components/CarouselTeamResponsive";
import RoadMapSwiper from "@/components/RoadMapSwiper";
import Container from "@/components/Container";
import { SpotlightPurple } from "@/components/SpotlightPurple";
import { Spotlight } from "@/components/Spotlight";
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Container>
        <section className="pt-20 mx-10" id="Features">
          <div className=" flex justify-center mb-16">
            <p className="lg:text-4xl md:text-3xl text-2xl  font-black leading-[43.2px] font-family-manifold mt-11 bg-gradient-to-r from-[#ED02ED] to-[#0279F0] inline-block text-transparent bg-clip-text">
              FEATURES AND MORE
            </p>
          </div>
          <CarouselFeatures />
        </section>
      </Container>
      <Container>
        <section >
          <SlickCarousel2 />
        </section>
        </Container>
        <div
        
          className="bg-fixe bg-no-repeat relative"
          style={{ 
            backgroundImage: `url('/image/bgTeam.svg')`,
            backgroundPositionY: "50%",
            // backgroundPositionX: "-10%",
          }}
        >
          <div  className="lg:flex items-center justify-between lg:px-20 lg:py-40 mx-10" >
            <div className=" w-1/2" id="OurTeam" >
              <p className="mb-7 lg:text-[48px] md:text-3xl text-2xl font-black leading-[43.2px] font-family-manifold mt-11 bg-gradient-to-r from-[#ED02ED] to-[#0279F0] inline-block text-transparent bg-clip-text">
                OUR TEAM
              </p>
              <p className="lg:text-xl text-base text-white lg:pb-0 pb-10" >
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <UpperScroll />

          </div>
          <CarouselTeamResponsive />
        </div>
      {/* <RoadMap /> */}
      <RoadMapSwiper />
      <Mission />
      <OurPartners />
      <Article />
      <Faq />

      <Footer />
    </>
  );
}
