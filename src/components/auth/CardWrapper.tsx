import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Header from "./Header";
import BackButton from "./BackButton";
import Social from "./Social";

interface loginFormProps {
  children: React.ReactNode;
  social: boolean;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export default function CardWrapper({
  children,
  social,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: loginFormProps) {
  return (
    <Card className="w-[400px] flex flex-col">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {social && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
