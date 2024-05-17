"use client"
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react";
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

  const settings2 = {
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    speed: 500,
    arrows: false,
    className: "",
  };


  return (
    <div className="slider-container">
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        afterChange={handleAfterChange}
        className=""
      >
        {imageItems.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
            />
          </div>
        ))}
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings2}
      >
        {/* ... */}
        {imageItems.map((item) => (
          <div className="flex justify-center mx-auto gap-10" key={item.id}>
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
      </Slider>
    </div>
  );
}

export default SlickCarousel;
