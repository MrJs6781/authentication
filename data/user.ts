import { db } from "@/lib/db";

export const findUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const findUserByID = async (ID: string) => {
  try {
    const user = await db.user.findUnique({ where: { id: ID } });

    return user;
  } catch {
    return null;
  }
};
