"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


const RoadMap = () => {

  const items = [
    {
      year: 2023,
      phase: 'Phase 1',
      description: 'It is a long established fact that a reader will be distracted by the readable content'
    },
    {
      year: 2024,
      phase: 'Phase 2',
      description: 'It is a long established fact that a reader will be distracted by the readable content'
    },
    {
      year: 2025,
      phase: 'Phase 3',
      description: 'It is a long established fact that a reader will be distracted by the readable content'
    },
    {
      year: 2026,
      phase: 'Phase 4',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt'
    }
  ]

  function Circle(props) {
    return (
      <svg
        {...props}
        width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27.8235" cy="27.8236" r="27.7059" fill="url(#paint0_radial_517_12)" />
        <path d="M17.6602 27.2947C14.8786 37.3304 18.8192 42.7985 21.1372 44.2782C23.262 48.717 33.8863 50.6469 43.931 50.4539C53.9757 50.261 50.6918 36.7514 50.6918 28.6457C50.6918 20.54 44.5105 16.8731 43.931 10.6973C43.3515 4.52152 33.8863 3.74955 31.1819 10.6973C28.4776 17.6451 21.1372 14.7502 17.6602 27.2947Z" fill="url(#paint1_radial_517_12)" />
        <defs>
          <radialGradient id="paint0_radial_517_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.8235 27.8236) rotate(90) scale(27.7059)">
            <stop stop-color="#220059" />
            <stop offset="0.361706" stop-color="#22004D" />
            <stop offset="0.739828" stop-color="#140035" />
            <stop offset="1" stop-color="#0F0027" />
          </radialGradient>
          <radialGradient id="paint1_radial_517_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.6339 31.2469) rotate(-83.2278) scale(11.4666 11.8531)">
            <stop stop-color="#ACACAC" stop-opacity="0.51" />
            <stop offset="1" stop-color="#2A1B42" stop-opacity="0.05" />
          </radialGradient>
        </defs>
      </svg>

    )
  }


  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change item every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <section className=" pt-2 mb-[600px]" id="RoadMap">
        <div className="mx-16 mb-32">
          <div className="lg:text-[120px] md:text-[80px] text-[38px] font-black leading-[128px] font-family-manifold mt-11 text-custom-color">
            <div className="flex items-center lg:gap-28 gap-5">
              <div> FAME </div>
              <div> GUILD </div>
            </div>
          </div>
          <p className="text-[#179DFF] leading-[43.2px] lg:-mt-[25px] md:-mt-9 lg:text-[120px] md:text-[80px]  text-[38px] font-black font-family-manifold">
            ROADMAP
          </p>
        </div>
        <div className=" text-white ">
          {/* <h1 className="text-4xl font-bold text-center mb-10">ROADMAP</h1> */}
          <div className="flex justify-between items-center mt-20">
            <div className="flex-1">
              <div className="relative">

                <Image
                  className="w-screen absolute -top-80 -z-20"
                  width={1200}
                  height={1200}
                  alt="NextUI hero Image"
                  src="/image/roadmap.png"
                />

                <div className="absolute inset-0 flex items-center">
                  <div style={{
                    height: '2px',
                    width: '100%',
                    backgroundImage: 'linear-gradient(to right, transparent, #FFFFFF, transparent)'
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center animate-move">
                  <div style={{
                    height: '2px',
                    width: '50%',
                    backgroundImage: 'linear-gradient(to right, transparent, #6d44b8, #bd1e59)'
                  }} />
                </div>

                <div className="relative flex justify-center items-center animate-carousel gap-44 ms-48">
                  {items.slice(currentStartIndex, currentStartIndex + 3).map((item, index) => (
                    <div key={index} className={`item1 flex flex-col items-center justify-center h-full mb-7 ${index === 1 ? 'larger' : ''}`}>
                      <Circle className=" absolute mt-7 shadow-pink-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-full" />
                      <div className="mt-28">{item.year}</div>
                      <div className="text-center w-48">
                        <div className="font-bold mt-28">{item.phase}</div>
                        <div className="text-sm mt-2">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/*

                  <div className="item2  flex flex-col items-center justify-center h-full absolute -top-4 left-[500px] ">
                    <Circle className="absolute mt-7 shadow-pink-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-full" />
                    <div className="mt-28">2024</div>
                    <div className="text-center w-48">
                      <div className="font-bold mt-28">Phase 2</div>
                      <div className="text-sm mt-2">
                        It is a long established fact that a reader will be distracted by the readable content
                      </div>
                    </div>
                  </div>
                 */}
              </div>

            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default RoadMap;
