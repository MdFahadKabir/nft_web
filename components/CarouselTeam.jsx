"use client";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App() {
  const [swiper, setSwiper] = useState(null);
  // This is a custom function
  const handleSlideChange = () => {
    if (swiper) {
      const slides = swiper.slides;
      const activeIndex = swiper.activeIndex;
      slides.forEach((slide, index) => {
        const distance = Math.abs(index - activeIndex);
        const blur = distance !== 1 ? 1 : 0; // Adjust blur amount as needed
        const opacity = distance !== 1 ? 0.5 : 1; // Adjust opacity for upper and bottom items
        // Apply blur and opacity to each slide
        slide.style.filter = `blur(${blur}px) opacity(${opacity})`;
      });
    }
  };

  const items = [
    {
      id: 1,
      name: "Mighty Cluster",
      designation: "Founder",
      image: "/image/upperslide.svg",
    },
    {
      id: 2,
      name: "Mighty Cluster",
      designation: "Founder",
      image: "/image/upperslide.svg",
    },
    {
      id: 3,
      name: "Mighty Cluster",
      designation: "Founder",
      image: "/image/upperslide.svg",
    },
    {
      id: 4,
      name: "Mighty Cluster",
      designation: "Founder",
      image: "/image/upperslide.svg",
    },
    {
      id: 5,
      name: "Mighty Cluster",
      designation: "Founder",
      image: "/image/upperslide.svg",
    },
    {
      id: 6,
      name: "Mighty Cluster",
      designation: "Founder",
      image: "/image/upperslide.svg",
    },
    {
      id: 1,
      name: "Mighty Cluster",
      designation: "Founder",
      image: "/image/upperslide.svg",
    },
  ];

  const renderItems = items.map((item) => {
    return (
      <>
        <SwiperSlide className="lg:visible invisible">
          <div  className="flex items-center lg:gap-7 md:gap-16 gap-5  lg:justify-between  justify-center">
            <div>
              <Card isFooterBlurred radius="lg" className="border-none  xl:w-[250px] lg:w-full">
                <Image
                  alt="Fame Guild Team Image"
                  className="object-cover w-full"
                  height={200}
                  src={item.image}
                  width={400}
                />
                <CardFooter className="justify-start  items-start bg-[#00000023] flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(96%_-_8px)] shadow-small ml-2 mb-2 z-10">
                  <p className="lg:text-base text-sm text-white text-start">
                    {item.name}
                  </p>
                  <p className="lg:text-sm text-xs text-white text-start">
                    {item.designation}
                  </p>
                </CardFooter>
              </Card>
            </div>

            <div >
              <Card isFooterBlurred radius="lg" className="border-none xl:w-[250px]  lg:w-full">
                <Image
                  alt="Fame Guild Team Image"
                  className="object-cover w-full"
                  height={200}
                  src={item.image}
                  width={400}
                />
                <CardFooter className="justify-start  items-start bg-[#00000023] flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(96%_-_8px)] shadow-small ml-2 mb-2 z-10">
                  <p className="lg:text-base text-sm text-white text-start">
                    {item.name}
                  </p>
                  <p className="lg:text-sm text-xs text-white text-start">
                    {item.designation}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </SwiperSlide>
      </>
    );
  });
  return (
    <section className="fade-top-bottom">
      <Swiper

        direction={"vertical"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={3}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Pagination, Autoplay]}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        className="mySwiper xl:h-[890px] lg:h-[690px] h-0 w-full"
      >
        {renderItems}
      </Swiper>
    </section>
  );
}
