import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

interface HeaderProps {
  label: string;
}

const customFont = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Header({ label }: HeaderProps) {
  return (
    <span className="w-full flex flex-col gap-3 items-center">
      <h1 className={cn("text-[30px] font-semibold", customFont.className)}>
        🔐 Auth
      </h1>
      <p className="text-[20px] font-medium text-gray-700">{label}</p>
    </span>
  );
}
