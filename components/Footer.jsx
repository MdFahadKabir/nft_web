"use client";
import Image from "next/image";
import {
  FaDiscord,
  FaFacebookSquare,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "./Container";
const Footer = () => {
  return (
    <Container>
      <section>
        <hr className="my-14 border-[#150050] mx-20" />
        <div className="flex mx-auto justify-center">
          <div>
            <Image
              src="/image/logo.svg"
              className="lg:w-[239px] w-40 object-cover "
              width={200}
              height={200}
              alt="Fame Guild Logo"
            />
            <p className="text-sm text-[#179DFF] text-center my-5">
              Copyright © 2024{" "}
            </p>
            <div className="flex text-white lg:text-2xl text:xl justify-center gap-5 my-10">
              <FaXTwitter />
              <FaFacebookSquare />
              <FaLinkedin />
              <FaYoutube />
              <FaTelegram />
              <FaDiscord />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Footer;
