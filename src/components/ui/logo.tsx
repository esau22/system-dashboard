import Link from "next/link";
import { lusitana } from "./font";
import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          `${lusitana.className} text-2xl hover:text-primary font-bold uppercase duration-300 ease-out relative group overflow-hidden`
        )}
      >
        Dashboard
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary -translate-x-[105%] group-hover:translate-x-0 duration-300 ease-out" />
      </h2>
    </Link>
  );
};

export default Logo;
