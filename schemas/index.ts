import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message : "Email is required"
  }),
  password: z.string(),
});

export const registerSchema = z.object({
  email: z.string().email({
    message : "Email is required"
  }),
  password: z.string().min(6 , {message : "Password is Required"}),
  name : z.string({message : "Please enter your name"}).min(1 , {message : "Name is Required"})
});
