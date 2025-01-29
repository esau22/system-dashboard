"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Inicio", href: "/" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Blog", href: "blog" },
  { name: "Contact", href: "contact" },
];

const NavItem = ({ isMobile }: { isMobile?: boolean }) => {
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        isMobile ? "flex flex-col space-y-4" : "hidden sm:flex sm:space-x-10"
      )}
    >
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="w-fit">
          <li
            className={cn(
              "uppercase hover:text-primary text-xl relative inline-block",
              pathname === link.href &&
                "text-primary after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary sm:after:bottom-[-4px]"
            )}
          >
            {link.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavItem;
