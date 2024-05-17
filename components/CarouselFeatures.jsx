"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";

export default function App() {
  const items = [
    {
      id: 1,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 2,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 3,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 4,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 5,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 6,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 7,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 8,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
    {
      id: 9,
      title: "Worlds",
      description:
        "Community focused area with dedicated collection wall, public, private chat groups and onchain voting mechanisms.",
    },
  ];

  const renderItems = items.map((item) => {
    return (
      <>
        <SwiperSlide>
          <div className="lg:w-[295px] w-[295px] h-[191px] rounded-[15px] custom-dark bg-feature">
            <div className="p-7">
              <p className="text-white lg:text-xl text-lg leading-[20px] font-semibold font-family-manifold">
                {item.title}
              </p>
              <p className="text-[#179DFF] text-sm font-normal leading-loose pt-6 font-family-moonrof">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </>
    );
  });

  return (
    <>
      <div>
        <Swiper

          breakpoints={{
            340: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2.7,
              spaceBetween: 150,
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
