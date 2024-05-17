import { Image } from "@nextui-org/image";
import Container from "./Container";
const Mission = () => {
  return (
    <Container>
      <section className="lg:px-20 pt-20">
        <div className="w-full rounded-[30px] bg-gradient-to-r from-[#ED02ED]  to-[#0279F0] p-[2px]">
          <div className="flex h-full w-full items-center justify-center rounded-[30px] bg-gray-800">
            <div className="lg:px-10 px-5 lg:py-20 py-5">
              <div className="lg:flex items-center gap-20">
                <div className="lg:w-[70%]">
                  <p className="lg:text-4xl md:text-3xl text-2xl font-black leading-[43.2px] font-family-manifold bg-gradient-to-r from-[#ED02ED] to-[#0279F0] inline-block text-transparent bg-clip-text">
                    Our Mission
                  </p>

                  <p className="text-[#179DFF] lg:py-7 py-5 lg:text-lg text-sm  leading-[20px] font-semibold font-family-manifold">
                    To Unite Top BitcoinNFTs Across Bitcoin And Its Layer 1
                    Ecosystems Under One Fortress.
                  </p>
                  <p className="text-white lg:text-base text-sm font-normal leading-loose font-family-moonrof">
                    By bringing together the most sought-after Bitcoin NFTs from
                    the bitcoin and layer 2 space, we hope to create a hub of
                    liquidity and market activity that will benefit both
                    existing and new users. We aim to make it easier for users
                    to access the best Bitcoin NFTs and enable them to trade and
                    transact quickly and securely.
                  </p>
                </div>
                <div className="w-[30%] lg:block hidden">
                  {" "}
                  <Image
                    className="object-contain"
                    width={500}
                    alt="Fame Guild Mission Image"
                    src="/image/mission.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Mission;
