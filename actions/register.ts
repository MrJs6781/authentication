"use server";

import * as z from "zod";

import { loginSchema, registerSchema } from "../schemas";

export const registerAction = async (value: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Somthing went wrong for register !" };
  }

  return { success: "Email Sent for register" };
};
