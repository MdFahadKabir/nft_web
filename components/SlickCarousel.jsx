"use client"
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const imageItems = [
  { id: 1, image: "/image/carousel3.svg" },
  { id: 2, image: "/image/carousel2.svg" },
  { id: 3, image: "/image/carousel3.svg" },
  { id: 4, image: "/image/carousel2.svg" },
  { id: 5, image: "/image/carousel3.svg" },
  { id: 6, image: "/image/carousel2.svg" },
  { id: 7, image: "/image/carousel3.svg" },
  { id: 8, image: "/image/carousel2.svg" },
  { id: 9, image: "/image/carousel3.svg" },
  { id: 10, image: "/image/carousel2.svg" },
];

// ... (previous imports)

function SlickCarousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  console.log(activeImage)
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const handleAfterChange = (currentSlide) => {
    console.log(currentSlide)
    // Update the active image based on the current slide index
    setActiveImage(imageItems[currentSlide]);
  };

  return (
    <div className="slider-container">


      <Slider
        className="center"
        centerMode={true}
        infinite={true}
        centerPadding="0px"
        speed={500}
        arrows={false}
        beforeChange={(current, next) => {
          const slideElements = document.querySelectorAll(".slick-slide");
          slideElements.forEach((el, index) => {
            if (index === next) {
              el.classList.add("slick-current");
            } else {
              el.classList.remove("slick-current");
            }
          });
        }}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        afterChange={handleAfterChange}
      >
        {imageItems.map((item) => (
        <div  key={item.id} className=" px-5">
        <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
          <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
            <div>
              <Image
                alt=""
                className="w-full h-[281px]  object-cover rounded-t-[15px]"
                width={310}
                height={281}
                src={item.image}
              />
              
            </div>
            <div class="p-5">
              <div className="flex items-center text-white justify-between text-[20px] mb-5">
                <p>Super Hero</p> <FaArrowRight />
              </div>

              <div className="flex items-center text-white justify-between text-[14px]">
                <p>Floor Price</p> <p>24h Volume</p>
              </div>
              <div className="flex items-center text-white justify-between text-[14px] font-bold ">
                <p> 1.25 ETH</p> <p> 1.25 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        ))}
      </Slider>

      {/* <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={7}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings2}
      >
        {imageItems.map((item) => (
          <div className="" key={item.id}>
            <Image src={item.image}
            width={100}
            height={100}
              alt={`Image ${item.id}`}
              // className={+activeImage?.id - 1 == item.id || +activeImage?.id + 1 == item.id ? "w-[100px] h-[100px]" : "" +activeImage?.id  == item.id ? "w-[400px] h-[400px]" : ""}
              className={
                +activeImage?.id == item.id ? "w-[150px] h-[150px] object-cover" : ``
              }
            />
            <p>{+activeImage?.id - item.id}</p>
          </div>
        ))}
      </Slider> */}
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={5}
        arrows={false}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={true}
        variableWidth={true}
        infinite={true}
        speed={500}
        className=""

      >
        {imageItems.map((item, index) => {
          let actualIndex = (index + Math.floor(imageItems.length / 2)) % imageItems.length;
          return (
            <div className="px-unit-3.5" key={item.id}>
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={`Image ${item.id}`}
                className={
                  +activeImage?.id === item.id
                    ? "w-[150px] h-[150px] object-cover"
                    : "w-[100px] h-[100px]"
                }
              />
              <p>{+activeImage?.id - item.id}</p>
            </div>
          );
        })}
      </Slider>

    </div>
  );
}

export default SlickCarousel;
