import Image from "next/image";
import Container from "./Container";
const OurPartners = () => {
  return (
    <Container>
      <section className="lg:px-20 pt-20" id="Blog">
        <div className=" pb-16 pt-10 lg:flex justify-between items-center">
          <p className=" lg:text-4xl md:text-3xl text-2xl font-black leading-[43.2px] font-family-manifold bg-gradient-to-r from-[#ED02ED] to-[#0279F0] inline-block text-transparent bg-clip-text">
            NEW ARTICLES
          </p>
          <p className="text-white lg:text-[20px] text-base"> See All </p>
        </div>
        <div className="lg:flex items-center gap-10">
          <div className="lg:max-w-sm">
            <div className="">
              <Image
                className="object-contain w-full"
                width={500}
                height={500}
                alt="Fame Guild Article Image"
                src="/image/article.svg"
              />
            </div>
            <div className="bg-[#1C0C37] p-5">
              <p className="lg:text-[20px] text-base  text-white mb-3 line-clamp-2">
                It is a long established fact that a reader will be distracted
                by the ...
              </p>
              <p className="text-sm text-[#A9A9A9]"> 2 Jan, 2024 </p>
            </div>
          </div>
          <div className="lg:max-w-sm">
            <div className="">
              <Image
                className="object-contain w-full"
                width={500}
                height={500}
                alt="Fame Guild Article Image"
                src="../image/article.svg"
              />
            </div>
            <div className="bg-[#1C0C37] p-5">
              <p className="lg:text-[20px] text-base  text-white mb-3 line-clamp-2">
                It is a long established fact that a reader will be distracted
                by the ...
              </p>

              <p className="text-sm text-[#A9A9A9]"> 2 Jan, 2024 </p>
            </div>
          </div>
          <div className="lg:max-w-sm">
            <div>
              <Image
                className="object-contain w-full"
                width={500}
                height={500}
                alt="Fame Guild Article Image"
                src="/image/article.svg"
              />
            </div>
            <div className="bg-[#1C0C37] p-5">
              <p className="lg:text-[20px] text-base  text-white mb-3 line-clamp-2">
                It is a long established fact that a reader will be distracted
                by the ...
              </p>
              <p className="text-sm text-[#A9A9A9]"> 2 Jan, 2024 </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurPartners;
