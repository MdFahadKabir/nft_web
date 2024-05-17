import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Container from "./Container";
const Hero = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   // Play the video as soon as the component mounts
  //   if (videoRef.current) {
  //     videoRef.current.play().catch(error => console.error("Video play failed:", error));
  //   }
  // }, []);

  return (
    <Container>
      <section className="mb-24"  id="Hero">
        <div className=" lg:ps-20">
          <div className="lg:flex lg:gap-10 items-center">
            <div>
              {/* mbl responsive */}
              <div className="text-white text-center lg:text-[62px] md:text-5xl text-3xl font-black leading-[74.4px] font-family-manifold lg:hidden block lg:mt-0 md:my-5 mt-0">
                Build Your World on{" "}
                <span className="bg-gradient-to-r from-[#ed7802] to-[#ED02ED] inline-block text-transparent bg-clip-text">
                  Bitcoin
                </span>
              </div>
              {/* end  mbl*/}

              {/* web */}
              <div className="text-white lg:text-[62px] text-3xl font-black leading-[74.4px] font-family-manifold lg:block hidden">
                Build Your World{" "}
                <p className="lg:mt-8 -mt-9">
                  {" "}
                  on{" "}
                  <span className="bg-gradient-to-r from-[#ed7802] to-[#ED02ED] inline-block text-transparent bg-clip-text">
                    Bitcoin
                  </span>
                </p>
              </div>

              {/* end web */}
              <p className="lg:mt-6 lg:text-start text-center font-family-moonrof text-[#C6C6C6] lg:text-3xl  sm:text-2xl   font-medium leading-6">
                Artists and Communities with Superpower
              </p>

              <div className="lg:mt-[75px] mt-10 flex items-center gap-3 lg:justify-start justify-center">
                <Button className="leading-[19.08px] lg:w-[171px] lg:h-[50px]  md:w-[140px] md:h-[40px]   w-[120px] h-[36px] rounded-md bg-gradient-to-r from-[#ED02ED] to-[#0279F0] text-white lg:text-lg text-base font-semibold">
                  Join App
                </Button>

                <p className="text-[#179DFF] text-sm font-family-moonrof">
                  2369 People Registered 🤩
                </p>
              </div>
            </div>

            <div className="lg:mt-0 -mt-24 lg:block flex justify-center mx-auto">
              
              <video
              height={300}
              width={300}
              autoPlay
              muted
              loop
              src="/image/home-right.mp4"
              className="xl:w-full lg:w-[570px] lg:h-[570px] w-96 h-[450px] ">
              </video>
              {/* <Image
                className="xl:w-full lg:w-[670px] lg:h-[670px] w-96 h-[450px] lg:p-0 lg:m-0 py-20 my-16 "
                width={385}
                alt="Fame Guild hero Image"
                src="/image/globe.svg"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center lg:gap-20 gap-5 justify-center -mt-16">
          <div >
            <div className="lg:w-48 lg:h-32 md:w-44 md:h-24 w-24 h-20  rounded-[10px] bg-gradient-to-r from-[#FF9900]  to-[#ED02ED] p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900">
                <div className="text-white text-center">
                  <p className="text-[#179DFF] lg:text-xl md:text-lg text-xs font-bold font-family-manifold mb-3">
                    10K
                  </p>
                  <p className="text-white font-medium lg:text-xl text-base font-family-moonrof leading-[19.08px]">
                    World Art
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div >
            <div className="lg:w-48 lg:h-32 md:w-44 md:h-24 w-24 h-20  rounded-[10px] bg-gradient-to-r from-[#ED02ED]  to-[#0279F0] p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900">
                <div className="text-white text-center">
                  <p className="text-[#179DFF] lg:text-xl md:text-lg text-xs font-bold font-family-manifold mb-3">
                    10K
                  </p>
                  <p className="text-white font-medium lg:text-xl text-base font-family-moonrof leading-[19.08px]">
                    World Art
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div >
            <div className="lg:w-48 lg:h-32 md:w-44 md:h-24 w-24 h-20  rounded-[10px] bg-gradient-to-r from-[#0279F0]  to-[#ED7802] p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900">
                <div className="text-white text-center">
                  <p className="text-[#179DFF] lg:text-xl md:text-lg text-xs font-bold font-family-manifold mb-3">
                    10K
                  </p>
                  <p className="text-white font-medium lg:text-xl text-base font-family-moonrof leading-[19.08px]">
                    World Art
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
