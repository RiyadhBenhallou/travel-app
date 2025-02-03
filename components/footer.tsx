import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        <Image src="/hilink-logo.svg" alt="logo" width={100} height={100} className="self-start" />
        <div className="flex flex-wrap items-start gap-16">
          {FOOTER_LINKS.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-bold">{FOOTER_CONTACT_INFO.title}</h3>
          <ul className="flex flex-col gap-1">
            {FOOTER_CONTACT_INFO.links.map((link) => (
              <Link key={link.value} href={"#"}>
                <span className="font-bold text-sm">{link.label}:</span> {link.value}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">{SOCIALS.title}</h3>
          <ul className="flex items-center gap-4">
            {SOCIALS.links.map((link) => (
              <Link key={link} href={"#"}>
                <Image src={link} alt="social" width={24} height={24} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
        <div className="border bg-gray-20 my-6" />
        <p className="text-sm text-gray-300 text-center capitalize">
          {new Date().getFullYear()} Hilink | All rights reserved
        </p>
    </footer>
  );
}

export function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">{title}</h3>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-500 hover:text-green-500 text-sm">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
