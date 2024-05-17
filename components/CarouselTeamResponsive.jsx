"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardFooter, Image } from "@nextui-org/react";
export default function App() {
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
        <SwiperSlide>
        <div className="flex items-center gap-5">
            <div>
              <Card isFooterBlurred radius="lg" className="border-none  lg:w-0 w-full">
                <Image
                  alt="Fame Guild Team Image"
                  className="object-cover md:w-[300px] w-auto"
                  height={200}
                  src={item.image}
                  width={300}
                />
                <CardFooter className="justify-start  items-start bg-[#00000023] flex-col  overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(98%_-_8px)] shadow-small ml-1.5 mb-1 z-10">
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
    <>
      <div className="">
        <Swiper
       
          breakpoints={{

            340: {
              slidesPerView: 1.7,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 2.7,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 2.7,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: 3.7,
              spaceBetween: 60,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {renderItems}
        </Swiper>
      </div>
    </>
  );
}
