"use client"

import Link from "next/link"
import { useEffect, useState } from "react";


export const TopNav = () => {

  let [activeTab, setActiveTab] = useState("Hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionId = section.id;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveTab(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);

  return (
    <>
      <div className="lg:visible md:visible invisible sticky top-96 md:top-48 lg:top-36 xl:top-0 z-50 ">
        <div className="text-white text-sm font-semibold relative">
          <div className="flex gap-[72px] -rotate-90 -translate-x-1/2 ms-10">
            <Link
              href="#Blog"
              className={activeTab === "Blog" ? "text-[#ED02ED]" : ""}
              onClick={() => setActiveTab("Blog")}
            > Blog</Link>
            <Link href="#RoadMap"
              className={activeTab === "RoadMap" ? "text-[#ED02ED]" : ""}
              onClick={() => setActiveTab("RoadMap")}
            > Road Map</Link>
       <Link href="#OurTeam"
  className={activeTab === "OurTeam" ? "text-[#ED02ED]" : ""}
  onClick={() => setActiveTab("OurTeam")}
> Team</Link>
            <Link
              href="#Fame"
              className={activeTab === "Fame" ? "text-[#ED02ED]" : ""}
              onClick={() => setActiveTab("Fame")}
            > Fame Hiem</Link>
            <Link href="#Services"
              className={activeTab === "Services" ? "text-[#ED02ED]" : ""}
              onClick={() => setActiveTab("Services")}
            > Services</Link>
            <Link href="#Hero"
              className={activeTab === "Hero" ? "text-[#ED02ED]" : ""}
              onClick={() => setActiveTab("Hero")}
            >Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};
