import { Image } from "@nextui-org/image";
import Container from "./Container";
import { Spotlight } from "./Spotlight";
import { SpotlightPurple } from "./SpotlightPurple";
const Services = () => {
  return (
    <Container>
      <section className="lg:px-20 pt-20 relative" id="Services">
        <div className="flex justify-center mb-16">
          <p className="lg:text-4xl md:text-3xl text-2xl font-black leading-[43.2px] font-family-manifold mt-11 bg-gradient-to-r from-[#ED02ED] to-[#0279F0] inline-block text-transparent bg-clip-text">
            Services
          </p>
        </div>
        <Spotlight fill="#0279F0" className="bottom-20  absolute -z-20"  />

        <SpotlightPurple fill="#ED02ED" className="-bottom-32  absolute -z-20"  />



        <div className="flex justify-center">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 xl:gap-x-10  lg:gap-x-28 md:gap-x-8 gap-y-8 ">
            <div className="col-span-2 w-[350px] h-[175px] rounded-[15px] bg-transparent-custom">
              <div className="p-7  ">
                <div className="flex items-center gap-5">
                  <p className="text-white lg:text-xl text-lg leading-[20px] font-semibold font-family-manifold">
                    Buy and Sell
                  </p>
                  <Image
                    className="w-[30px] h-[30px] object-contain rounded-none"
                    width={385}
                    alt="NextUI hero Image"
                    src="../image/buy.svg"
                  />
                </div>

                <p className="text-[#179DFF] text-sm font-normal leading-loose pt-6 font-family-moonrof">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            {/* .. */}
            <div className="col-span-2 w-[350px] h-[175px] rounded-[15px] bg-transparent-custom">
              <div className="p-7  ">
                <div className="flex items-center gap-5">
                  <p className="text-white lg:text-xl text-lg leading-[20px] font-semibold font-family-manifold">
                    Launchpad
                  </p>
                  <Image
                    className="w-[25px] h-[25px] object-contain rounded-none"
                    width={385}
                    alt="NextUI hero Image"
                    src="../image/Launchpad.svg"
                  />
                </div>

                <p className="text-[#179DFF] text-sm font-normal leading-loose pt-6 font-family-moonrof">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            {/* . */}
            <div className="col-span-2 w-[350px] h-[175px] rounded-[15px] bg-transparent-custom">
              <div className="p-7  ">
                <div className="flex items-center gap-5">
                  <p className="text-white lg:text-xl text-lg leading-[20px] font-semibold font-family-manifold">
                    Hybrid Auction
                  </p>
                  <Image
                    className="w-[25px] h-[25px] object-contain rounded-none"
                    width={385}
                    alt="NextUI hero Image"
                    src="../image/hybrid.svg"
                  />
                </div>

                <p className="text-[#179DFF] text-sm font-normal leading-loose pt-6 font-family-moonrof">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-start-2 w-[350px] h-[175px] rounded-[15px] bg-transparent-custom">
                <div className="p-7  ">
                  <div className="flex items-center gap-5">
                    <p className="text-white lg:text-xl text-lg leading-[20px] font-semibold font-family-manifold">
                      Tracking
                    </p>
                    <Image
                      className="w-[25px] h-[25px] object-contain rounded-none"
                      width={385}
                      alt="NextUI hero Image"
                      src="../image/tracking.svg"
                    />
                  </div>

                  <p className="text-[#179DFF] text-sm font-normal leading-loose pt-6 font-family-moonrof">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>

              {/* . */}
              <div className=" col-span-2 lg:col-start-4 md:col-start-2 w-[350px] h-[175px] rounded-[15px] bg-transparent-custom">
                <div className="p-7  ">
                  <div className="flex items-center gap-5">
                    <p className="text-white lg:text-xl text-lg leading-[20px] font-semibold font-family-manifold">
                      Worlds
                    </p>
                    <Image
                      className="w-[25px] h-[25px] object-contain rounded-none"
                      width={385}
                      alt="NextUI hero Image"
                      src="../image/envelope.svg"
                    />
                  </div>

                  <p className="text-[#179DFF] text-sm font-normal leading-loose pt-6 font-family-moonrof">
                    Community focused area with dedicated collection wall,
                    public, private chat groups and onchain voting mechanisms.
                  </p>
                </div>
              </div>
              
            {/* . */}
          </div>
        </div>
        <div>

        </div>
      </section>
    </Container>
  );
};

export default Services;
