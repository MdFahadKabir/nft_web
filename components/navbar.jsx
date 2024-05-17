import NavMobile from "@/components/NavMobile";
import { Button } from "@nextui-org/button";
import Image  from "next/image";
export const Navbar = () => {
  return (
    <>
      <div className="lg:mt-10 mt-5">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <NavMobile  />
          <div>
            <Image
              className="w-[104.73px] h-[35px]"
              width={500}
              height={500}
              alt="Fame Guild Logo"
              src="/image/logo.svg"
            />
          </div>

          <div>
            <Button className="w-[120px] h-[35px] rounded bg-[#D500E7] text-white text-sm font-semibold leading-[14px]">
              Join App
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
