import Image from "next/image";
import React from "react";

export default function Button({
  type,
  children,
  icon,
  variant = "",
}: {
  type: "button" | "submit";
  children: React.ReactNode;
  icon?: string;
  variant?: string;
}) {
  return (
    <button
      className={`${variant} rounded-full flex items-center justify-center gap-2 px-6 py-3 font-bold whitespace-nowrap text-sm`}
    >
      {icon && <Image alt="icon" src={icon} height={24} width={24} />}
      {children}
    </button>
  );
}
