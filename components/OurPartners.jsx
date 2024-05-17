import { Image } from "@nextui-org/image";
import Container from "./Container";
const OurPartners = () => {
  return (
    <Container>
      <section className="lg:px-20 pt-20">
        <div className="flex justify-center mx-auto">
          <div className="w-[803px] lg:h-60 h-52 rounded-[30px] bg-gray-800">
            <div className="flex justify-center">
              <p className="lg:pb-16 pb-10 pt-10 lg:text-4xl md:text-3xl text-2xl font-black leading-[43.2px] font-family-manifold bg-gradient-to-r from-[#ED02ED] to-[#0279F0] inline-block text-transparent bg-clip-text">
                Our Partners
              </p>
            </div>

            <div className="flex justify-center mx-auto items-center lg:gap-20 gap-10">
              <div>
                <Image
                  className="lg:w-[153px] w-28 object-contain "
                  width={500}
                  alt="NextUI hero Image"
                  src="../image/partner1.svg"
                />
              </div>

              <div>
                <Image
                  className="lg:w-[153px] w-28 object-contain "
                  width={500}
                  alt="NextUI hero Image"
                  src="../image/partner2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurPartners;
