import { LoginForm } from "@/components/auth/LoginForm";
import React from "react";

export default function page() {
  return (
    <LoginForm
      headerLabel="Welcome back :)"
      social
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"
    >
      this is a text
    </LoginForm>
  );
}
