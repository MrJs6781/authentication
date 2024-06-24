"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface backButtonProps {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: backButtonProps) {
  return (
    <Button className="w-full" variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
