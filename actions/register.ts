"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { registerSchema } from "../schemas";
import { db } from "@/lib/db";
import { error } from "console";
import { findUserByEmail } from "../data/user";

export const registerAction = async (value: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Somthing went wrong for register !" };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already in use!",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User Created" };
};
