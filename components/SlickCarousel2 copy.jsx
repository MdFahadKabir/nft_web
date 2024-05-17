// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// function AsNavFor() {
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   let sliderRef1 = useRef(null);
//   let sliderRef2 = useRef(null);

//   useEffect(() => {
//     setNav1(sliderRef1);
//     setNav2(sliderRef2);
//   }, []);

//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     speed: 500,
//     arrows: false,
//   };

//   return (
//     <div className="slider-container text-white">
//       <Slider

//         slidesToShow={3}
//         asNavFor={nav2}
//         ref={(slider) => (sliderRef1 = slider)}
//         {...settings}
//       >
//         <div className="px-5">

//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//       </Slider>
//       {/* ............... */}
//       <Slider
//         asNavFor={nav1}
//         ref={(slider) => (sliderRef2 = slider)}
//         slidesToShow={7}
//         swipeToSlide={true}
//         focusOnSelect={true}
//         {...settings}
//         className="flex flex-col gap-20"
//       >
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel3.svg" /> </div>
//         </div>
//         <div className="px-5">
//           <div className=""><Image alt="" className="w-full object-contain" width={200} height={200} src="/image/carousel2.svg" /> </div>
//         </div>

//       </Slider>
//     </div>
//   );
// }

// export default AsNavFor;

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

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

  // const settings2 = {
  //   asNavFor: nav1,
  //   ref: (slider) => (sliderRef2 = slider),
  //   slidesToShow: 7,
  //   swipeToSlide: true,
  //   focusOnSelect: true,
  //   centerMode: true,
  //   variableWidth: true, // Enable variable width
  //   speed: 500,
  //   arrows: false,
  //   className: "flex flex-col gap-20",
  //   beforeChange: (current, next) => {
  //     const slideElements = document.querySelectorAll(".slick-slide2");
  //     slideElements.forEach((el, index) => {

  //       const width =
  //         index === next
  //           ? 300 // Middle item width
  //           : index === next - 1 || index === next + 1
  //           ? 250 // Left and right items width
  //           : 200; // Rest of the items width

  //       el.style.width = `${width}px`;

  //     });
  //   },
  // };

  // ... (previous code)

  // ... (previous code)

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

  // ... (remaining code)

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

  const renderImages = imageItems.map((item) => {
    return (
      <>
        <div className="px-unit-3.5 ">
          <Image
            alt=""
            className={"w-full object-contain"}
            width={200}
            height={200}
            src="/image/carousel3.svg"
          />
        </div>{" "}
      </>
    );
  });


  const renderImages2 = imageItems.map((item) => {
    return (
      <>
        <div className="px-unit-3.5 ">
          <Image
            alt=""
            className={"w-full object-contain"}
            width={200}
            height={200}
            src="/image/carousel3.svg"
          />
        </div>{" "}
      </>
    );
  });

  return (
    <div className="mx-20 mt-32 ">
      <div className="slider-container text-white">
        <Slider
          slidesToShow={3}
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
          {...settings}
          className=" slick-slider-container  mb-20"
        >
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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

          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
          <div className="px-5">
            <div className="h-[410px] w-[315px] rounded-[15px] bg-gradient-to-r from-[#0094FF]  to-[#D500E7] p-[2px]">
              <div className=" h-full w-full items-center justify-center rounded-[15px] bg-violet-950">
                <div>
                  <Image
                    alt=""
                    className="w-full h-[281px]  object-cover rounded-t-[15px]"
                    width={310}
                    height={281}
                    src="/image/carousel.svg"
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
        </Slider>

        <Slider
          // asNavFor={nav1}
          // ref={(slider) => (sliderRef2 = slider)}
          // slidesToShow={7}
          // swipeToSlide={true}
          // focusOnSelect={true}
          {...settings2}
        >
          {renderImages}
        </Slider>
      </div>
    </div>
  );
}

export default AsNavFor;
