import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import Header from "@/components/auth/Header";
import Social from "@/components/auth/Social";
import BackButton from "@/components/auth/BackButton";

interface loginFormProps {
  children: React.ReactNode;
  social: boolean;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const LoginForm = ({
  children,
  social,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: loginFormProps) => {
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
};
