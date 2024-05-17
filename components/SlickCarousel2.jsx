"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "./Container";

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);


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
    { id: 11, image: "/image/carousel3.svg" },
  ];


  const [activeImage, setActiveImage] = useState(imageItems[0]);
  const [current, setCurrent] = useState(0);

  console.log(current)

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    arrows: false,
    beforeChange: (current, next) => {
      const slideElements = document.querySelectorAll(".slick-slide");
      slideElements.forEach((el, index) => {
        if (index === next) {
          el.classList.add("slick-current");
        } else {
          el.classList.remove("slick-current");
        }
      });
    },
  };


  const handleAfterChange = (currentSlide) => {
    console.log(currentSlide)
    setCurrent(currentSlide)
    setActiveImage(imageItems[currentSlide]);
  };

  const settings2 = {

    asNavFor: nav1,
    ref: (slider) => (sliderRef2 = slider),
    slidesToShow: 7,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true, // Enable variable width
    speed: 500,
    arrows: false,
    className: "",

  };


  const renderImages1 = imageItems.map((item) => {
    return (
      <Container>
        <div key={item.id} className=" px-5" >
          <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
            <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
              <div>
                <Image
                  alt=""
                  className="w-full h-[281px] object-cover rounded-t-[15px]"
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
      </Container>
    );
  });

  return (
    <section className="mx-20 mt-32"  id="Fame">
       <div className=" flex flex-col items-center justify-center mb-16">
          <p className="lg:text-6xl md:text-3xl text-2xl  font-black leading-[43.2px] font-family-manifold mt-11 bg-gradient-to-r from-[#ED02ED] to-[#0279F0] inline-block text-transparent bg-clip-text">
          FAMELHIEM
          </p>
          <p className="lg:text-xl md:text-3xl text-2xl leading-[43.2px] mt-8 ">It is a long established fact that a reader will be distracted by the readable content</p>
        </div>
      <div className="slider-containerfkr text-white ">
        <Slider
          slidesToShow={3}
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
          afterChange={handleAfterChange}
          {...settings}
          className=" slick-slider-container  mb-20"
        >
          {renderImages1}
        </Slider>

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

        >

{imageItems.map((item, index) => {
  // Calculate the difference between activeImage ID and current item ID
  const difference = Math.abs(activeImage?.id - item.id);

  // Calculate the value to display based on the difference
  let displayValue = '';
  if (activeImage?.id - item.id === -10) {
    displayValue = Math.abs(-1);
  } else if (Math.abs(activeImage?.id - item.id) === 9) {
    displayValue = Math.abs(-2);
  } else if (Math.abs(activeImage?.id - item.id) === 8) {
    displayValue = Math.abs(-3);
  } else if (activeImage?.id - item.id === 10) {
    displayValue = 1;
  } else if (Math.abs(activeImage?.id - item.id) === 9) {
    displayValue = 2;
  } else if (Math.abs(activeImage?.id - item.id) === 8) {
    displayValue = 3;
  } else if (Math.abs(activeImage?.id - item.id) === 7) {
    displayValue = 4;
  } else {
    displayValue = Math.abs(activeImage?.id - item.id);
  }

    // Calculate the width for the image based on the difference
    let imageWidth = 140 - displayValue * 10;
    // Ensure minimum width is 100px
    imageWidth = Math.max(imageWidth, 100);

  // Calculate margin to center the image
  let margin = 0;
  if (activeImage && activeImage.id < item.id) {
    margin = (difference - 1) * 10;
  } else if (activeImage && activeImage.id > item.id) {
    margin = (difference - 1) * -10;
  }

  return (
    <div className="mx-2 !outline-none" key={item.id} style={{ marginLeft: `${margin}px` }}>
      <Image
        src={item.image}
        width={imageWidth}
        height={imageWidth}
        alt={`Image ${item.id}`}
        className={`transition-all duration-300 ease-in-out !outline-none ${
          +activeImage?.id === item.id ? "w-[140px] h-[140px] object-cover" : "mx-5"
        }`}
      />
      {/* <p>{displayValue}</p>
      <p>{item.id}</p> */}
    </div>
  );
})}


        </Slider>
      </div>
    </section>
  );
}

export default AsNavFor;
