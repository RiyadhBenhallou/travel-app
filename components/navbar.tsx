import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import Menu from "./ui/menu";

export default function Navbar() {
  return (
    <nav className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        {/* Add more navbar items here if needed */}
        <ul className="hidden lg:flex gap-6 min-h-full">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="flex items-center justify-center font-normal pb-1.5 hover:font-bold transition-all"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="hidden lg:inline-block">
          <Button type="button" icon="/user.svg" variant="btn_dark_green">
            Login
          </Button>
        </div>
        {/* <div className="inline-block md:hidden">
          <Image src="/menu.svg" alt="menu" width={24} height={24} />
        </div> */}
        <Menu />
      </div>
    </nav>
  );
}
