"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface loginButton {
  children: JSX.Element;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: loginButton) {
  const router = useRouter();

  const clickLoginHandler = () => {
    router.push("/auth/login");
  };

  if (mode == 'modal') {
    return (
        <span></span>
    )
  }

  return (
    <span onClick={clickLoginHandler} className="cursor-pointer">
      {children}
    </span>
  );
}
