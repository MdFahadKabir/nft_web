"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaArrowDown } from "react-icons/fa";
import Container from "./Container";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Container >
      <div className=" pb-16 pt-10 flex justify-center">
        <p className="font-family-manifold lg:text-4xl md:text-3xl text-2xl  text-white mt-10">
          {" "}
          FAQ
        </p>
      </div>
      <Accordion
        showDivider={false}
        className="lg:text-2xl md:text-lg text-base text-[#179DFF]"
        defaultExpandedKeys={["theme"]}
      >
        <AccordionItem
          className="bg-[#1C0C37] lg:mx-[70px] lg:px-6 px-4 "
          key="1"
          aria-label="What is FameGuild?"
          indicator={
            <FaArrowDown className="lg:text-2xl md:text-lg text-base text-[#179DFF] " />
          }
          title={
            <p >
              <span className="text-[#179DFF] lg:text-2xl md:text-lg text-base">
                What is FameGuild?
              </span>
            </p>
          }
        >
          <p className="lg:text-2xl md:text-lg text-base text-[#179DFF]">
            {" "}
            {defaultContent}
          </p>
        </AccordionItem>

        <AccordionItem
          className="bg-[#1C0C37] mt-5 lg:mx-[70px] lg:px-6 px-4"
          key="2"
          aria-label="What is FameGuild?"
          indicator={
            <FaArrowDown className="lg:text-2xl md:text-lg text-base text-[#179DFF]" />
          }
          title={
            <p >
              <span className=" text-[#179DFF] lg:text-2xl md:text-lg text-base">
                Does FameGuild have public sale round?
              </span>
            </p>
          }
        >
          <p className="lg:text-2xl md:text-lg text-base text-[#179DFF]">
            {" "}
            {defaultContent}
          </p>
        </AccordionItem>
        <AccordionItem
          className="bg-[#1C0C37] mt-5 lg:mx-[70px] lg:px-6 px-4"
          key="3"
          aria-label="What is FameGuild?"
          indicator={
            <FaArrowDown className="lg:text-2xl md:text-lg text-base text-[#179DFF]" />
          }
          title={
            <p >
              <span className="text-[#179DFF] lg:text-2xl md:text-lg text-base">
                Does FameGuild have a token?
              </span>
            </p>
          }
        >
          <p className="lg:text-2xl md:text-lg text-base text-[#179DFF]">
            {" "}
            {defaultContent}
          </p>
        </AccordionItem>

        <AccordionItem
          className="bg-[#1C0C37] mt-5 lg:mx-[70px] lg:px-6 px-4"
          key="4"
          aria-label="What is FameGuild?"
          indicator={
            <FaArrowDown className="lg:text-2xl md:text-lg text-base text-[#179DFF]" />
          }
          title={
            <p >
              <span className=" text-[#179DFF] lg:text-2xl md:text-lg text-base">
                What is the tokenomics for $FAME token?
              </span>
            </p>
          }
        >
          <p className="lg:text-2xl md:text-lg text-base text-[#179DFF]">
            {" "}
            {defaultContent}
          </p>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
