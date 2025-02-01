import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <Container className="px-0">
      <div className="grid sm:grid-cols-2 max-sm:gap-6">
        <div className="text-center p-6 flex flex-col justify-center items-center">
          <h3 className="font-extrabold text-5xl text-primary leading-tight">
            <span className="text-gray-800">Ofertas</span> Especiales!
          </h3>
          <h6 className="text-lg text-gray-800 mt-4">
            Descubre increíbles descuentos, por tiempo limitado
          </h6>

          <Button label="Get Startd" className="mt-8" />

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link href={"#"} className="flex items-center text-primary gap-2">
              180-548-2588
            </Link>
            <Link href={"#"} className="flex items-center text-primary gap-2">
              info@example.com
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-end items-center p-2 bg-gradient-to-b from-primary to-blue-400 rounded-bl-[230px] w-full h-full">
          <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-primary to-blue-400 p-5">
            <Image
              src={"/travel-banner.jpg"}
              className="w-full h-full rounded-full object-none border-8 border-white"
              width={150}
              height={150}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
