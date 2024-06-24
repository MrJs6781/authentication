"use server";

import * as z from "zod";

import { loginSchema } from "../schemas";

export const loginAction = async (value: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Somthing went wrong !" };
  }

  return { success: "Email Sent" };
};
